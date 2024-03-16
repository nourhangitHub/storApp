import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'add', component: AddProductComponent },
  { path: ':id', component: EditProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class AdminRoutingModule {}
