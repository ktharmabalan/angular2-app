import { Pipe } from '@angular/core';

@Pipe({
  name: 'some'
})

export class SomePipe {
  transform(products) {
    const items = [];
    if (products) {
      products.forEach(product => {
        if (items.indexOf(product.id) <= -1) {
          items.push(product.id);
        }
      });
    }
    return items.join(', ');
  }
}
