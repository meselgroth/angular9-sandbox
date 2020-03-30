import { Component, OnInit } from '@angular/core';
import { ServerlessService } from '../serverless.service';
import { ServerlessComponent, Lambda } from '../items';

@Component({
  selector: 'app-yaml-serverless-view',
  templateUrl: './yaml-serverless-view.component.html',
  styleUrls: ['./yaml-serverless-view.component.scss']
})
export class YamlServerlessViewComponent implements OnInit {

  Components: ServerlessComponent[];

  constructor(private serverlessService: ServerlessService) {
  }

  ngOnInit(): void {
    this.serverlessService.GetAll().subscribe(
      (data: ServerlessComponent[]) => {
        this.Components = data;

        for (const component of this.Components) {
          const enrichedLambdas: Lambda[] = [];

          for (const lambda of component.lambdas) {
            enrichedLambdas.push(new Lambda(lambda));
          }
          component.lambdas = enrichedLambdas;
        }
      }
    );
  }

}
