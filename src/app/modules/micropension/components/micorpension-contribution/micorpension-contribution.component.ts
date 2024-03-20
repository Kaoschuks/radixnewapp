import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonItem, IonThumbnail, IonButton, IonList, IonLabel, IonAccordion, IonAccordionGroup } from '@ionic/angular/standalone';
declare let window: any;

@Component({
  selector: 'micorpension-contribution',
  templateUrl: './micorpension-contribution.component.html',
  styleUrls: ['./micorpension-contribution.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonItem, IonThumbnail, IonButton, IonList, IonLabel, IonAccordion, IonAccordionGroup,
    NgIf, NgClass
  ]
})
export class MicorpensionContributionComponent  implements OnInit {

  @Output() onclick = new EventEmitter()
  constructor() { }

  ngOnInit() {}


  ussd: any = {
    firstbank: false,
    otherbanks: false,
  }

  proccess_contribution(type: string = 'firstbank') {
    let amount: number = parseInt(window.prompt("Enter the amount your want to contribute"))
    if(!amount) return;

    let code = (type == 'firstbank') ? '894' : '402' ;
    window.open(`tel:*${code}*10222*${amount}%23`)
    this.close()
  }

  reveal(id: any) {
    this.ussd[id] = (this.ussd[id] == false) ? true : false
  }

  close() {
    // this.globals.modalData
  }

  paystackDeactivated() {
    this.onclick.emit("Payment with credit card is currently deactivated.")
  }
}
