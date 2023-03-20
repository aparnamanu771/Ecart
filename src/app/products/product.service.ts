import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  header() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  // api call to view all products
  viewAllProduct(){
    return this.http.get('http://localhost:3000/products')
  }
}

