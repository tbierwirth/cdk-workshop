"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkshopPipelineStage = void 0;
const cdk_workshop_stack_1 = require("./cdk-workshop-stack");
const aws_cdk_lib_1 = require("aws-cdk-lib");
class WorkshopPipelineStage extends aws_cdk_lib_1.Stage {
    constructor(scope, id, props) {
        super(scope, id, props);
        new cdk_workshop_stack_1.CdkWorkshopStack(this, 'WebService');
    }
}
exports.WorkshopPipelineStage = WorkshopPipelineStage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZWxpbmUtc3RhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaXBlbGluZS1zdGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2REFBd0Q7QUFDeEQsNkNBQWdEO0FBR2hELE1BQWEscUJBQXNCLFNBQVEsbUJBQUs7SUFDOUMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixJQUFJLHFDQUFnQixDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0Y7QUFORCxzREFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka1dvcmtzaG9wU3RhY2sgfSBmcm9tIFwiLi9jZGstd29ya3Nob3Atc3RhY2tcIjtcbmltcG9ydCB7IFN0YWdlLCBTdGFnZVByb3BzIH0gZnJvbSBcImF3cy1jZGstbGliXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuXG5leHBvcnQgY2xhc3MgV29ya3Nob3BQaXBlbGluZVN0YWdlIGV4dGVuZHMgU3RhZ2Uge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IFN0YWdlUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIG5ldyBDZGtXb3Jrc2hvcFN0YWNrKHRoaXMsICdXZWJTZXJ2aWNlJyk7XG4gIH1cbn0iXX0=