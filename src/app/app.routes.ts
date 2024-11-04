import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WeatherComponent } from './features/weather/weather.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'weather', component: WeatherComponent },
];
