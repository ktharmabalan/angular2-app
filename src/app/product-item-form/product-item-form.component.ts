import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Category, Product} from '../models';
import {ProductService} from '../product-service';

@Component({
  selector: 'app-product-item-form',
  templateUrl: './product-item-form.component.html',
  styleUrls: ['./product-item-form.component.css'],
  providers: [ProductService]
})

export class ProductItemFormComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[];

  constructor(private productService: ProductService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.productService.getCategories().then(categories => this.categories = categories);
    // .then(() => { console.log(this.categories); })
  }

  onSubmit() {
    console.log(this.saveForm());
  }

  createForm() {
    this.productForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      sale: false,
      category: ''
    });
  }

  saveForm(): Product {
    const formModel = this.productForm.value;
    return new Product(formModel.id, formModel.name, formModel.sale, formModel.category);
  }
}
