import { MovieListComponent } from './component/movie-list/movie-list.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path: 'movie',
    component: MovieListComponent
  },
  {
    path: 'movie-details/:imdbID',
    component: MovieDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
