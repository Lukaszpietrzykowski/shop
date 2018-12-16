import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {WarehouseService} from "../../shared/service/warehouse.service";
import {WarehouseModel} from "../../shared/model/warehouse.model";
import {DictionaryModel} from "../../shared/model/dictionary.model";

@Component({
  selector: 'app-edit-warehouse',
  templateUrl: './edit-warehouse.component.html',
  styleUrls: ['./edit-warehouse.component.css']
})



export class EditWarehouseComponent implements OnInit {

  warehouse: WarehouseModel = new WarehouseModel();
  products: Array<DictionaryModel> = [];

  constructor(private warehouseService: WarehouseService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.data['warehouse']) {
      this.warehouse = this.route.snapshot.data['warehouse'];
    }
    this.products = this.route.snapshot.data['products'];

  }
  saveWarehouse() {
    this.warehouseService.saveWarehouse(this.warehouse).subscribe(() => {
      this.back();
    });
  }

  back() {
    this.location.back();
  }

}
