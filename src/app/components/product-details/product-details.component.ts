import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  product = {
    name: "ProSound X100 Wireless Headphones",
    description:
      "Discover the ProSound X100 Wireless Headphones, the perfect blend of innovation and premium sound quality. Featuring Bluetooth 5.0 for seamless wireless connectivity, these headphones provide a stable connection up to 33 feet. Advanced acoustic drivers deliver a rich and balanced sound profile with deep bass and crystal-clear treble, ideal for music lovers and audiophiles. Designed for comfort, the ProSound X100 boasts plush memory foam ear cushions and an adjustable headband for extended listening sessions. With up to 30 hours of battery life on a single charge, you can enjoy uninterrupted music all day long. The built-in microphone allows for hands-free calls with clear voice capture and noise reduction, while Active Noise Cancellation (ANC) technology blocks out unwanted ambient noise for an immersive audio experience. The foldable design and included carrying case make these headphones easy to take on the go, ensuring you have high-fidelity audio wherever you are. Experience exceptional sound quality and comfort with the ProSound X100 Wireless Headphones.",
    price: 99.99,
  };

  ngOnInit(): void {
    // Fetch product details from the server
  }
}
