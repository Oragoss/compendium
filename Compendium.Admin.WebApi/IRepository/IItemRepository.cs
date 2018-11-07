using Compendium.Admin.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Compendium.Admin.WebApi.IRepository
{
    public interface IItemRepository
    {
        Task<IEnumerable<Item>> GetAllItems();
        Task<Item> GetItem(string id);
        Task AddItem(Item item);
        Task<bool> RemoveItem(string id);
        Task<bool> UpdateItem(string id, Item item);
    }
}
