import { Injectable } from '@angular/core';
import { State, StateContext, Action } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { patch, append, updateItem } from '@ngxs/store/operators';
import { ServerlessComponent, ILambda, Lambda, LambdaDetails } from './models';
import { AddLambda, LoadYaml } from './root.actions';
import { ServerlessService } from './serverless.service';
import { YamlServerlessViewComponent } from './yaml-serverless-view/yaml-serverless-view.component';

// This is the model for state loaded from Github/Yaml files.
// Develop/Refactor
//  - Add other components imported from yaml/cloudformation
//  - Add lambda components loaded from AWS
//  - Refactor YamlServerlessComponents as root array
export interface RootModel {
  readonly YamlServerlessComponents: ServerlessComponent[];
  text: string;
}

@State<RootModel>({
  name: 'rootState',
  defaults: {
    text: 'hello',
    YamlServerlessComponents: []
  }
})
@Injectable()
export class RootState {
  constructor(private serverlessService: ServerlessService) { }

  @Action(AddLambda)
  addLambda(ctx: StateContext<RootModel>, addLambda: AddLambda) {
    const newYamlComp = { ...addLambda.yamlServerlessComponent };
    newYamlComp.lambdas = [...newYamlComp.lambdas, addLambda.newLambda];

    ctx.setState(patch({
      YamlServerlessComponents: updateItem(yamlComp => yamlComp === addLambda.yamlServerlessComponent, newYamlComp)
    }));
  }
  @Action(LoadYaml)
  loadYaml(ctx: StateContext<RootModel>) {
    return this.serverlessService.GetAll().pipe(
      tap((data: ServerlessComponent[]) => {
        const YamlServerlessComponents = data;

        for (const component of YamlServerlessComponents) {
          const enrichedLambdas: Lambda[] = [];

          for (const lambda of component.lambdas) {
            enrichedLambdas.push(new Lambda(lambda));
          }
          component.lambdas = enrichedLambdas;
        }
        ctx.setState({ ...ctx.getState(), YamlServerlessComponents });
      })
    );
  }
}

