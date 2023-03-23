import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit{

  

  constructor(private fb:FormBuilder)  { }

  ngOnInit(): void {

  }

  // model form
  addProductForm = this.fb.group({
    id:[""],
    productName:[""],
    categoryId:[""],
    description:[""],
    price:[""],
    is_available:[""],
    productImg:[""],
    rating:[""],
    review:[""],
    vendor_name:[""],
    warrenty:[""]
  })
 

}
