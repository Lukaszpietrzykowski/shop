import {CartItemModel} from "./cart.item.model";


export class CartModel {

  items: Array<CartItemModel> = [];

  public initCart(cart: CartModel) {
    this.items = cart.items;

  }

  public addItem(newItem: CartItemModel) {
    this.items.push(newItem);
  }

  public isEmpty(): boolean {
    return this.items.length == 0;
  }

  public removeItem(warehouseId: number) {
    let index = this.items.map(item => item.warehouseItem.id).indexOf(warehouseId);
    if (index !== null) {
      this.items.splice(index, 1);
    }
  }

  public containsItem(warehouseId: number): boolean {
    return this.items.filter(item => item.warehouseItem.id == warehouseId).length > 0;
  }

  public clearCart() {
    this.items = [];
  }

  public summary(): number {
    return this.items.map(item => item.warehouseItem.productDTO.price * item.quantity).reduce((item1, item2) => item1 + item2, 0);
  }


}

