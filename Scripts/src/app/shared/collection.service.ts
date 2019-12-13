import { Injectable } from '@angular/core';
import { Collection } from '../models/collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  fakeData: Collection[] = [
    {
      Id: 1,
      Name: 'Sonic',
      Description: 'Some Quick Example Text.',
      ImagePath: '../../assets/images/book-stack.svg'
    },
    {
      Id: 2,
      Name: 'Archer',
      Description: 'Some MORE Quick Example Text.',
      ImagePath: '../../assets/images/file-drop.svg'
    },
    {
      Id: 3,
      Name: 'Jake From Adventure Time',
      Description: 'Some MORE Quick Example Text.',
      ImagePath: '../../assets/images/notebook.svg'
    }
  ];

  getCollections() {
    return this.fakeData;
  }

  getCollection(id: number) {
    const offset = id-1;
    return this.fakeData[offset];
  }
}
