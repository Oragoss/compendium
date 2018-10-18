using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Compendium.BusinessLogic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Compendium.Controllers
{
    //Base api controller
    [Produces("application/json")]
    [Route("api/CompendiumApi")]
    public class CompendiumApiController : Controller
    {
        CompendiumManager Manager;

        //This should work?
        public CompendiumApiController(CompendiumManager manager)
        {
            Manager = manager;
        }

        public IActionResult Store()
        {
            return Ok();
        }

        public IActionResult Update()
        {
            return Ok();
        }

        public IActionResult Get()
        {
            return Ok();
        }

        public IActionResult Delete()
        {
            return Ok();
        }
    }
}