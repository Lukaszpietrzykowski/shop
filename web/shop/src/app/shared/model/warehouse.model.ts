import {ProductModel} from "./product.model";

export class WarehouseModel{
  id: number = null;
  quantity: number = null;
  productDTO: ProductModel = new ProductModel();

}
