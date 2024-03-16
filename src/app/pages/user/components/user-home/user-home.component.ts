import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from 'src/app/core/interfaces/product';
import { ProductService } from 'src/app/core/services/productService/product.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit{
  categories: string[] = [];
  selectedCategory: string[] = [];
  productList : Product[] = [];
  filteredProduct : Product[] = [];
  isLoading = true;
  constructor(private productService: ProductService, private spinner: NgxSpinnerService){}

  ngOnInit(): void {
    this.getAllCategories();
    this.getProductList();
  }

  getAllCategories(){
    this.spinner.show();
    this.productService.getAllCategories().subscribe(res => {
      this.categories = res;
    });
  }

  getProductList(){
    this.productService.getAllProduct().subscribe(res => {
      this.productList = res;
      this.filteredProduct = res;
      this.spinner.hide();
    })
  }

  filterSelected(e: any){
    this.spinner.show();
    if(e.checked){
      this.selectedCategory.push(e.source.value);
      this.productList.filter(product => product.category === e.source.value);
      this.updateProductList();
    }else{
      this.selectedCategory.splice(this.selectedCategory.findIndex(category => category === e.source.value),1);
      if(this.selectedCategory.length){
        this.updateProductList();
      }else{
        this.filteredProduct = this.productList;
        setTimeout(() => {
          this.spinner.hide();
        }, 2000);
      }
      
    }
  }

  updateProductList(){
    this.filteredProduct = [];
    if(this.selectedCategory.length){
      this.selectedCategory.forEach(category => {
          this.filteredProduct =  this.filteredProduct.concat(this.productList.filter(product => product.category === category));
      });
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);
    }
  }

  

}
