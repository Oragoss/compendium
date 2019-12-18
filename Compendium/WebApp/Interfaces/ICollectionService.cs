using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Models;

namespace WebApp.Interfaces
{
    public interface ICollectionService
    {
        string GetCollections();
        string GetCollection(int id);
        void StoreCollection(Collection collection);
    }
}
