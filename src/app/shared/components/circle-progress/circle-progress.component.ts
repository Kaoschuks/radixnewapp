import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'circleprogress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgCircleProgressModule
  ]
})
export class CircleProgressComponent {

  @Input() percent: number = 0;
  @Input() radius: number = 20;
  @Input() stroke: number = 3;

  get spaceStroke() {
    return parseInt(`-${this.stroke}`)
  }

  get getColor()  {
    if(this.percent <= 40) return '#eb445a'
    if(this.percent <= 70 && this.percent > 40) return '#ffc409'
    if(this.percent <= 100 && this.percent > 70) return '#1D70A2'
    return '#eb445a'
  }

}
