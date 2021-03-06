import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../shared/model/product.model";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../shared/service/product.service";
import {ProductCategoryModel} from "../../shared/model/product-category.model";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: ProductModel = new ProductModel();
  productCategories: Array<ProductCategoryModel> = [];



  constructor(private productService: ProductService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.data['product']) {
      this.product = this.route.snapshot.data['product'];
    }
    this.productCategories = this.route.snapshot.data['productCategory'];
  }

    saveProduct(){
      this.productService.saveProduct(this.product).subscribe(()=>{
        this.back();
      });
    }

    back(){
      this.location.back();
    }


}
