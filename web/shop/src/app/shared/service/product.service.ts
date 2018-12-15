import {Injectable} from "@angular/core";
import {ProductCategoryModel} from "../model/product-category.model";
import {Observable, Subject} from "rxjs";
import {ProductModel} from "../model/product.model";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {DictionaryModel} from "../model/dictionary.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private product: Array<ProductModel> = [];
  private productStream: Subject<Array<ProductModel>> = new Subject();

  constructor(private http: HttpClient) { }

  public getProductDictionary(): Observable<Array<DictionaryModel>>{
    return this.http.get("api/product/dictionary").pipe(map((response: Array<DictionaryModel>) => {
      return response;
      }));

  }

  public getProducts(): Observable<Array<ProductModel>> {
    return this.http.get("/api/product").pipe(
      map((response: Array<ProductModel>) => {
      this.product = response;
      this.productStream.next(this.product);
      return this.product;
    }));
  }

  public getProduct(id: number): Observable<ProductModel> {
    return this.http.get("/api/product/" + id).pipe(map((response: ProductModel) => {
      return response;
    }));
  }

  public removeProduct(id: number) {
    return this.http.delete("/api/product/" + id);
  }

  public saveProduct(product: ProductModel): Observable<ProductModel> {
    if (product.id) {
      return this.http.put("/api/product/" + product.id, product).pipe(map((response: ProductModel) => {
        return response;
      }));
    } else {
      return this.http.post("/api/product", product).pipe(map((response: ProductModel) => {
        return response;
      }));
    }
  }

}
