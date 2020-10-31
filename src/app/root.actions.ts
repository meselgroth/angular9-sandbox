import { ServerlessComponent, Lambda, LambdaDetails } from './models';

export class AddLambda {
  static readonly type = '[Yaml] AddLambda';
  constructor(public yamlServerlessComponent: ServerlessComponent, public newLambda?: Lambda) {
    if (!this.newLambda) {
      this.newLambda = new Lambda();
      const lambdaDetails = new LambdaDetails();
      lambdaDetails.name = '${blahblah}';
      this.newLambda.functionObject3 = lambdaDetails;
    }
  }
}

export class LoadYaml {
    static readonly type = '[Yaml] Load';
}
