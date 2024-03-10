import { Component, Input, OnInit } from '@angular/core';
import { DetailsPage } from 'src/app/components/modals/details/details.page';
import { GlobalsProvider } from 'src/app/providers/core/globals';

@Component({
  selector: 'accounts-lists',
  templateUrl: './accounts-lists.component.html',
  styleUrls: ['./accounts-lists.component.scss'],
})
export class AccountsListsComponent implements OnInit {

  toogle_arr: boolean[] = [];
  @Input() accounts: Array<any> = []
  @Input() type: any
  @Input() cat!: string
  @Input() loader: any = false
  constructor(
    private _globals: GlobalsProvider
  ) { }

  ngOnInit() {
  }

  toNumber(str: string = "0") {
    return Number(parseInt(str, 10));
  }

  async view_details(account: any, type: any) {
    const modal: any = await this._globals.modalCtrl.create({
      component: DetailsPage,
      cssClass: "modal-70-percent",
      componentProps: {
        accountInfo: account,
        account_type: type
      }
    });
    modal.present()
  }

  toogle(i: number = 0): void {
    this.toogle_arr[i] = (this.toogle_arr[i]) ? false : true ;
  }

}
