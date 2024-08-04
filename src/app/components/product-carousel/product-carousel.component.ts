import { Component } from '@angular/core';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent {
  ngOnInit(): void {

  }
  
  photos: string[] = [
    '../../assets/product/1.jpg',
    '../../assets/product/2.jpg',
    '../../assets/product/3.jpg',
  ];
  currentIndex = 0;

  next() {
    if (this.currentIndex < this.photos.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.photos.length - 1;
    }
  }
}
