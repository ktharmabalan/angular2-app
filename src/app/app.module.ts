// Organize all modules used in project
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductItemDetailsComponent } from './product-item-details/product-item-details.component';
import { ProductItemFormComponent } from './product-item-form/product-item-form.component';

import { SaleDirective } from './sale.directive';
import { SomePipe } from './app.pipe';

// Decorator
@NgModule({
  // Modules within application
  declarations: [
    AppComponent,
    ProductComponent,
    ProductItemDetailsComponent,
    ProductItemFormComponent,
    SaleDirective,
    SomePipe
  ],
  // Required modules from angular
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  // Entry point for application
  bootstrap: [AppComponent]
})
export class AppModule { }
