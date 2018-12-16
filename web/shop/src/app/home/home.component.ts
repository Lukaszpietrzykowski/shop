import {Component, OnInit} from '@angular/core';
import {WarehouseModel} from "../shared/model/warehouse.model";
import {WarehouseService} from "../shared/service/warehouse.service";
import {ActivatedRoute} from "@angular/router";
import {CartModel} from "../shared/model/cart.model";
import {CartItemModel} from "../shared/model/cart.item.model";
import {CartService} from "../shared/service/cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  warehouse: Array<WarehouseModel> = [];


  constructor( private route: ActivatedRoute,
               private cartService: CartService){}

  ngOnInit() {
    this.warehouse = this.route.snapshot.data['warehouse'];
  }

  addToCart(item: WarehouseModel) {
    let shoppingCartItem = new CartItemModel(item, 1);
    this.cartService.addItem(shoppingCartItem);
  }

  isInCart(warehouseId: number): boolean {
    return this.cartService.containsItem(warehouseId);
  }

}

