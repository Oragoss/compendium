using System;

namespace Compendium.Admin.WebApi.Models
{
    public class MetaData
    {
        public int Id { get; set; }
        public string Tag { get; set; }
        public string Description { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
    }
}
