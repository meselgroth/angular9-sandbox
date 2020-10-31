import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { LiveServerlessViewComponent } from './live-serverless-view/live-serverless-view.component';
import { YamlServerlessViewComponent } from './yaml-serverless-view/yaml-serverless-view.component';
import { RootState } from './root.state';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    LiveServerlessViewComponent,
    YamlServerlessViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([RootState], {developmentMode: !environment.production}),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
