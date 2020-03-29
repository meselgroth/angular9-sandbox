import { Injectable } from '@angular/core';
import { items, ServerlessComponent, Lambda, LambdaDetails } from './items';

@Injectable({
  providedIn: 'root'
})
export class ServerlessService {

  constructor() {
  }

  GetAll(){
    return items;
  }

  AddLambdaToItem(item: ServerlessComponent){
    const lambda = new Lambda();
    const lambdaDetails = new LambdaDetails();
    lambdaDetails.name = '${blahblah}';
    lambda.functionObject3 = lambdaDetails;

    item.lambdas.push(lambda);
  }
}
