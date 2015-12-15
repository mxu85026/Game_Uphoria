using Game_Uphoria.Models;
using Game_Uphoria.Services;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Game_Uphoria.API
{
    public class ProductsController : ApiController
    {
        private IProductService _service;
        public ProductsController(IProductService service)
        {
            this._service = service;
        }
        public IHttpActionResult Get()
        {
            var product = _service.ListProducts();
            return Ok(product);
        }
        public IHttpActionResult Post(Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }
            _service.SaveProduct(product);
            return Created("", product);
        }
        public IHttpActionResult Delete(int id)
        {
            _service.Delete(id);
            return Ok();
        }
        public IHttpActionResult Get(int id)
        {
            var product = _service.Get(id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }
    }
}
