import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listings/listings.component';
import { PostsComponent} from './posts/posts.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'listings',
    component: ListingsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
