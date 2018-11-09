using Compendium.Admin.WebApi.Models;
using Compendium.Admin.WebApi.Data;
using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Compendium.Admin.WebApi.Managers
{
    public class ItemManager
    {
        Item _item;

        ItemManager(Item item)
        {
            _item = item;
        }

        public List<Item> GetAllItems()
        {
            throw new NotImplementedException();
        }

        public string GetItemById(Guid id)
        {
            var item = new Item();
            item.Id = 12345;
            item.Title = "Book of some kind";
            item.Description = "Short description";
            item.IsPublic = true;

            //var thing = from Item

            return JsonConvert.SerializeObject(item);
        }
    }
}
