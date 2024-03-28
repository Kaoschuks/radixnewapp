import { NgIf, NgClass, TitleCasePipe } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { IonToolbar, IonSearchbar, IonButton, IonRow, IonCol, IonFabButton, IonRouterLink, IonCard, IonAvatar, IonLabel, IonImg, IonItem, IonSelectOption, IonSelect, IonHeader, IonContent, IonTitle, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { FullModalComponent, OnboardingComponent } from 'src/app/shared/components';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ProfileService } from './services/profile.service';
import { addIcons } from 'ionicons';
import { chevronDownOutline, chevronBackOutline } from 'ionicons/icons';
import { OtherinfoFormComponent } from './components/otherinfo-form/otherinfo-form.component';

@Component({
  selector: 'profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
  standalone: true,
  imports: [
    NgIf, NgClass, TitleCasePipe,
    FullModalComponent, OnboardingComponent,
    IonToolbar, IonSearchbar, IonButton, IonRouterLink, IonRow, IonCol, 
    IonFabButton, IonCard, IonAvatar, IonLabel, IonImg, IonItem, IonSelect, 
    IonSelectOption, IonHeader, IonContent, IonTitle, IonButtons, IonIcon,
    EmployeeFormComponent, ProfileFormComponent, OtherinfoFormComponent
  ]
})
export class ProfileModalComponent extends ProfileService implements OnChanges {

  @Input() isOpen: boolean = false

  constructor() {
    super();
    addIcons({ 
      "chevron-down-outline": chevronDownOutline,
      "chevron-back-outline": chevronBackOutline
    });
  }

  ngOnChanges() {
  }
}
