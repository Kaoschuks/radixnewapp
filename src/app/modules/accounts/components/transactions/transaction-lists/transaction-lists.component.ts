import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf, SlicePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IonAvatar, IonCard, IonFabButton, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonNote, IonSkeletonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowRedoOutline, arrowUndoOutline } from 'ionicons/icons';
import { NoContentComponent } from 'src/app/shared/components';

@Component({
  selector: 'transaction-lists',
  templateUrl: './transaction-lists.component.html',
  styleUrls: ['./transaction-lists.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonListHeader, IonLabel, IonItem, IonAvatar, IonSkeletonText, IonCard, IonList, IonNote, NoContentComponent, IonFabButton, IonIcon,
    NgIf, NgFor, DatePipe, CurrencyPipe, SlicePipe, NgClass
  ]
})
export class TransactionListsComponent implements OnChanges {

  @Input() loader: any
  @Input() currency!: string
  @Input() transactions: any = []
  @Output() onclick: any = new EventEmitter();

  constructor() {
    addIcons({ 
      "arrow-redo-outline": arrowRedoOutline,
      "arrow-undo-outline": arrowUndoOutline,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  toNumber(str: string = "0") {
    // console.log(str)
    str = str.replace(",", '')
    return parseInt(str);
  }

}
