import { Component, OnInit, Input } from '@angular/core';
import { Lambda, LambdaDetails, ServerlessComponent } from '../items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: ServerlessComponent;
  constructor() { }

  ngOnInit(): void {
  }
  AddLambda(){
    const lambda = new Lambda();
    const lambdaDetails = new LambdaDetails();
    lambdaDetails.name = '${blahblah}';
    lambda.functionObject3 = lambdaDetails;
    
    this.item.lambdas.push(lambda);
  }
}
