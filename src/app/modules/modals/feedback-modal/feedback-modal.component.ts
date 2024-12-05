import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { IonContent, IonLabel, IonListHeader } from '@ionic/angular/standalone';
import { GlobalsServices, UserService } from 'src/app/core';
import { FullModalComponent } from 'src/app/shared/components';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';

@Component({
  selector: 'feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FullModalComponent, IonListHeader, IonLabel, IonContent, 
    FeedbackFormComponent
  ]
})
export class FeedbackModalComponent  implements OnInit {

  @Input() isOpen: boolean = false
  globals: GlobalsServices = inject(GlobalsServices);
  userService: UserService = inject(UserService);

  ngOnInit() {}

}
