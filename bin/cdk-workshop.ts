#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { WorkshopPipelineStack } from '../lib/pipeline-stack';

const app = new cdk.App();
new WorkshopPipelineStack(app, 'CdkWorkshopPipelineStack', {
  env: {
    account: '991510437442',
    region: 'us-east-2'
  }
});

app.synth();