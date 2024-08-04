import { Component } from '@angular/core';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent {
  relatedProducts = [
    {
      name: 'Product 1',
      price: 79.99,
      image: '../../assets/related/1.jpg'
    },
    {
      name: 'Product 2',
      price: 89.99,
      image: '../../assets/related/2.jpg'
    },
    {
      name: 'Product 3',
      price: 99.99,
      image: '../../assets/related/3.jpg'
    },
    {
      name: 'Product 4',
      price: 79.99,
      image: '../../assets/related/1.jpg'
    },
    {
      name: 'Product 5',
      price: 89.99,
      image: '../../assets/related/2.jpg'
    },
    {
      name: 'Product 6',
      price: 99.99,
      image: '../../assets/related/3.jpg'
    },
    {
      name: 'Product 7',
      price: 79.99,
      image: '../../assets/related/1.jpg'
    },
    {
      name: 'Product 8',
      price: 89.99,
      image: '../../assets/related/2.jpg'
    },
    {
      name: 'Product 9',
      price: 99.99,
      image: '../../assets/related/3.jpg'
    },

  ];
}
