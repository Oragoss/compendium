using Microsoft.AspNetCore.Mvc;
using Compendium.Admin.WebApi.Managers;

namespace Compendium.Admin.WebApi.Controllers
{
    public class MetaDataController : ControllerBase
    {
        MetaDataManager metaData = new MetaDataManager();

        [Route("api/GetMetaData/{$id}")]
        public IActionResult GetMetaData()
        {

            return Ok();
        }
    }
}