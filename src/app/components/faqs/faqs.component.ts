import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent {
  faqs = [
    {
      question: 'What is the warranty period for this product?',
      answer: 'The product comes with a 1-year warranty.'
    },
    {
      question: 'Can this product be shipped internationally?',
      answer: 'Yes, we offer international shipping for this product.'
    },
    {
      question: 'What is the return policy?',
      answer: 'You can return the product within 30 days of purchase if you are not satisfied.'
    }
  ];
}
