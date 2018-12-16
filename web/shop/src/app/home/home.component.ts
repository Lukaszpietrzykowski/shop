import {Component, OnInit} from '@angular/core';
import {WarehouseModel} from "../shared/model/warehouse.model";
import {WarehouseService} from "../shared/service/warehouse.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  warehouse: Array<WarehouseModel> = [];


  constructor(private warehouseService: WarehouseService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.warehouse = this.route.snapshot.data['warehouse'];
  }

}

