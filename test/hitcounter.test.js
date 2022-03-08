"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assertions_1 = require("aws-cdk-lib/assertions");
const cdk = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
const hitcounter_1 = require("../lib/hitcounter");
test('DynamoDB Table Created', () => {
    const stack = new cdk.Stack();
    new hitcounter_1.HitCounter(stack, 'MyTestConstruct', {
        downstream: new lambda.Function(stack, 'TestFunction', {
            runtime: lambda.Runtime.NODEJS_14_X,
            handler: 'hello.handler',
            code: lambda.Code.fromAsset('lambda')
        })
    });
    const template = assertions_1.Template.fromStack(stack);
    template.resourceCountIs("AWS::DynamoDB::Table", 1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGl0Y291bnRlci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGl0Y291bnRlci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdURBQTJEO0FBQzNELG1DQUFtQztBQUNuQyxpREFBaUQ7QUFDakQsa0RBQStDO0FBRS9DLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEVBQUU7SUFDbEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFOUIsSUFBSSx1QkFBVSxDQUFDLEtBQUssRUFBRSxpQkFBaUIsRUFBRTtRQUN2QyxVQUFVLEVBQUUsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxjQUFjLEVBQUU7WUFDckQsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxPQUFPLEVBQUUsZUFBZTtZQUN4QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1NBQ3RDLENBQUM7S0FDSCxDQUFDLENBQUM7SUFFSCxNQUFNLFFBQVEsR0FBRyxxQkFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxRQUFRLENBQUMsZUFBZSxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGUsIENhcHR1cmUgfSBmcm9tIFwiYXdzLWNkay1saWIvYXNzZXJ0aW9uc1wiO1xuaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcbmltcG9ydCB7IEhpdENvdW50ZXIgfSBmcm9tIFwiLi4vbGliL2hpdGNvdW50ZXJcIjtcblxudGVzdCgnRHluYW1vREIgVGFibGUgQ3JlYXRlZCcsICgpID0+IHtcbiAgY29uc3Qgc3RhY2sgPSBuZXcgY2RrLlN0YWNrKCk7XG5cbiAgbmV3IEhpdENvdW50ZXIoc3RhY2ssICdNeVRlc3RDb25zdHJ1Y3QnLCB7XG4gICAgZG93bnN0cmVhbTogbmV3IGxhbWJkYS5GdW5jdGlvbihzdGFjaywgJ1Rlc3RGdW5jdGlvbicsIHtcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxuICAgICAgaGFuZGxlcjogJ2hlbGxvLmhhbmRsZXInLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsYW1iZGEnKVxuICAgIH0pXG4gIH0pO1xuXG4gIGNvbnN0IHRlbXBsYXRlID0gVGVtcGxhdGUuZnJvbVN0YWNrKHN0YWNrKTtcbiAgdGVtcGxhdGUucmVzb3VyY2VDb3VudElzKFwiQVdTOjpEeW5hbW9EQjo6VGFibGVcIiwgMSk7XG59KSJdfQ==