import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ListingsComponent } from './listings/listings.component';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
