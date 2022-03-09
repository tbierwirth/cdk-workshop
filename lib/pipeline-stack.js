"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkshopPipelineStack = void 0;
const cdk = require("aws-cdk-lib");
const pipeline_stage_1 = require("./pipeline-stage");
const pipelines_1 = require("aws-cdk-lib/pipelines");
class WorkshopPipelineStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const pipeline = new pipelines_1.CodePipeline(this, 'Pipeline', {
            pipelineName: 'MyPipeline',
            synth: new pipelines_1.CodeBuildStep('SynthStep', {
                input: pipelines_1.CodePipelineSource.gitHub('tbierwirth/cdk-workshop', 'main'),
                installCommands: [
                    'npm install -g aws-cdk'
                ],
                commands: ['npm ci', 'npm run build', 'npx cdk synth']
            })
        });
        const deploy = new pipeline_stage_1.WorkshopPipelineStage(this, 'Deploy');
        const deployStage = pipeline.addStage(deploy);
        deployStage.addPost(new pipelines_1.CodeBuildStep('TestViewerEndpoint', {
            projectName: 'TestViewerEndpoint',
            envFromCfnOutputs: {
                ENDPOINT_URL: deploy.hcViewerUrl
            },
            commands: [
                'curl -Ssf $ENDPOINT_URL'
            ]
        }), new pipelines_1.CodeBuildStep('TestAPIGatewayEndpooint', {
            projectName: 'TestAPIGatewayEndpoint',
            envFromCfnOutputs: {
                ENDPOINT_URL: deploy.hcEndpoint
            },
            commands: [
                'curl -Ssf $ENDPOINT_URL',
                'curl -Ssf $ENDPOINT_URL/hello',
                'curl -Ssf $ENDPOINT_URL/test'
            ]
        }));
    }
}
exports.WorkshopPipelineStack = WorkshopPipelineStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZWxpbmUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaXBlbGluZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFFbkMscURBQXlEO0FBQ3pELHFEQUF3RjtBQUV4RixNQUFhLHFCQUFzQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ2xELFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDOUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxRQUFRLEdBQUcsSUFBSSx3QkFBWSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDbEQsWUFBWSxFQUFFLFlBQVk7WUFDMUIsS0FBSyxFQUFFLElBQUkseUJBQWEsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BDLEtBQUssRUFBRSw4QkFBa0IsQ0FBQyxNQUFNLENBQUMseUJBQXlCLEVBQUUsTUFBTSxDQUFDO2dCQUNuRSxlQUFlLEVBQUU7b0JBQ2Ysd0JBQXdCO2lCQUN6QjtnQkFDRCxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQzthQUN2RCxDQUFDO1NBQ0gsQ0FBQyxDQUFDO1FBRUgsTUFBTSxNQUFNLEdBQUcsSUFBSSxzQ0FBcUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDekQsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5QyxXQUFXLENBQUMsT0FBTyxDQUNqQixJQUFJLHlCQUFhLENBQUMsb0JBQW9CLEVBQUU7WUFDdEMsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxpQkFBaUIsRUFBRTtnQkFDakIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxXQUFXO2FBQ2pDO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLHlCQUF5QjthQUMxQjtTQUNGLENBQUMsRUFFRixJQUFJLHlCQUFhLENBQUMseUJBQXlCLEVBQUU7WUFDM0MsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxpQkFBaUIsRUFBRTtnQkFDakIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxVQUFVO2FBQ2hDO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLHlCQUF5QjtnQkFDekIsK0JBQStCO2dCQUMvQiw4QkFBOEI7YUFDL0I7U0FDRixDQUFDLENBQ0gsQ0FBQTtJQUNILENBQUM7Q0FDRjtBQTFDRCxzREEwQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgeyBXb3Jrc2hvcFBpcGVsaW5lU3RhZ2UgfSBmcm9tICcuL3BpcGVsaW5lLXN0YWdlJztcbmltcG9ydCB7IENvZGVQaXBlbGluZSwgQ29kZVBpcGVsaW5lU291cmNlLCBDb2RlQnVpbGRTdGVwIH0gZnJvbSAnYXdzLWNkay1saWIvcGlwZWxpbmVzJztcblxuZXhwb3J0IGNsYXNzIFdvcmtzaG9wUGlwZWxpbmVTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IHBpcGVsaW5lID0gbmV3IENvZGVQaXBlbGluZSh0aGlzLCAnUGlwZWxpbmUnLCB7XG4gICAgICBwaXBlbGluZU5hbWU6ICdNeVBpcGVsaW5lJyxcbiAgICAgIHN5bnRoOiBuZXcgQ29kZUJ1aWxkU3RlcCgnU3ludGhTdGVwJywge1xuICAgICAgICBpbnB1dDogQ29kZVBpcGVsaW5lU291cmNlLmdpdEh1YigndGJpZXJ3aXJ0aC9jZGstd29ya3Nob3AnLCAnbWFpbicpLFxuICAgICAgICBpbnN0YWxsQ29tbWFuZHM6IFtcbiAgICAgICAgICAnbnBtIGluc3RhbGwgLWcgYXdzLWNkaydcbiAgICAgICAgXSxcbiAgICAgICAgY29tbWFuZHM6IFsnbnBtIGNpJywgJ25wbSBydW4gYnVpbGQnLCAnbnB4IGNkayBzeW50aCddXG4gICAgICB9KVxuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IGRlcGxveSA9IG5ldyBXb3Jrc2hvcFBpcGVsaW5lU3RhZ2UodGhpcywgJ0RlcGxveScpO1xuICAgIGNvbnN0IGRlcGxveVN0YWdlID0gcGlwZWxpbmUuYWRkU3RhZ2UoZGVwbG95KTtcblxuICAgIGRlcGxveVN0YWdlLmFkZFBvc3QoXG4gICAgICBuZXcgQ29kZUJ1aWxkU3RlcCgnVGVzdFZpZXdlckVuZHBvaW50Jywge1xuICAgICAgICBwcm9qZWN0TmFtZTogJ1Rlc3RWaWV3ZXJFbmRwb2ludCcsXG4gICAgICAgIGVudkZyb21DZm5PdXRwdXRzOiB7XG4gICAgICAgICAgRU5EUE9JTlRfVVJMOiBkZXBsb3kuaGNWaWV3ZXJVcmxcbiAgICAgICAgfSxcbiAgICAgICAgY29tbWFuZHM6IFtcbiAgICAgICAgICAnY3VybCAtU3NmICRFTkRQT0lOVF9VUkwnXG4gICAgICAgIF1cbiAgICAgIH0pLFxuXG4gICAgICBuZXcgQ29kZUJ1aWxkU3RlcCgnVGVzdEFQSUdhdGV3YXlFbmRwb29pbnQnLCB7XG4gICAgICAgIHByb2plY3ROYW1lOiAnVGVzdEFQSUdhdGV3YXlFbmRwb2ludCcsXG4gICAgICAgIGVudkZyb21DZm5PdXRwdXRzOiB7XG4gICAgICAgICAgRU5EUE9JTlRfVVJMOiBkZXBsb3kuaGNFbmRwb2ludFxuICAgICAgICB9LFxuICAgICAgICBjb21tYW5kczogW1xuICAgICAgICAgICdjdXJsIC1Tc2YgJEVORFBPSU5UX1VSTCcsXG4gICAgICAgICAgJ2N1cmwgLVNzZiAkRU5EUE9JTlRfVVJML2hlbGxvJ1xuICAgICAgICAgICdjdXJsIC1Tc2YgJEVORFBPSU5UX1VSTC90ZXN0J1xuICAgICAgICBdXG4gICAgICB9KVxuICAgIClcbiAgfVxufSJdfQ==