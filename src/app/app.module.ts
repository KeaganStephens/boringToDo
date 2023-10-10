import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoContainerComponent } from './to-do-container/to-do-container.component';
import { ToDoItemComponent } from './to-do-container/to-do-item/to-do-item.component';
import { AddListComponentComponent } from './to-do-container/add-list-component/add-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoContainerComponent,
    ToDoItemComponent,
    AddListComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
