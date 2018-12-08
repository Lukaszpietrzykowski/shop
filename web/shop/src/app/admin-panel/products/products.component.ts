import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../shared/model/product.model";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../shared/service/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:  Array<ProductModel> = [];

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.products = this.route.snapshot.data['products'];
    console.log(this.products)
  }

  removeProduct(categoryId: number, index: number) {
    this.productService.removeProduct(categoryId).subscribe(() => {
      this.products.splice(index, 1);
    });
  }

}
