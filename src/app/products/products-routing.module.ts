import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsComponent } from './products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [{ path: '', component: ViewAllProductsComponent },
{path:"add_Product", component: AddProductsComponent},
{path:"view_product/:id", component: ViewProductComponent},
{path:"delete_product/:id", component: DeleteProductComponent },
{path:"edit_product/:id", component: EditProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
