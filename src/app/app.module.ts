import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { CartService } from './services/cart.service';
import { CartMockErrorRepository, CartMockSuccessRepository, CartRepository } from './repositories/cart.repository';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductJsonRepository, ProductRepository } from './repositories/product.repository';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductListItemComponent,
    CartComponent,
    HeaderComponent,
    ConfirmationComponent,
    ProductItemDetailComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: CartRepository, useClass: CartMockSuccessRepository },
    { provide: ProductRepository, useClass: ProductJsonRepository },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
