import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWidgetModule } from '../../../hello-widget/src/lib/hello-widget.module';
import { createCustomElement } from '@angular/elements';
import { HelloWidgetComponent } from 'projects/hello-widget/src/lib/hello-widget.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HelloWidgetModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const HelloWidgetElm = createCustomElement(HelloWidgetComponent, {
      injector: this.injector,
    });
    customElements.define('hello-widget', HelloWidgetElm);
  }
}
