export class Item {
    Id: number;
    CollectionId: number;
    Name: string;
    Description: string;
    ImagePath: string;
    CreationDate: Date

    constructor() {
        this.Id = 1;
        this.CollectionId = 1;
        this.Name = '';
        this.Description = '';
        this.ImagePath = '';
        this.CreationDate = new Date();
    }
}