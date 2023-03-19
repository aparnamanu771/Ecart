import { Component ,OnInit} from '@angular/core';
// import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  // productList: any;
  // constructor(private ps:ProductService) { }

  ngOnInit(): void {

    // this.ps.viewAllProduct().subscribe(data=>{
      // console.log(data);
    //   this.productList=data
      
    // })

  }

}
