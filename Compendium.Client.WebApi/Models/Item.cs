namespace Compendium.Admin.WebApi.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ShortDescription { get; set; }
        public string LongDescription { get; set; }
        public bool IsPublic { get; set; }
    }
}
