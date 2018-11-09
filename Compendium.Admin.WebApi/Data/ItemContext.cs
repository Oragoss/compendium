using Compendium.Admin.WebApi.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Compendium.Admin.WebApi.Data
{
    public class ItemContext : DbContext
    {
        public DbSet<Item> Items { get; set; }

        public ItemContext(DbContextOptions<ItemContext> options)
           : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=~/compendium.db");
        }








        //private readonly IMongoDatabase _database;

        //public ItemContext(IOptions<MongoSettings> settings)
        //{
        //    var client = new MongoClient(settings.Value.ConnectionString);
        //    if (client != null)
        //    {
        //        _database = client.GetDatabase(settings.Value.Database);
        //    }
        //}

        //public IMongoCollection<Item> Items
        //{
        //    get
        //    {
        //        return _database.GetCollection<Item>("Item");
        //    }
        //}
    }
}
