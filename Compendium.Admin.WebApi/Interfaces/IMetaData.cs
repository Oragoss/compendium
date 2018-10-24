using Compendium.Admin.WebApi.Models;
using System.Collections.Generic;

namespace Compendium.Admin.WebApi.Interfaces
{
    interface IMetaData
    {
        List<MetaData> GetMetaDataById();
    }
}
