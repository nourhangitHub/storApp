import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from 'src/app/core/interfaces/product';
import { ProductService } from 'src/app/core/services/productService/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id!: string;
  product!: Product;
  constructor(private route: ActivatedRoute, private productService: ProductService,  private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show()
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
   
    this.productService.getProductById(this.id).subscribe(res => {
      this.product = res;
      this.spinner.hide();
    });
  }
}
