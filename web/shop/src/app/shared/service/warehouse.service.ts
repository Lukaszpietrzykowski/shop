import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {WarehouseModel} from "../model/warehouse.model";

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private warehouse: Array<WarehouseModel> = [];
  private warehouseStream: Subject<Array<WarehouseModel>> = new Subject();

  constructor(private http: HttpClient) { }

  public getWarehouse() : Observable<Array<WarehouseModel>>{
    return this.http.get("/api/warehouse").pipe(
      map((response: Array<WarehouseModel>) => {
        this.warehouse = response;
        this.warehouseStream.next(this.warehouse);
        return this.warehouse;
      }));
  }

}
