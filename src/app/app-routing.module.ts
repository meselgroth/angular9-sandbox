import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveServerlessViewComponent } from './live-serverless-view/live-serverless-view.component';
import { YamlServerlessViewComponent } from './yaml-serverless-view/yaml-serverless-view.component';


const routes: Routes = [
  { path: '', component: YamlServerlessViewComponent},
  { path: 'live/serverless', component: LiveServerlessViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
