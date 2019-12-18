using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApp.Interfaces;
using WebApp.Services;

namespace WebApp.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class CollectionController : ControllerBase
    {
        private readonly ILogger<CollectionController> _logger;
        ICollectionService collectionService;

        public CollectionController(ILogger<CollectionController> logger, ICollectionService collectionService)
        {
            _logger = logger;
            this.collectionService = collectionService;
        }

        [HttpGet]
        public string GetCollections()
        {
            return collectionService.GetCollections();
        }

        [HttpGet("{id}")]
        public string GetCollection(int id)        
        {
            return collectionService.GetCollection(id);
        }

        [HttpPost]
        public IActionResult PostName()
        {
            return Ok();
        }

        //[Route("PostCollection/{collection}")]
        //[HttpPost("{Collection}")]
        public IActionResult PostCollection(Collection collection)
        {
            try
            {
                collectionService.StoreCollection(collection);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError($"An error occured while trying to store a new Collection: {ex}");
                return BadRequest("Error Occurred");
            }
        }
    }
}