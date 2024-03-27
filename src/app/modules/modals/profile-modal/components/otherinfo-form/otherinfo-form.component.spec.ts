import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherinfoFormComponent } from './otherinfo-form.component';

describe('OtherinfoFormComponent', () => {
  let component: OtherinfoFormComponent;
  let fixture: ComponentFixture<OtherinfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherinfoFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherinfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
