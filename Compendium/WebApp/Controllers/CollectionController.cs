using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApp.Interfaces;
using WebApp.Services;

namespace WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
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
    }
}