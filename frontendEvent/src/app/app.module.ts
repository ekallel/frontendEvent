import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './modules/admin/auth/auth.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,

    AuthComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutComponent
  ],
exports: [
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
