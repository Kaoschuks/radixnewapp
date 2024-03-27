import { NgIf, NgClass, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { IonToolbar, IonSearchbar, IonButton, IonRow, IonCol, IonFabButton, IonRouterLink, IonCard, IonAvatar, IonLabel, IonImg, IonItem, IonSelectOption, IonSelect } from '@ionic/angular/standalone';
import { GlobalsServices } from 'src/app/core';
import { FullModalComponent, OnboardingComponent } from 'src/app/shared/components';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';

@Component({
  selector: 'profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
  standalone: true,
  imports: [
    NgIf, NgClass, TitleCasePipe,
    FullModalComponent, OnboardingComponent,
    IonToolbar, IonSearchbar, IonButton, IonRouterLink, IonRow, IonCol, IonFabButton, IonCard, IonAvatar, IonLabel, IonImg, IonItem, IonSelect, IonSelectOption,
    EmployeeFormComponent, ProfileFormComponent
  ]
})
export class ProfileModalComponent {

  @Input() isOpen: boolean = false
  globals: GlobalsServices = inject(GlobalsServices);

  select: any
  photo: any;

  constructor() {
    console.log(this.globals.modalData.title)
  }
  
  async openOptions(select: any) {
    document.getElementById('photo')?.click() ;
  }
}
