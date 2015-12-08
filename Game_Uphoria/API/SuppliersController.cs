using Game_Uphoria.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Game_Uphoria.API
{
    public class SuppliersController : ApiController
    {
        private ISupplier _repo;
        public SuppliersController(ISupplier repo)
        {
            this._repo = repo;
        }
        public IEnumerable<Suppliers> Get()
        {
            var supplier = _repo.ListSupplier();
            return supplier;
        }
        public IHttpActionResult Post(Suppliers supplier)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }
            _repo.SaveSupplier(supplier);
            return Created("", supplier);
        }
        public IHttpActionResult Delete(int id)
        {
            _repo.Delete(id);
            return Ok();
        }
        public IHttpActionResult Get(int id)
        {
            var supplier = _repo.Find(id);
            if(supplier == null)
            {
                return NotFound();
            }
            return Ok(supplier);
        }
    }
}
