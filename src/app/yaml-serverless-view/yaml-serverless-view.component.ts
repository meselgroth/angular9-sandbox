import { Component, OnInit } from '@angular/core';
import { ServerlessComponent, Lambda } from '../models';
import { Store, Select } from '@ngxs/store';
import { LoadYaml } from '../root.actions';
import { RootState, RootModel } from '../root.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-yaml-serverless-view',
  templateUrl: './yaml-serverless-view.component.html',
  styleUrls: ['./yaml-serverless-view.component.scss']
})
export class YamlServerlessViewComponent implements OnInit {

  @Select(rootState => rootState.YamlServerlessComponents) YamlServerlessComponents$: Observable<ServerlessComponent[]>;
  @Select(RootState) rootState$: Observable<RootModel>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadYaml());
  }

}
