import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  @Input() images !: string[];
  protected activeIndex = 0;

  setActive(i : number) {
    this.activeIndex = i;
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }
}
