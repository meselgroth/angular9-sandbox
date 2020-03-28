import { Component, OnInit, Input } from '@angular/core';
import { Lambda, LambdaDetails } from '../items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Lambda;
  constructor() { }

  ngOnInit(): void {
  }
  key(lambda: Lambda) {
    return Object.keys(lambda)[0];
  }
}
