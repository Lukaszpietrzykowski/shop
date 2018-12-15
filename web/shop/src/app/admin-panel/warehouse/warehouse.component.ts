import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../shared/model/product.model";
import {WarehouseModel} from "../../shared/model/warehouse.model";
import {WarehouseService} from "../../shared/service/warehouse.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  warehouse: WarehouseModel = new WarehouseModel();

  constructor(private warehouseService: WarehouseService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.warehouse = this.route.snapshot.data['warehouse'];
    console.log(this.warehouse)

  }
  removeWarehouseProduct(warehouseId: number, index: number){
    this.warehouseService.removeWarehouseProduct(warehouseId).subscribe(() => {
      this.warehouse.splice(index, 1);
    });
  }


}
