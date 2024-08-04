import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-reviews',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.scss']
})
export class UserReviewsComponent implements OnInit {
  reviews = [
    {
      title: 'Great Product',
      content: 'I really liked this product. It works as expected.',
      author: 'John Doe'
    },
    {
      title: 'Not bad',
      content: 'The product is good but could be improved.',
      author: 'Jane Smith'
    }
  ];

  ngOnInit(): void {
    // Fetch reviews from the server
  }
}
