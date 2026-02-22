import { Component } from '@angular/core';
import {ProductListComponent} from './components/product-list-component/product-list-component';
import {CategoryBar} from './components/category-bar/category-bar';

@Component({
  selector: 'app-root',
  imports: [
    ProductListComponent,
    CategoryBar

  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    selectedCategory : string = 'all';

    onCategoryChange(category :  string) {
      this.selectedCategory = category;
    }
}
