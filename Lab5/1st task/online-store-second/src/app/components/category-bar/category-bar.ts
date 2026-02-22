import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ProductModel} from '../../models/product-model';
import {ProductService} from '../../services/product-service';

@Component({
  selector: 'app-category-bar',
  imports: [
    FormsModule
  ],
  templateUrl: './category-bar.html',
  styleUrl: './category-bar.css',
})
export class CategoryBar {
  isVisible : boolean = false;
  protected productsCategories : string[];
  private productService : ProductService;
  protected SelectedCategory : string = "all";
  @Output() OutCategorySelected = new EventEmitter<string>();

  constructor(productService : ProductService) {
    this.productService = productService;
    this.productsCategories = Array.from(new Set(productService.getProducts().map(product => product.category))).sort();
  }

  selectCategory () {
    this.OutCategorySelected.emit(this.SelectedCategory);
  }

  changeVis() : void {
    this.isVisible = !this.isVisible;
  }
}
