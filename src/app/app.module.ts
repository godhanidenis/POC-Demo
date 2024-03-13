import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [HelloComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const widgetElement = createCustomElement(HelloComponent, {
      injector: this.injector,
    });
    customElements.define('hello-widget', widgetElement);
  }
}
