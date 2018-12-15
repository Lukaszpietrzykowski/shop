import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {WarehouseModel} from "../model/warehouse.model";


@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private warehouse: WarehouseModel = new WarehouseModel();
  private warehouseStream: Subject<WarehouseModel> = new Subject();

  constructor(private http: HttpClient) { }

  public getWarehouses() : Observable<WarehouseModel>{
    return this.http.get("/api/warehouse").pipe(
      map((response: WarehouseModel) => {
        this.warehouse = response;
        this.warehouseStream.next(this.warehouse);
        return this.warehouse;
      }));
  }

  public getWarehouse(id: number): Observable<WarehouseModel> {
    return this.http.get("/api/warehouse/" + id).pipe(map((response: WarehouseModel) => {
      return response;
    }));
  }

  public saveWarehouse(warehouse: WarehouseModel): Observable<WarehouseModel> {
    if (warehouse.id) {
      return this.http.put("/api/warehouse/" + warehouse.id, warehouse).pipe(map((response: WarehouseModel) => {
        return response;
      }));
    } else {
      return this.http.post("/api/warehouse", warehouse).pipe(map((response: WarehouseModel) => {
        return response;
      }));
    }

  }
  public removeWarehouseProduct(id: number) {
    return this.http.delete("/api/warehouse/" + id);
  }
}