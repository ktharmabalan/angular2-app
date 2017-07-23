import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product} from './models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {
  @Input() product: Product;
  @Output() select = new EventEmitter();

  onSelect() {
    console.log('selected');
    this.select.emit(this.product);
  }
}
