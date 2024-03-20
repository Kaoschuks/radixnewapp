import { NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'investments-lists',
  templateUrl: './investments-lists.component.html',
  styleUrls: ['./investments-lists.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonList, IonItem, IonLabel, IonAccordion, IonAccordionGroup,
    NgClass, NgFor
  ]
})
export class InvestmentsListsComponent {

  investments: any = [
    {
      name: "Public Equity",
      information: "Public Equity are units of equity ownership interest in a corporation that exist as a financial asset providing for an equal distribution in any residual profits, if any are declared, in the form of dividends and capital appreciation e.g Uba Plc and Zenith Bank Plc."
    },
    {
      name: "Bonds",
      information: "A bond is a fixed income instrument that represents a loan made by an investor to a borrower (typically corporate or governmental). Investors receive coupon annually, semiannually or quarterly."
    },
    {
      name: "Treasury Bills",
      information: "Treasury securities are government debt instruments issued by Sovereign state to finance government spending as an alternative to taxation.      "
    },
    {
      name: "Money Market",
      information: "The money market is a component of the economy which provides short-term funds. The money market deals in short-term loans, generally for a period of a year or less e.g bank deposit, call deposit and commercial papers."
    },
    {
      name: "Alternative Investment",
      information: "An alternative investment is an investment in any asset class excluding stocks, bonds, and cash e.g real estate, commodities and infrastructure funds."
    },
    {
      name: "Mutual Fund",
      information: "A mutual fund is an open-end professionally managed investment fund that pools money from many investors to purchase securities."
    },
    {
      name: "Exchange Traded Funds",
      information: "An exchange-traded fund (ETF) is a type of investment fund and exchange-traded product, i.e. they are traded on stock exchanges e.g Stanbic IBTC Aggressive Fund, Stanbic IBTC Nigerian Equity Fund and Vetiva New Gold ETF."
    },
  ]
}
