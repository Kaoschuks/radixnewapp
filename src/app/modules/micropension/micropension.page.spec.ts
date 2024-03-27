import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicropensionPage } from './micropension.page';

describe('MicropensionPage', () => {
  let component: MicropensionPage;
  let fixture: ComponentFixture<MicropensionPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(MicropensionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
