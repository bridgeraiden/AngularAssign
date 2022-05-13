using AngularAssign.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAssign.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CartController : ControllerBase
    {
        private static List<Product> products = new List<Product>
            {
                new Product { Id = 32, Name = "Iphone 23", Price = 1234.32},
                new Product {Id = 33, Name = "Ipad", Price = 854.99},
                new Product {Id = 44, Name = "Apple Watch", Price = 400.43}
            };

       public CartController()
        {

        }

        

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return products;
            
        }
    }
}
