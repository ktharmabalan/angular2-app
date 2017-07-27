import { Injectable } from '@angular/core';
import {Product, Category} from './models';
import { PRODUCTS, CATEGORIES } from './data';

// Decorator to inject meta data about service
@Injectable()
export class ProductService {
  getCategories(): Promise<Category[]> {
    return Promise.resolve(CATEGORIES);
  }

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
