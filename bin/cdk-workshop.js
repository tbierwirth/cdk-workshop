#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const pipeline_stack_1 = require("../lib/pipeline-stack");
const app = new cdk.App();
new pipeline_stack_1.WorkshopPipelineStack(app, 'CdkWorkshopPipelineStack', {
    env: {
        account: '991510437442',
        region: 'us-east-2'
    }
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXdvcmtzaG9wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLXdvcmtzaG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG1DQUFtQztBQUNuQywwREFBOEQ7QUFFOUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUIsSUFBSSxzQ0FBcUIsQ0FBQyxHQUFHLEVBQUUsMEJBQTBCLEVBQUU7SUFDekQsR0FBRyxFQUFFO1FBQ0gsT0FBTyxFQUFFLGNBQWM7UUFDdkIsTUFBTSxFQUFFLFdBQVc7S0FDcEI7Q0FDRixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgV29ya3Nob3BQaXBlbGluZVN0YWNrIH0gZnJvbSAnLi4vbGliL3BpcGVsaW5lLXN0YWNrJztcblxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcbm5ldyBXb3Jrc2hvcFBpcGVsaW5lU3RhY2soYXBwLCAnQ2RrV29ya3Nob3BQaXBlbGluZVN0YWNrJywge1xuICBlbnY6IHtcbiAgICBhY2NvdW50OiAnOTkxNTEwNDM3NDQyJyxcbiAgICByZWdpb246ICd1cy1lYXN0LTInXG4gIH1cbn0pO1xuXG5hcHAuc3ludGgoKTsiXX0=