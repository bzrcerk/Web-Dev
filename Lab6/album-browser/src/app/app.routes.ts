import { Routes } from '@angular/router';
import { HomePage } from './pages/homePage/home';
import { AboutPage } from './pages/aboutPage/about';
import { AlbumsPage } from './pages/albumsPage/albums';
import {AlbumsDetailsComponent} from './components/albums.details.component/albums.details.component';
import {AlbumsPhotosComponent} from './components/albums.photos.component/albums.photos.component';
import {TestPage} from './pages/test-page/test-page';


export const routes: Routes = [
  {
    path: 'home',
    component : HomePage
  },
  {
    path : '',
    redirectTo : 'home',
    pathMatch: 'full'
  },
  {
    path : 'about',
    component : AboutPage
  },
  {
    path : 'albums',
    component : AlbumsPage
  },
  {
    path : "albums/:id",
    component : AlbumsDetailsComponent
  },
  {
    path : "albums/:id/photos",
    component : AlbumsPhotosComponent
  },
  {
    path : 'test',
    component : TestPage
  },
  {
    path : "**",
    redirectTo : 'home'
  }
];
