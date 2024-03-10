import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'accounts-trans',
  templateUrl: './accounts-trans.component.html',
  styleUrls: ['./accounts-trans.component.scss'],
})
export class AccountsTransComponent implements OnInit {

  @Input() transactions: any = []
  @Input() loader: boolean = false
  constructor() { }

  ngOnInit() {}

}
