import { Injectable } from '@angular/core';
import { ServerlessComponent, Lambda, LambdaDetails } from './models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerlessService {

  constructor(private http: HttpClient) {
  }

  GetAll(){
    return this.http.get<ServerlessComponent[]>('assets/items.json');
  }

  // AddLambdaToItem(item: ServerlessComponent){
  //   const lambda = new Lambda();
  //   const lambdaDetails = new LambdaDetails();
  //   lambdaDetails.name = '${blahblah}';
  //   lambda.functionObject3 = lambdaDetails;

  //   item.lambdas.push(lambda);
  // }
}
