import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ChangepasswordFormComponent } from './components/changepassword-form/changepassword-form.component';
import { ChangepasswordService } from './services/changepassword.service';
import { FullModalComponent } from 'src/app/shared/components';

@Component({
  selector: 'changepassword-modal',
  templateUrl: './changepassword-modal.component.html',
  styleUrls: ['./changepassword-modal.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ChangepasswordFormComponent, FullModalComponent
  ]
})
export class ChangepasswordModalComponent extends ChangepasswordService {

  @Input() isOpen: boolean = false

}
