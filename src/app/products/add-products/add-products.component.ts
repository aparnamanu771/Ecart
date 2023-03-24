import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit{

  

  constructor(private fb:FormBuilder, private ps: ProductService,private router:Router)  { }

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
  addProduct(){

    let Pdata={
        
      id: this.addProductForm.value.id,
      productName: this.addProductForm.value.productName,
      categoryId: this.addProductForm.value.categoryId,
      description: this.addProductForm.value.description,
      price: this.addProductForm.value.price,
      isAvailable: this.addProductForm.value.is_available,
      productImage: this.addProductForm.value.productImg,
      rating: this.addProductForm.value.rating,
      priview: this.addProductForm.value.review,
      vendorName: this.addProductForm.value.vendor_name,
      warrenty: this.addProductForm.value.warrenty
    }

    this.ps.addNewProduct(Pdata).subscribe((item)=>{
      alert("new product added")
      this.router.navigateByUrl("products")
    })

  }
 
   
}
