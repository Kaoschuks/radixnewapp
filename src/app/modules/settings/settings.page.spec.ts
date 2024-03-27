import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsPage } from './settings.page';
import { ActivatedRoute } from '@angular/router';

describe('SettingsPage', () => {
  let component: SettingsPage;
  let fixture: ComponentFixture<SettingsPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(SettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
