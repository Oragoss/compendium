using System;
using System.Threading.Tasks;
using MongoDB;
using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;

namespace Compendium.Admin.WebApi.Data
{
    public class MongoConnectSettings
    {
        public async Task Connect()
        {
            var connectionString = "mongodb://localhost[:27017][/[Compendium]]";

            var client = new MongoClient(connectionString);
        }
    }
}
