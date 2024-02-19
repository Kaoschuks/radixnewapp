import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { micropensionpages, pages, subpages } from 'src/app/core';

@Component({
  selector: 'sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarNavComponent {
  platform: Platform = inject(Platform);
  @Output() loggedOut = new EventEmitter();

  public pages: any = pages
  public micropensionpages: any = micropensionpages
  public subpages: any = subpages
  toogle: any;


  tooglemenu() {
    this.toogle = (this.toogle) ? false : true ;
  }
}
