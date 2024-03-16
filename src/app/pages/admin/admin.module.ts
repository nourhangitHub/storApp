import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ProductListComponent,
    AddProductComponent,
    EditProductComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
