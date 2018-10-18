using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Compendium.Models
{
    public class MetaData
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime CreatedBy { get; set; }
        public string PictureUrl { get; set; }

    }
}
