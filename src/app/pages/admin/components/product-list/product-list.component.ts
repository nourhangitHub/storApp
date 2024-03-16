import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from './../../../../core/services/productService/product.service';
import { Product } from 'src/app/core/interfaces/product';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationComponent } from 'src/app/shared/components/dialog-confirmation/dialog-confirmation.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  productList : Product[] = [];
  dataSource = new MatTableDataSource<Product>(this.productList);
  displayedColumns: string[] = ['id', 'category', 'price', 'title', "actions"];
   constructor(private productService: ProductService, public dialog: MatDialog, private spinner: NgxSpinnerService){}

  ngOnInit(): void {
    this.spinner.show();
    this.getProductList();
  }

  getProductList(){
    this.productService.getAllProduct().subscribe(res => {
      this.productList = res;
      this.dataSource.data = res;
      this.spinner.hide();
    })
  }

  deleteProduct(id: string){
    this.spinner.show();    
    this.productService.deleteProduct(id).subscribe((res: any) => {
      this.productList.splice(this.productList.findIndex(product => product.id === res.id),1);
      this.dataSource.data = this.productList;
      this.spinner.hide();   
    });
  }

  openDialog(id: string): void {
    this.dialog.open(DialogConfirmationComponent, {
      width: '300px',
    }).afterClosed()
    .subscribe((confirmed: Boolean) => {
      if (confirmed) {
        this.deleteProduct(id);
      }
    });;
  }
}
