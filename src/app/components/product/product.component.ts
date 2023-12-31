import {Component, Input} from '@angular/core'
import { IProduct } from 'src/app/models/product'

@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
    styleUrls:['product.component.css']
})

export class ProductComponent{
    @Input() product: IProduct
    visibility:boolean=true;
    showDetails(){
        this.visibility = !this.visibility
    }
}