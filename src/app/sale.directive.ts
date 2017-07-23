import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSale]'
})

export class SaleDirective {
  @HostBinding('class.sale') isSale = true;
  @HostBinding('class.hover') isHovering = false;
  @HostListener('mouseenter') onMouseEnter() {
    this.isHovering = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.isHovering = false;
  }
  // Input decorator for setter method, called when a property value with same name of instance of class
  // Setter method passes value
  @Input() set appSale(value) {
    this.isSale = value;
  }
}
