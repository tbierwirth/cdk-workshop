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
    }
}
exports.WorkshopPipelineStack = WorkshopPipelineStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZWxpbmUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaXBlbGluZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFFbkMscURBQXlEO0FBQ3pELHFEQUF3RjtBQUV4RixNQUFhLHFCQUFzQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ2xELFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDOUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxRQUFRLEdBQUcsSUFBSSx3QkFBWSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDbEQsWUFBWSxFQUFFLFlBQVk7WUFDMUIsS0FBSyxFQUFFLElBQUkseUJBQWEsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BDLEtBQUssRUFBRSw4QkFBa0IsQ0FBQyxNQUFNLENBQUMseUJBQXlCLEVBQUUsTUFBTSxDQUFDO2dCQUNuRSxlQUFlLEVBQUU7b0JBQ2Ysd0JBQXdCO2lCQUN6QjtnQkFDRCxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQzthQUN2RCxDQUFDO1NBQ0gsQ0FBQyxDQUFDO1FBRUgsTUFBTSxNQUFNLEdBQUcsSUFBSSxzQ0FBcUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDekQsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0Y7QUFsQkQsc0RBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0IHsgV29ya3Nob3BQaXBlbGluZVN0YWdlIH0gZnJvbSAnLi9waXBlbGluZS1zdGFnZSc7XG5pbXBvcnQgeyBDb2RlUGlwZWxpbmUsIENvZGVQaXBlbGluZVNvdXJjZSwgQ29kZUJ1aWxkU3RlcCB9IGZyb20gJ2F3cy1jZGstbGliL3BpcGVsaW5lcyc7XG5cbmV4cG9ydCBjbGFzcyBXb3Jrc2hvcFBpcGVsaW5lU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICBjb25zdCBwaXBlbGluZSA9IG5ldyBDb2RlUGlwZWxpbmUodGhpcywgJ1BpcGVsaW5lJywge1xuICAgICAgcGlwZWxpbmVOYW1lOiAnTXlQaXBlbGluZScsXG4gICAgICBzeW50aDogbmV3IENvZGVCdWlsZFN0ZXAoJ1N5bnRoU3RlcCcsIHtcbiAgICAgICAgaW5wdXQ6IENvZGVQaXBlbGluZVNvdXJjZS5naXRIdWIoJ3RiaWVyd2lydGgvY2RrLXdvcmtzaG9wJywgJ21haW4nKSxcbiAgICAgICAgaW5zdGFsbENvbW1hbmRzOiBbXG4gICAgICAgICAgJ25wbSBpbnN0YWxsIC1nIGF3cy1jZGsnXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1hbmRzOiBbJ25wbSBjaScsICducG0gcnVuIGJ1aWxkJywgJ25weCBjZGsgc3ludGgnXVxuICAgICAgfSlcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBkZXBsb3kgPSBuZXcgV29ya3Nob3BQaXBlbGluZVN0YWdlKHRoaXMsICdEZXBsb3knKTtcbiAgICBjb25zdCBkZXBsb3lTdGFnZSA9IHBpcGVsaW5lLmFkZFN0YWdlKGRlcGxveSk7XG4gIH1cbn0iXX0=