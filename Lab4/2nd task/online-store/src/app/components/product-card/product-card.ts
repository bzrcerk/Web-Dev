import {Component, Input} from '@angular/core';
import {ProductModel} from '../../models/product-model';
import {RatingStar} from '../rating-star/rating-star';
import {Carousel} from '../carousel/carousel';
import {DecimalPipe} from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-product-card',
  imports: [
    RatingStar,
    Carousel,
    DecimalPipe
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
  animations: [
    trigger('expandFade', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('180ms ease-out', style({ opacity: 1})),
      ]),
      transition(':leave', [
        animate('140ms ease-in', style({ opacity: 0})),
      ]),
    ]),
  ]
})
export class ProductCard {
  @Input() product!: ProductModel
  productMore : boolean = false;

  viewMore() : void {
    this.productMore = !this.productMore;
  }
}
