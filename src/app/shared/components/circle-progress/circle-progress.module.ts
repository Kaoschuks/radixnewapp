import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CircleProgressComponent } from './circle-progress.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({
      showBackground: false,
      showImage: false,
      renderOnClick: false,
      startFromZero: true,
      showSubtitle: false,
      backgroundGradient: true,
      // responsive: true,
      space: -10,
      lazy: false,
      outerStrokeWidth: 10,
      innerStrokeWidth: 10,
      outerStrokeColor: '#1D70A2',
      outerStrokeGradientStopColor: '#1D70A2', 
      innerStrokeColor: '#f5f6f9a9'
    }),
  ]
})
export class CircleProgressModule { }
