import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public item: Item;

  constructor(
    private activatedRoute: ActivatedRoute,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.item = this.getItem(id);
  }

  getItem(id: number): Item {
    return this.itemService.getItem(id);
  }
}
