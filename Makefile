SDK ?= "iphonesimulator"
DESTINATION ?= "platform=iOS Simulator,name=iPhone X"
PROJECT := TypewriterExample
XC_ARGS := -workspace $(PROJECT).xcworkspace -scheme $(PROJECT) -destination $(DESTINATION)

# update: updates typewriter and all e2e tests to use the latest Tracking Plans.
.PHONY: update
update:
	@yarn dev --config=tests/e2e/javascript-node update

# test: launches our end-to-end test for each client library. 
.PHONY: test
test:
	@### Boot the sidecar API to capture API requests.
	@make docker

	@### JavaScript node
	@make test-javascript-node	

	@### TypeScript node
	@make test-typescript-node

	@### JavaScript browser
	@# TODO

	@### TypeScript browser
	@# TODO

	@### iOS
	@make test-ios

	@### Android
	@# TODO

# docker: launches the sidecar for e2e snapshot testing
.PHONY: docker
docker:
	@docker-compose -f tests/e2e/docker-compose.yml up -d
	@# Make sure the snapshotter is available and all messages have been cleared from any previous tests:
	@sleep 3
	@curl -f "http://localhost:8765/messages" > /dev/null 2>&1

# teardown: shuts down the sidecar.
.PHONY: teardown
teardown:
	@docker-compose -f tests/e2e/docker-compose.yml down

.PHONY: test-javascript-node
test-javascript-node:
	@echo "\n>>>	🏃 Running JavaScript Node client test suite...\n"
	@yarn run -s dev --config=./tests/e2e/javascript-node
	@cd tests/e2e/javascript-node && \
		yarn && \
		yarn run -s test
	@yarn run ts-node ./tests/e2e/snapshot.ts ./tests/e2e/javascript-node

.PHONY: test-typescript-node
test-typescript-node:
	@echo "\n>>>	🏃 Running TypeScript Node client test suite...\n"
	@yarn run -s dev --config=./tests/e2e/typescript-node
	@cd tests/e2e/typescript-node && \
		yarn && \
		yarn run -s test
	@yarn run ts-node ./tests/e2e/snapshot.ts ./tests/e2e/typescript-node

.PHONY: test-ios
test-ios:
	@echo "\n>>>	🏃 Running iOS client test suite...\n"
	@yarn run -s dev --config=./tests/e2e/ios
	@cd tests/e2e/ios && \
		pod install && \
		set -o pipefail && xcodebuild test $(XC_ARGS) | xcpretty
	@yarn run ts-node ./tests/e2e/snapshot.ts ./tests/e2e/ios

.PHONY: clean
clean:
	@find tests/e2e/ios/TypewriterExample/Analytics/ -type f -not -name 'plan.json' -print0 | xargs -0 -I {} rm {}