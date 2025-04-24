import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CartComponent } from '../../pages/cart/cart.component';
import { ProductListComponent } from '../../pages/product-list/product-list.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, FooterComponent, CartComponent, ProductListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
