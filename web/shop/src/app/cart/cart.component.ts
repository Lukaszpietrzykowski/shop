import { Component, OnInit } from '@angular/core';
import {CartModel} from "../shared/model/cart.model";
import {CartService} from "../shared/service/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : CartModel = new CartModel();

  constructor() { }

  ngOnInit() {
  }

}
