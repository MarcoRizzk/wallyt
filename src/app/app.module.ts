import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { KeyFeaturesComponent } from './components/key-features/key-features.component';
import { UserReviewsComponent } from './components/user-reviews/user-reviews.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { RelatedProductsComponent } from './components/related-products/related-products.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { ShippingReturnsComponent } from './components/shipping-returns/shipping-returns.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCarouselComponent,
    ProductDetailsComponent,
    KeyFeaturesComponent,
    UserReviewsComponent,
    ReviewFormComponent,
    RelatedProductsComponent,
    FaqsComponent,
    ShippingReturnsComponent,
    ProductPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
