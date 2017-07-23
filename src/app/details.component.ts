import { Component, Input } from '@angular/core';
import { Product} from './models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {
  @Input() product: Product;
}
