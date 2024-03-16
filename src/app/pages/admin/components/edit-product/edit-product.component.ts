import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from 'src/app/core/interfaces/product';
import { ProductService } from 'src/app/core/services/productService/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  id!: string;
  product!: Product;
  constructor(private route: ActivatedRoute, private productService: ProductService,  private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.getId();
    if(this.id){
      this.getProductByID();
    }
  }

  // Get product  id
  getId() {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
  }

  getProductByID(){
    this.spinner.show()
    this.productService.getProductById(this.id).subscribe(res => {
      this.product = res;
      this.spinner.hide();
    });
  }
}
