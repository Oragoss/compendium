import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { Item } from '../models/item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.css']
})
export class ItemNewComponent implements OnInit {

  public name = 'New Collection';
  public description = 'Default Description'
  public imagePath = '../assets/images/blank-document.svg'

  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  postNewItem(): void {
    let newItem = new Item();
    newItem.Name = this.name;
    newItem.CollectionId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));;
    newItem.Description = this.description;
    newItem.ImagePath = this.imagePath;

    this.itemService.postItem(newItem);
  }
}