using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Compendium.Admin.WebApi.Controllers
{
    [Produces("application/json")]
    //[Route("api/MetaData")]
    public class MetaDataController : Controller
    {
        public ActionResult GetMetaData()
        {

            return Ok();
        }
    }
}