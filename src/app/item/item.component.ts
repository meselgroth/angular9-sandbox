import { Component, OnInit, Input } from '@angular/core';
import { Lambda, LambdaDetails, ServerlessComponent } from '../items';
import { ServerlessService } from '../serverless.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: ServerlessComponent;
  private serverlessService: ServerlessService;

  constructor(private sService: ServerlessService) {
    this.serverlessService = sService;
  }

  ngOnInit(): void {
  }
  AddLambda() {
    this.serverlessService.AddLambdaToItem(this.item);
  }
}
