using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using MyQoutesApp.Models;

namespace MyQoutesApp.api.controllers
{
    [Route("api/[controller]")]
    public class QoutesController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<Qoute> Get()
        {
            return new List<Qoute>
            {
                new Qoute { ID = 1, Content = "Qoute1", Author= "Haris" },
                new Qoute { ID = 2, Content = "Qoute2", Author= "Taimoor" },
                new Qoute { ID = 3, Content = "Qoute3", Author= "Saad" }
            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
