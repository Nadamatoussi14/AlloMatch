import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchFeedbackPage } from './match-feedback.page';

describe('MatchFeedbackPage', () => {
  let component: MatchFeedbackPage;
  let fixture: ComponentFixture<MatchFeedbackPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchFeedbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
