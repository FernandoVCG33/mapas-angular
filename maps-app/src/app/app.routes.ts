import { Routes } from '@angular/router';
import {FullscreenMapPage} from './pages/fullscreen-map-page/fullscreen-map-page';
import {MarkerPage} from './pages/marker-page/marker-page';
import {HousesPage} from './pages/houses-page/houses-page';

export const routes: Routes = [
  {
    path: 'fullscreen',
    component: FullscreenMapPage,
    title: 'Fullscreen Map',
  },
  {
    path: 'markers',
    component: MarkerPage,
    title: 'Marker Page',
  },
  {
    path: 'houses',
    component: HousesPage,
    title: 'Houses Page',
  },
  {
    path:'**',
    redirectTo: 'home'
  }
];
