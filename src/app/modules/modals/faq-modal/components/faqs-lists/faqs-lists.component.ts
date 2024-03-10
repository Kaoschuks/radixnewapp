import { NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { faqs } from 'src/app/core';

@Component({
  selector: 'faqs-lists',
  templateUrl: './faqs-lists.component.html',
  styleUrls: ['./faqs-lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonList, IonItem, IonLabel, NgClass, NgFor]
})
export class FaqsListsComponent implements OnInit {

  @Input() type: string = 'rsa'
  faqid: any = {}
  faqs:any = faqs

  ngOnInit() {
    for(let i = 0;i < this.faqs.length; i++) {
      this.faqid[i] = false
    }
  } 

  reveal(id: any) {
    this.faqid[id] = (this.faqid[id] == false) ? true : false
  }
}
