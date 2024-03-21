import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { IonButton, IonCard, IonCol, IonContent, IonFooter, IonItem, IonLabel, IonListHeader, IonRow, IonThumbnail, IonToolbar } from '@ionic/angular/standalone';
import { CalculatorService } from './services/calculator.service';
import { CalculatorFormComponent } from './components/calculator-form/calculator-form.component';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonFooter, IonButton, IonCard, IonItem, IonLabel, IonListHeader, IonRow, IonCol, IonThumbnail,
    CalculatorFormComponent,
    CurrencyPipe
  ]
})
export class CalculatorPage extends CalculatorService implements OnInit {
  
  ngOnInit() {
  }

}
