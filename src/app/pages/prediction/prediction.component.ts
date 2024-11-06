import { Component } from '@angular/core';
import { MainPredictionComponent } from '../../shared/components/main-prediction/main-prediction.component';

@Component({
  selector: 'app-prediction',
  standalone: true,
  imports: [MainPredictionComponent],
  templateUrl: './prediction.component.html',
  styleUrl: './prediction.component.scss',
})
export class PredictionComponent {}
