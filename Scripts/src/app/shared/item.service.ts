import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  fakeData: Item[] = [
    {
      Id: 1,
      CollectionId: 1,
      Name: 'Book',
      Description: 'Some Quick Example Text.',
      ImagePath: '../../assets/images/blank-document.svg',
      CreationDate: new Date()
    },
    {
      Id: 2,
      CollectionId: 2,
      Name: 'SECOND BOOK',
      Description: 'Some MORE Quick Example Text.',
      ImagePath: '../../assets/images/book-orange.svg',
      CreationDate: new Date()
    },
    {
      Id: 3,
      CollectionId: 3,
      Name: 'THIRD MOST IMPORTANT BOOK',
      Description: 'Some MORE Quick Example Text.',
      ImagePath: '../../assets/images/book-red.svg',
      CreationDate: new Date()
    }
  ];

  getItems(collectionId: number) {
    //TODO: Switch this to an api call
    if(collectionId === 1)
      return this.fakeData;
  }

  getItem(id: number) {
    const offset = id-1;
    return this.fakeData[offset];
  }

  postItem(item: Item) {
    
  }
}
