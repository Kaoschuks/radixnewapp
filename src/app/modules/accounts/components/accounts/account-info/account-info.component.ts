import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class AccountInfoComponent  implements OnInit {

  @Input() account: any
  @Input() currency!: string

  ngOnInit() {}

}
