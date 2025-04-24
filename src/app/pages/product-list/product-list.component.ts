import { Component } from '@angular/core';
import { Product } from '../../Product'; 


@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [];
  selectedImage: string | null = null; // Variable para almacenar la imagen seleccionada
}
