// Organize all modules used in project
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details.component';
import { SaleDirective } from './sale.directive';
import { SomePipe } from './app.pipe';

// Decorator
@NgModule({
  // Modules within application
  declarations: [
    AppComponent,
    DetailsComponent,
    SaleDirective,
    SomePipe
  ],
  // Required modules from angular
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  // Entry point for application
  bootstrap: [AppComponent]
})
export class AppModule { }
