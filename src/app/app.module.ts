import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './layout/header/header.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CartService } from './services/cart.service';
import { CartMockErrorRepository, CartMockSuccessRepository, CartRepository } from './repositories/cart.repository';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductListItemComponent,
    CartComponent,
    HeaderComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [
    { provide: CartRepository, useClass: CartMockSuccessRepository },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
