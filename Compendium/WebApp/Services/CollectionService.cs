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
            var collections = context.Collections
                .OrderBy(b => b.Id);

            return JsonConvert.SerializeObject(collections);
        }

        public string GetCollection(int id)
        {
            Collection collection = new Collection();
            collection.Id = 1;
            collection.Name = "FakeyBoy";
            collection.Description = "Text of some Fakey Boy that I just made up";
            collection.ImagePath = "../../assets/images/book-stack.svg";
            collection.CreationDate = DateTime.Now;
            collection.LastModified = DateTime.Now;

            Collection collection2 = new Collection();
            collection2.Id = 2;
            collection2.Name = "Truthy Boy";
            collection2.Description = "Some Funny Text";
            collection2.ImagePath = "../../assets/images/file-drop.svg";
            collection2.CreationDate = DateTime.Now;
            collection2.LastModified = DateTime.Now;

            if (id == 1)
                return JsonConvert.SerializeObject(collection);

            if (id == 2)
                return JsonConvert.SerializeObject(collection2);

            return "";
        }

        public void StoreCollection(Collection collection)
        {
            //https://docs.microsoft.com/en-us/ef/core/get-started/?tabs=visual-studio
            //throw new NotImplementedException();

            using (context)
            {
                context.Add(collection);
                context.SaveChanges();
            }
        }
    }
}
