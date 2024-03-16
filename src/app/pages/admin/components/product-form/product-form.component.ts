import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from 'src/app/core/services/productService/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  categories: string[] = [];
  @Input() product: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getAllCategories();
    if(this.product){
      this.productForm.setValue(this.product);
    }
  }

  initForm() {
    this.productForm = this.fb.group({
      id: [null],
      title: [null, [Validators.required]],
      price: [null, [Validators.required]],
      description: [null, [Validators.required]],
      image: [null, [Validators.required]],
      category: [null, [Validators.required]],
    });
  }

  getAllCategories(){
    this.productService.getAllCategories().subscribe(res => {
      this.categories = res;
    });
  }

  submit(){
    if(this.product){
      this.productService.updateProduct(this.productForm.value).subscribe(() => {
        this.router.navigate(['../admin'])
      });
    }else{
      this.productService.addProduct(this.productForm.value).subscribe(() => {
        this.router.navigate(['../admin'])
      });
    }
  }

  
}
