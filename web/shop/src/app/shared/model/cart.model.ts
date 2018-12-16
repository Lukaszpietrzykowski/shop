import {CartItemModel} from "./cart.item.model";

export class CartModel {
  cartItems : Array<CartItemModel> = [];

  public initCart(cart: CartModel) {
    this.cartItems = cart.cartItems;
  }

  public addToCart(newItem: CartItemModel) {
    this.cartItems.push(newItem);
  }
  public containsItem(warehouseItemId: number): boolean {
    return this.cartItems.filter(item => item.warehouseItem.id == warehouseItemId).length > 0;
  }
}
