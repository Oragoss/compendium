using System;
using System.Collections.Generic;
using System.Text;

namespace CompendiumData.Models
{
    public class Item
    {
        /**
         * Id: number;
    CollectionId: number;
    Name: string;
    Description: string;
    ImagePath: string;
    CreatedOn: Date
         */
        public int Id { get; set; }
        public int CollectionId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime LastModified { get; set; }
    }
}
