import {Component, EventEmitter, Input} from '@angular/core';
import { ProductService } from '../../services/product-service';
import { ProductModel } from '../../models/product-model';
import { ProductCard } from '../product-card/product-card';


@Component({
  selector: 'app-product-list-component',
  imports: [
    ProductCard
  ],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {
  private ProductService : ProductService;
  protected products : ProductModel[];
  protected filteredProducts : ProductModel[];
  @Input() InSelectedCategory !: string;

  constructor(private productService: ProductService) {
    this.ProductService = productService;
    this.products  = this.productService.getProducts();
    this.filteredProducts = this.productService.getProducts();
  }

  deleteProductBtn(id : number) {
    this.filteredProducts = this.filteredProducts.filter(product => product.id !== id);
  }

  get SelectedCategory () {
    if (this.InSelectedCategory === "all") return this.filteredProducts;
    return this.filteredProducts.filter(x => x.category === this.InSelectedCategory)
  }
}
