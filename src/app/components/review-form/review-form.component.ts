import { Component } from '@angular/core';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent {
  review = {
    title: '',
    content: '',
    author: ''
  };

  submitReview(): void {
    // Submit the review to the server
    console.log('Review submitted', this.review);
  }
}
