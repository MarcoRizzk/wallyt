import { Component } from "@angular/core";

@Component({
  selector: "app-key-features",
  templateUrl: "./key-features.component.html",
  styleUrls: ["./key-features.component.scss"],
})
export class KeyFeaturesComponent {
  features = [
    "Wireless Connectivity: Bluetooth 5.0 technology ensures a stable and seamless connection up to 33 feet",
    "Superior Sound Quality: Advanced acoustic drivers deliver a rich and balanced sound profile with deep bass and crystal-clear treble",
    "Comfortable Design: Ergonomic construction with plush memory foam ear cushions and an adjustable headband for extended listening comfort",
    "Long Battery Life: Up to 30 hours of playtime on a single charge, allowing for uninterrupted music enjoyment all day long",
    "Built-in Microphone: Clear voice capture and noise reduction for hands-free calls with superior call quality",
    "Active Noise Cancellation (ANC): Technology that blocks out unwanted ambient noise for an immersive audio experience",
  ];
}
