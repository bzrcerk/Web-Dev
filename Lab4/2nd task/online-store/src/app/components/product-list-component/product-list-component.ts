import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { ProductModel } from '../../models/product-model';


@Component({
  selector: 'app-product-list-component',
  imports: [
  ],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {
  private ProductService : ProductService;
  protected products : ProductModel[];

  constructor(private productService: ProductService) {
    this.ProductService = productService;
    this.products  = this.productService.getProducts();
  }





}
