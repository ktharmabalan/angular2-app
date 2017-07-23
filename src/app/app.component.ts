import { OnInit, Component } from '@angular/core';
import { Product, Category } from './models';
import { ProductService } from './product-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // Create new instance of the service
  providers: [ProductService]
})

export class AppComponent implements OnInit {
  categories: Category[] = [
    { id: 1, name: 'Boxes' },
    { id: 2, name: 'Wraps' },
    { id: 3, name: 'Rods' }
  ];
  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  onProductClick(product: Product): void {
    this.selectedProduct = product;
  };

  getProducts(): void {
    // this.products = this.productService.getProducts();
    this.productService.getProductsSlowly().then(products => this.products = products);
    // this.productService.getProducts().then(products => this.products = products);
  }
}
