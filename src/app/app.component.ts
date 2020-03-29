import { Component } from '@angular/core';
import { items, ServerlessComponent } from './items';
import { ServerlessService } from './serverless.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular9-sandbox';
  private serverlessService: ServerlessService;
  Components: ServerlessComponent[];

  constructor(private sService: ServerlessService) {
    this.serverlessService = sService;
    this.Components = this.serverlessService.GetAll();
  }
}
