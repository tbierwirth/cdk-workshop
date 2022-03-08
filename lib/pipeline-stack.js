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
            synth: new pipelines_1.CodeBuildStep('SynthStep', {
                input: pipelines_1.CodePipelineSource.gitHub('tbierwirth/cdk-workshop', 'main'),
                installCommands: [
                    'npm install -g aws-cdk'
                ],
                commands: ['npm ci', 'npm run build', 'npx cdk synth']
            })
        });
    }
}
exports.WorkshopPipelineStack = WorkshopPipelineStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZWxpbmUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaXBlbGluZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFFbkMscURBQXdGO0FBRXhGLE1BQWEscUJBQXNCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDbEQsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM5RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLFFBQVEsR0FBRyxJQUFJLHdCQUFZLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNsRCxZQUFZLEVBQUUsWUFBWTtZQUMxQixLQUFLLEVBQUUsSUFBSSx5QkFBYSxDQUFDLFdBQVcsRUFBRTtnQkFDcEMsS0FBSyxFQUFFLDhCQUFrQixDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsRUFBRSxNQUFNLENBQUM7Z0JBQ25FLGVBQWUsRUFBRTtvQkFDZix3QkFBd0I7aUJBQ3pCO2dCQUNELFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO2FBQ3ZELENBQUM7U0FDSCxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUFmRCxzREFlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCB7IENvZGVQaXBlbGluZSwgQ29kZVBpcGVsaW5lU291cmNlLCBDb2RlQnVpbGRTdGVwIH0gZnJvbSAnYXdzLWNkay1saWIvcGlwZWxpbmVzJztcblxuZXhwb3J0IGNsYXNzIFdvcmtzaG9wUGlwZWxpbmVTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IHBpcGVsaW5lID0gbmV3IENvZGVQaXBlbGluZSh0aGlzLCAnUGlwZWxpbmUnLCB7XG4gICAgICBwaXBlbGluZU5hbWU6ICdNeVBpcGVsaW5lJyxcbiAgICAgIHN5bnRoOiBuZXcgQ29kZUJ1aWxkU3RlcCgnU3ludGhTdGVwJywge1xuICAgICAgICBpbnB1dDogQ29kZVBpcGVsaW5lU291cmNlLmdpdEh1YigndGJpZXJ3aXJ0aC9jZGstd29ya3Nob3AnLCAnbWFpbicpLFxuICAgICAgICBpbnN0YWxsQ29tbWFuZHM6IFtcbiAgICAgICAgICAnbnBtIGluc3RhbGwgLWcgYXdzLWNkaydcbiAgICAgICAgXSxcbiAgICAgICAgY29tbWFuZHM6IFsnbnBtIGNpJywgJ25wbSBydW4gYnVpbGQnLCAnbnB4IGNkayBzeW50aCddXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn0iXX0=