using Compendium.Admin.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Compendium.Admin.WebApi.Interfaces
{
    interface IItemManager
    {
        List<Item> GetAllItems();
        string GetItemById(Guid id);
    }
}
