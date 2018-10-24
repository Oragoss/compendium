﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Compendium.Admin.WebApi.Managers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Compendium.Admin.WebApi.Controllers
{
    public class ItemController : ControllerBase
    {
        ItemManager manager = new ItemManager();

        [Route("api/GetItemById/{$id}")]
        public IActionResult GetItemById(Guid id)
        {
            manager.GetItemById(id);

            return Ok();
        }

        [Route("api/GetAllItems/")]
        public IActionResult GetAllItems()
        {
            manager.GetAllItems();

            return Ok();
        }
    }
}