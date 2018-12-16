import {WarehouseModel} from "./warehouse.model";

export class CartItemModel {
  cartItemCount : number = 0;
  warehouseItem : WarehouseModel = new WarehouseModel();

  public constructor(warehouseItem: WarehouseModel, cartItemCount: number) {
    this.cartItemCount = cartItemCount;
    this.warehouseItem = warehouseItem;
  }
}
