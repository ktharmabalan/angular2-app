import { OnInit, Component } from '@angular/core';
import { Product, Category } from '../models';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // Create new instance of the service
  providers: [ProductService]
})

export class ProductComponent implements OnInit {
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
    // this.product = this.productService.getProducts();
    this.productService.getProducts().then(products => this.products = products);
  }

  onDetailSelect(product): void {
    console.log(product);
  }
}
