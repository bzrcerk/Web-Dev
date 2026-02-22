import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductModel} from '../../models/product-model';
import {RatingStar} from '../rating-star/rating-star';
import {Carousel} from '../carousel/carousel';
import {DecimalPipe, NgClass} from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-product-card',
  imports: [
    RatingStar,
    Carousel,
    DecimalPipe,
    NgClass,
    FormsModule
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
  @Input() product!: ProductModel;
  @Output() deleteProduct = new EventEmitter<number>();
  productMore : boolean = false;
  isLiked : boolean = false;
  askDel : boolean = false;

  viewMore() : void {
    this.productMore = !this.productMore;
  }

  deleteProductBtn(id : number) {
    this.deleteProduct.emit(id);
  }

  likeToggle() : void {
    if (this.isLiked) {
      this.product.likes -= 1;
    } else {
      this.product.likes += 1;
    }
    this.isLiked = !this.isLiked;
  }

  askDelToggle() {
    this.askDel = true;
  }

  closeAskDel() {
    this.askDel = false;
  }
}
