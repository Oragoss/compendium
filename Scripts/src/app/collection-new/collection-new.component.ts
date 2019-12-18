import { Component, OnInit } from '@angular/core';
import { Collection } from '../models/collection';
import { CollectionService } from '../shared/collection.service';

@Component({
  selector: 'app-collection-new',
  templateUrl: './collection-new.component.html',
  styleUrls: ['./collection-new.component.css']
})
export class CollectionNewComponent implements OnInit {

  // public collection: Collection;
  public name = 'Default Name';
  public description = 'Default Description'
  public imagePath = '../assets/images/blank-document.svg'

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
  }

  postNewCollection(): void {
    let newCollection = new Collection();
    newCollection.Name = this.name;
    newCollection.Description = this.description;
    newCollection.ImagePath = this.imagePath;

    this.collectionService.postCollection(newCollection);
  }
}
