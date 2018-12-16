import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {WarehouseModel} from "../model/warehouse.model";
import {CartModel} from "../model/cart.model";
import {Subject} from "rxjs";
import {CartItemModel} from "../model/cart.item.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private cart: CartModel = new CartModel();
  private cartStream: Subject<CartModel> = new Subject();

  constructor() {
  }

  public addToCart(newItem: CartItemModel) {
    return this.cart(newItem);


  }
  public containsItem(warehouseId: number): boolean {
    return this.cart.containsItem(warehouseId);
  }
}
