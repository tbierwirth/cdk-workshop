"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkWorkshopStack = void 0;
const cdk = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
const apigw = require("aws-cdk-lib/aws-apigateway");
const hitcounter_1 = require("./hitcounter");
const cdk_dynamo_table_viewer_1 = require("cdk-dynamo-table-viewer");
class CdkWorkshopStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const hello = new lambda.Function(this, 'HelloHandler', {
            runtime: lambda.Runtime.NODEJS_14_X,
            code: lambda.Code.fromAsset('lambda'),
            handler: 'hello.handler'
        });
        const helloWithCounter = new hitcounter_1.HitCounter(this, 'HelloHitCounter', {
            downstream: hello
        });
        new apigw.LambdaRestApi(this, 'Endpoint', {
            handler: helloWithCounter.handler
        });
        new cdk_dynamo_table_viewer_1.TableViewer(this, 'ViewHitCounter', {
            title: 'Hello Hits',
            table: helloWithCounter.table
        });
    }
}
exports.CdkWorkshopStack = CdkWorkshopStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXdvcmtzaG9wLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLXdvcmtzaG9wLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUNuQyxpREFBaUQ7QUFDakQsb0RBQW9EO0FBQ3BELDZDQUEwQztBQUMxQyxxRUFBc0Q7QUFFdEQsTUFBYSxnQkFBaUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUM3QyxZQUFZLEtBQWMsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDNUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDdEQsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1lBQ3JDLE9BQU8sRUFBRSxlQUFlO1NBQ3pCLENBQUMsQ0FBQztRQUVILE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSx1QkFBVSxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUMvRCxVQUFVLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUE7UUFFRixJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUN4QyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsT0FBTztTQUNsQyxDQUFDLENBQUM7UUFFSCxJQUFJLHFDQUFXLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQ3RDLEtBQUssRUFBRSxZQUFZO1lBQ25CLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLO1NBQzlCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQXZCRCw0Q0F1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEnO1xuaW1wb3J0ICogYXMgYXBpZ3cgZnJvbSAnYXdzLWNkay1saWIvYXdzLWFwaWdhdGV3YXknO1xuaW1wb3J0IHsgSGl0Q291bnRlciB9IGZyb20gJy4vaGl0Y291bnRlcic7XG5pbXBvcnQgeyBUYWJsZVZpZXdlciB9IGZyb20gJ2Nkay1keW5hbW8tdGFibGUtdmlld2VyJztcblxuZXhwb3J0IGNsYXNzIENka1dvcmtzaG9wU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkFwcCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgaGVsbG8gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdIZWxsb0hhbmRsZXInLCB7XG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcbiAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGFtYmRhJyksXG4gICAgICBoYW5kbGVyOiAnaGVsbG8uaGFuZGxlcidcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlbGxvV2l0aENvdW50ZXIgPSBuZXcgSGl0Q291bnRlcih0aGlzLCAnSGVsbG9IaXRDb3VudGVyJywge1xuICAgICAgZG93bnN0cmVhbTogaGVsbG9cbiAgICB9KVxuICAgIFxuICAgIG5ldyBhcGlndy5MYW1iZGFSZXN0QXBpKHRoaXMsICdFbmRwb2ludCcsIHtcbiAgICAgIGhhbmRsZXI6IGhlbGxvV2l0aENvdW50ZXIuaGFuZGxlclxuICAgIH0pO1xuXG4gICAgbmV3IFRhYmxlVmlld2VyKHRoaXMsICdWaWV3SGl0Q291bnRlcicsIHtcbiAgICAgIHRpdGxlOiAnSGVsbG8gSGl0cycsXG4gICAgICB0YWJsZTogaGVsbG9XaXRoQ291bnRlci50YWJsZVxuICAgIH0pXG4gIH1cbn0iXX0=