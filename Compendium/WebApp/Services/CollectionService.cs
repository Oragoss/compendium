using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Data;
using WebApp.Interfaces;
using WebApp.Models;

namespace WebApp.Services
{
    public class CollectionService : ICollectionService
    {
        private readonly CompendiumDbContext context;
        public CollectionService(CompendiumDbContext compendiumDbContext)
        {
            context = compendiumDbContext;
        }

        public string GetCollections()
        {
            Collection collection = new Collection();
            collection.Id = 1;
            collection.Description = "Fakey Boy";
            collection.ImagePath = "../../assets/images/book-stack.svg";
            collection.CreationDate = DateTime.Now;
            collection.LastModified = DateTime.Now;

            Collection collection2 = new Collection();
            collection2.Id = 1;
            collection2.Description = "Truthy Boy";
            collection2.ImagePath = "../../assets/images/file-drop.svg";
            collection2.CreationDate = DateTime.Now;
            collection2.LastModified = DateTime.Now;

            Collection collection3 = new Collection();
            collection3.Id = 1;
            collection3.Description = "Not so Truthy Boy";
            collection3.ImagePath = "../../assets/images/notebook.svg";
            collection3.CreationDate = DateTime.Now;
            collection3.LastModified = DateTime.Now;

            Collection[] b = { collection, collection2, collection3 };

            return JsonConvert.SerializeObject(b);
        }

        public string GetCollection(int id)
        {
            Collection collection = new Collection();
            collection.Id = 1;
            collection.Description = "Fakey Boy";
            collection.ImagePath = "../../assets/images/book-stack.svg";
            collection.CreationDate = DateTime.Now;
            collection.LastModified = DateTime.Now;
            
            if (id == 1)
                return JsonConvert.SerializeObject(collection);

            return "";
        }
    }
}
