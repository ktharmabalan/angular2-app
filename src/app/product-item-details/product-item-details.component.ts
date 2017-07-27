import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product} from '../models';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})

export class ProductItemDetailsComponent {
  @Input() product: Product;
  @Output() select = new EventEmitter();

  onSelect() {
    console.log('selected');
    this.select.emit(this.product);
  }
}
