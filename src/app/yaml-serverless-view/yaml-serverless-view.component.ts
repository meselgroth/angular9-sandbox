import { Component, OnInit } from '@angular/core';
import { ServerlessService } from '../serverless.service';
import { ServerlessComponent } from '../items';

@Component({
  selector: 'app-yaml-serverless-view',
  templateUrl: './yaml-serverless-view.component.html',
  styleUrls: ['./yaml-serverless-view.component.scss']
})
export class YamlServerlessViewComponent implements OnInit {

  Components: ServerlessComponent[];

  constructor(private serverlessService: ServerlessService) {
    this.Components = this.serverlessService.GetAll();
  }
  ngOnInit(): void {
  }

}
