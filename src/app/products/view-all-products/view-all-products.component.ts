import { Component, OnInit} from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent {
  productList: any;
  constructor(private ps:ProductService) { }
  ngOnInit(): void {

    this.ps.viewAllProduct().subscribe(data=>{
      // console.log(data);
      this.productList=data
      
    })

  }

}
