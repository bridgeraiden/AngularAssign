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
    public class CartControllerr : ControllerBase
    {
        private static List<Product> products = new List<Product>
            {
           
            };

       public CartControllerr()
        {

        }
     
        

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return products;
            
        }
    }
}
