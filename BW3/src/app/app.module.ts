import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { Route , RouterModule} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const rotte: Route[] = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'create-post',
    component: CreatePostComponent
  },
  {
    path: 'edit-post/:id',
    component: EditPostComponent
  },
  {
    path: 'view-post/:id',
    component: ViewPostComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatePostComponent,
    EditPostComponent,
    ViewPostComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotte),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
