/**
 * This client was automatically generated by Segment Typewriter. ** Do Not Edit **
 */

#import <Foundation/Foundation.h>
#import <Analytics/SEGSerializableValue.h>
#import "SEGTypewriterSerializable.h"
#import "SEGTypewriterUtils.h"
#import "SEGSubterraneanLab.h"

@interface SEGTunnel : NSObject<SEGTypewriterSerializable>

@property (strong, nonatomic, nullable) SEGSubterraneanLab *subterraneanLab;

+(nonnull instancetype) initWithSubterraneanLab:(nonnull SEGSubterraneanLab *)subterraneanLab;

-(nonnull SERIALIZABLE_DICT) toDictionary;

@end
