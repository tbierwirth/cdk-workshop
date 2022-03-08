"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkshopPipelineStack = void 0;
const cdk = require("aws-cdk-lib");
const pipelines_1 = require("aws-cdk-lib/pipelines");
class WorkshopPipelineStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const pipeline = new pipelines_1.CodePipeline(this, 'Pipeline', {
            pipelineName: 'MyPipeline',
            synth: new pipelines_1.ShellStep('Synth', {
                input: pipelines_1.CodePipelineSource.gitHub('tbierwirth/cdk-workshop', 'main', {
                    authentication: cdk.SecretValue.secretsManager('github-token')
                }),
                commands: ['npm ci', 'npm run build', 'npx cdk synth']
            })
        });
    }
}
exports.WorkshopPipelineStack = WorkshopPipelineStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZWxpbmUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaXBlbGluZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFFbkMscURBQW9GO0FBRXBGLE1BQWEscUJBQXNCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDbEQsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM5RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLFFBQVEsR0FBRyxJQUFJLHdCQUFZLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNsRCxZQUFZLEVBQUUsWUFBWTtZQUMxQixLQUFLLEVBQUUsSUFBSSxxQkFBUyxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsS0FBSyxFQUFFLDhCQUFrQixDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsRUFBRSxNQUFNLEVBQUU7b0JBQ2xFLGNBQWMsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUM7aUJBQy9ELENBQUM7Z0JBQ0YsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUM7YUFDdkQsQ0FBQztTQUNILENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQWRELHNEQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0IHsgQ29kZVBpcGVsaW5lLCBDb2RlUGlwZWxpbmVTb3VyY2UsIFNoZWxsU3RlcCB9IGZyb20gJ2F3cy1jZGstbGliL3BpcGVsaW5lcyc7XG5cbmV4cG9ydCBjbGFzcyBXb3Jrc2hvcFBpcGVsaW5lU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICBjb25zdCBwaXBlbGluZSA9IG5ldyBDb2RlUGlwZWxpbmUodGhpcywgJ1BpcGVsaW5lJywge1xuICAgICAgcGlwZWxpbmVOYW1lOiAnTXlQaXBlbGluZScsXG4gICAgICBzeW50aDogbmV3IFNoZWxsU3RlcCgnU3ludGgnLCB7XG4gICAgICAgIGlucHV0OiBDb2RlUGlwZWxpbmVTb3VyY2UuZ2l0SHViKCd0YmllcndpcnRoL2Nkay13b3Jrc2hvcCcsICdtYWluJywge1xuICAgICAgICAgIGF1dGhlbnRpY2F0aW9uOiBjZGsuU2VjcmV0VmFsdWUuc2VjcmV0c01hbmFnZXIoJ2dpdGh1Yi10b2tlbicpXG4gICAgICAgIH0pLFxuICAgICAgICBjb21tYW5kczogWyducG0gY2knLCAnbnBtIHJ1biBidWlsZCcsICducHggY2RrIHN5bnRoJ11cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufSJdfQ==