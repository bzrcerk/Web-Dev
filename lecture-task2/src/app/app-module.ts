import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { HomeModule } from './home/home.module';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, HomeModule, StudentModule],
  bootstrap: [App],
})
export class AppModule {}
