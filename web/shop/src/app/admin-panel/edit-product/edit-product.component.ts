import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../shared/model/product.model";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../shared/service/product.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: ProductModel = new ProductModel();


  constructor(private productService: ProductService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.data['product']) {
      this.product = this.route.snapshot.data['product'];
    }
    this.product.productCategoryDTO.id = 16;
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
