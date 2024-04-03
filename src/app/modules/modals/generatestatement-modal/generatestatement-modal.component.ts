import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonToolbar, IonCol, IonRow, IonContent, IonTitle, IonItem, IonLabel, IonDatetime, IonModal, IonInput } from '@ionic/angular/standalone';
import { HalfModalComponent } from 'src/app/shared/components';
import { GeneratestatementService } from './services/generatestatement.service';

@Component({
  selector: 'generatestatement-modal',
  templateUrl: './generatestatement-modal.component.html',
  styleUrls: ['./generatestatement-modal.component.scss'],
  standalone: true,
  imports: [
    IonButton, IonModal, IonInput, IonDatetime, IonToolbar, IonCol, IonRow, IonContent, IonTitle, HalfModalComponent, IonItem, IonLabel,
    NgIf, FormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneratestatementModalComponent extends GeneratestatementService {

  @Input() isOpen: boolean = false
}
