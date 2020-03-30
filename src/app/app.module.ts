import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { LiveServerlessViewComponent } from './live-serverless-view/live-serverless-view.component';
import { YamlServerlessViewComponent } from './yaml-serverless-view/yaml-serverless-view.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
