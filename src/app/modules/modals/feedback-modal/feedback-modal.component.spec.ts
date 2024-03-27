import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedbackModalComponent } from './feedback-modal.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';

describe('FeedbackModalComponent', () => {
  let component: FeedbackModalComponent;
  let fixture: ComponentFixture<FeedbackModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackModalComponent ],
      imports: [IonicModule.forRoot(), FeedbackFormComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
