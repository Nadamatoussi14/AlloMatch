// feedback.service.ts
import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback.model';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private feedbacks: Feedback[] = [];

  addFeedback(feedback: Feedback) {
    this.feedbacks.push(feedback);
  }

  getFeedbackByUser(participantId: number): Feedback[] {
    return this.feedbacks.filter(f => f.participantId === participantId);
  }

  getAverageRating(participantId: number): number {
    const userFeedbacks = this.getFeedbackByUser(participantId);
    const total = userFeedbacks.reduce((sum, fb) => sum + fb.rating, 0);
    return userFeedbacks.length ? total / userFeedbacks.length : 0;
  }
}
