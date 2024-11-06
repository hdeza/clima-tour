import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  items: string[] = [
    'images/salento1.jpg',
    'images/parquetayrona.jpg',
    'images/sanandres1.jpg',
    'images/cartagena1.jpg',
  ];
  currentImageIndex: number = 0;
  private intervalId: any;
  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.moveNext();
    }, 4000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  moveNext(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.items.length;
  }

  movePrevious(): void {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.items.length) % this.items.length;
  }
}
