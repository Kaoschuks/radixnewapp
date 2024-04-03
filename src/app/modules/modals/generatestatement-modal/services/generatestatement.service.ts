import { Injectable, inject } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GlobalsServices, AccountsService } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratestatementService {

  globals: GlobalsServices = inject(GlobalsServices);
  acctServ: AccountsService = inject(AccountsService);
  plt: Platform = inject(Platform);

  startDate: any = new Date()
  endDate: any = new Date()

  async applyFilter() {
    const resp: any = await this.acctServ.generate_statement({
      fundId: 1,
      startdate: this.startDate,
      enddate: this.endDate
    })
    this.globals.closeModal('statementmodal')
  }
}
