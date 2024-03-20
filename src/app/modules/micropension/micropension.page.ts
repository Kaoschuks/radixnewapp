import { Component, OnInit } from '@angular/core';
import { IonButton, IonCard, IonContent, IonItem, IonLabel, IonList, IonListHeader, IonThumbnail } from '@ionic/angular/standalone';
import { MicropensionService } from '../micropension/services/micropension.service';
import { MicorpensionContributionComponent } from '../micropension/components';
import { FaqsListsComponent } from './components/faqs-lists/faqs-lists.component';

@Component({
  selector: 'app-micropension',
  templateUrl: './micropension.page.html',
  styleUrls: ['./micropension.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonCard, IonListHeader, IonLabel, IonItem,
    MicorpensionContributionComponent, FaqsListsComponent
  ]
})
export class MicropensionPage extends MicropensionService implements OnInit {

  ngOnInit() {
  }

}
