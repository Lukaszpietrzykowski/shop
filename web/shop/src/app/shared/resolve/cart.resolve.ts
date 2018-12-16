import {Injectable} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {CartService} from "../service/cart.service";
import {WarehouseModel} from "../model/warehouse.model";

@Injectable()
export class CartResolve implements Resolve<any>{


  constructor(private cartService : CartService){}

  resolve(route: ActivatedRouteSnapshot){

  }


}
