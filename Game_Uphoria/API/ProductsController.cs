using Game_Uphoria.Models;
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
        private ApplicationDbContext _db = new ApplicationDbContext();

        public IHttpActionResult GetProducts()
        {
            var products = _db.Products.Include(s => s.Supplier).ToList();
            return Ok(products);
        }

        private IProduct _repo;
        public ProductsController(IProduct repo)
        {
            this._repo = repo;
        }
        public IEnumerable<Product> Get()
        {
            var product = _repo.ListProduct();
            return product;
        }
        public IHttpActionResult Post(Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }
            _repo.SaveProduct(product);
            return Created("", product);
        }
        public IHttpActionResult Delete(int id)
        {
            _repo.Delete(id);
            return Ok();
        }
        public IHttpActionResult Get(int id)
        {
            var product = _repo.Find(id);
            if(product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }
    }
}
