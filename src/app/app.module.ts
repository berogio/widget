import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { WidgetComponent } from './widget/widget-container/widget-container.component';
import { WidgetContentComponent } from './widget/widget-content/widget-content.component';
import { SeparatorDirective } from './directives/separator.directive';
import { DragDropDirective } from './directives/drag-drop.directive';

@NgModule({
  declarations: [AppComponent, WidgetComponent, WidgetContentComponent, SeparatorDirective, DragDropDirective],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
