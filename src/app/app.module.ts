import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path:"home", component:HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
