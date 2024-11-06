import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PredictionComponent } from './pages/prediction/prediction.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prediction', component: PredictionComponent },
];
