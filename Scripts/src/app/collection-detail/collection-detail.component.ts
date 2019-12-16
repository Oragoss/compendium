import { Component, OnInit } from '@angular/core';
import { Collection } from '../models/collection';
import { Item } from '../models/item';
import { Router, ActivatedRoute } from '@angular/router';
import { CollectionService } from '../shared/collection.service';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css']
})
export class CollectionDetailComponent implements OnInit {

  public collection: Collection;
  public items: Item[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private collectionService: CollectionService,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    let collectionId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getCollection(collectionId);

    this.items = this.getItems(collectionId);
  }

  onSelect(item: Item) {
    this.router.navigate([`/collection/${this.collection.Id}/item`, item.Id]);
  }

  getItems(collectionId: number): Item[] {
    return this.itemService.getItems(collectionId);
  }

  getCollection(collectionId: number): void {
    this.collectionService.getCollection(collectionId)
      .subscribe(data => {
        this.collection = data
      });
  }
}
