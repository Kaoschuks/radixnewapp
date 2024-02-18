import { NgClass, NgFor, NgIf } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { Platform } from '@ionic/angular';
import { IonButton, IonCol, IonContent, IonItem, IonLabel, IonModal, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HalfModalComponent } from 'src/app/shared/components';
import { GlobalsServices } from 'src/app/shared/services';

@Component({
  selector: 'filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    NgIf, NgClass, NgFor,
    HalfModalComponent, IonRow, IonToolbar, IonContent, IonTitle, IonRow, IonCol, IonItem, IonSelect, IonLabel, IonSelectOption, IonButton, IonModal
  ]
})
export class FilterModalComponent {
  plt: Platform = inject(Platform);
  @Input() month!: number;
  @Input() months: Array<any> = [];
  @Input() year!: number;
  @Input() years: Array<any> = [];
  @Input() type!: string;
  @Input() isOpen: boolean = false;
  @Output() onApply = new EventEmitter<any>();

  public readonly globals: GlobalsServices = inject(GlobalsServices);

  applyFilter() {
    this.onApply.emit({
      month: this.month,
      year: this.year
    })
    this.globals.closeModal(`${this.type}filtermodal`)
  }
}
