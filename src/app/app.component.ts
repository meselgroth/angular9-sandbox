import { Component } from '@angular/core';
import { items } from './items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  components = items;
  title = 'angular9-sandbox';
}
