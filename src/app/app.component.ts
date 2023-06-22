import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductService } from './services/products.service';
import { Observable, tap } from 'rxjs';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular education';
  // products:IProduct[] = []
  loading=false;
  products$:Observable<IProduct[]>
  term=''

  constructor(
    private productsService: ProductService,
    public modalService:ModalService){

  }
  ngOnInit():void{
    this.loading =true
    this.products$= this.productsService.getAll().pipe(
      tap(()=>{ this.loading=false})
    )
    // this.productsService.getAll().subscribe(products =>{
    //   this.products = products   
    //   this.loading = false   
    // })
  }
}
