import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

type starType = 'full' | 'half' | 'empty';

@Component({
  selector: 'app-rating-star',
  imports: [CommonModule],
  templateUrl: './rating-star.html',
  styleUrl: './rating-star.css',
})
export class RatingStar {
  private static maxStars : number = 5;
  stars = Array(5).fill(0).map((_, i) => {i});
  @Input() rating : number = 0;

  public getSrc(i : number) : string {
    const diff = this.rating - i;

    if (diff >= 1) return './assets/full-star.svg'
    else if (diff >= 0.5) return './assets/half-star.png'
    return './assets/empty-star.svg'
  }
}
