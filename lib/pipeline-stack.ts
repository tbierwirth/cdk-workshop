import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { WorkshopPipelineStage } from './pipeline-stage';
import { CodePipeline, CodePipelineSource, CodeBuildStep } from 'aws-cdk-lib/pipelines';

export class WorkshopPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyPipeline',
      synth: new CodeBuildStep('SynthStep', {
        input: CodePipelineSource.gitHub('tbierwirth/cdk-workshop', 'main'),
        installCommands: [
          'npm install -g aws-cdk'
        ],
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    });
    
    const deploy = new WorkshopPipelineStage(this, 'Deploy');
    const deployStage = pipeline.addStage(deploy);

    deployStage.addPost(
      new CodeBuildStep('TestViewerEndpoint', {
        projectName: 'TestViewerEndpoint',
        envFromCfnOutputs: {
          ENDPOINT_URL: deploy.hcViewerUrl
        },
        commands: [
          'curl -Ssf $ENDPOINT_URL'
        ]
      }),

      new CodeBuildStep('TestAPIGatewayEndpooint', {
        projectName: 'TestAPIGatewayEndpoint',
        envFromCfnOutputs: {
          ENDPOINT_URL: deploy.hcEndpoint
        },
        commands: [
          'curl -Ssf $ENDPOINT_URL',
          'curl -Ssf $ENDPOINT_URL/hello',
          'curl -Ssf $ENDPOINT_URL/test'
        ]
      })
    )
  }
}