import { Injectable } from '@angular/core';
import {Product} from './models';
import { PRODUCTS } from './data';

// Decorator to inject meta data about service
@Injectable()
export class ProductService {
  // getProducts(): Product[] {
  //   return PRODUCTS;
  // }
  getProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }
  getProductsSlowly(): Promise<Product[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getProducts()), 2000);
    });
  }
}
