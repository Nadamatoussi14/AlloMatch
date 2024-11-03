// match-feedback.page.ts
import { Component } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Feedback } from 'src/app/models/feedback.model';

@Component({
  selector: 'app-match-feedback',
  templateUrl: './match-feedback.page.html',
  styleUrls: ['./match-feedback.page.scss'],
})
export class MatchFeedbackPage {
  feedback: Feedback = {
    matchId: 0,
    participantId: 0,
    rating: 0,
    comment: '',
  };

  constructor(private feedbackService: FeedbackService) {}

  submitFeedback() {
    this.feedbackService.addFeedback(this.feedback);
    alert('Feedback envoyé !');
  }
}
