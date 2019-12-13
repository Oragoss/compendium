import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../shared/collection.service';
import { Router } from '@angular/router';
import { Collection } from '../models/collection';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  public collections: Collection[];

  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.collections = this.collectionService.getCollections();
  }

  onSelect(collection: Collection) {
    this.router.navigate(['/collection', collection.Id]);
  }
}
