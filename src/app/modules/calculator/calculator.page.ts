import { AsyncPipe, CurrencyPipe, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { IonButton, IonCard, IonCol, IonContent, IonFooter, IonItem, IonLabel, IonListHeader, IonRow, IonSpinner, IonThumbnail, IonToolbar } from '@ionic/angular/standalone';
import { CalculatorService } from './services/calculator.service';
import { CalculatorFormComponent } from './components/calculator-form/calculator-form.component';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonFooter, IonButton, IonCard, IonItem, IonLabel, IonListHeader, IonRow, IonCol, IonThumbnail, IonSpinner,
    CalculatorFormComponent,
    CurrencyPipe, AsyncPipe, NgIf
  ]
})
export class CalculatorPage extends CalculatorService implements OnInit {
  
  calculatorForm: any
  async ngOnInit() {
    this.calculatorForm = await this.getPensionInfo();
  }

}
