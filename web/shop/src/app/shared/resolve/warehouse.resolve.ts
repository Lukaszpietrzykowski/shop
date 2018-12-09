import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {WarehouseService} from "../service/warehouse.service";

@Injectable()
export class WarehouseResolve implements Resolve<any> {

  constructor(private warehouseService: WarehouseService) {}

  resolve() {
    return this.warehouseService.getWarehouse();
  }
}

