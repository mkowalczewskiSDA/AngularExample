import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user/user.service';
import { UserFormComponent } from './component/user/user-form/user-form.component';
import { UserListComponent } from './component/user/user-list/user-list.component';
import { TaskListComponent } from './component/task/task-list/task-list.component';

import { TaskService } from './service/task/task.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserListComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
