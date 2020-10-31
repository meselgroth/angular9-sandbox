import { Component, OnInit, Input } from '@angular/core';
import { Lambda, LambdaDetails, ServerlessComponent } from '../models';
import { ServerlessService } from '../serverless.service';
import { Store } from '@ngxs/store';
import { AddLambda } from "../root.actions";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: ServerlessComponent;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }
  addLambda() {
    this.store.dispatch(new AddLambda(this.item));
  }
}
