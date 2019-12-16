using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Interfaces
{
    public interface ICollectionService
    {
        string GetCollections();
        string GetCollection(int id);
    }
}
