using Game_Uphoria.Models;
using Game_Uphoria.Services;
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
        private ISupplierService _service;
        public SuppliersController(ISupplierService service)
        {
            this._service = service;
        }
        public IHttpActionResult Get()
        {
            var supplier = _service.ListSupplier();
            return Ok();
        }
        public IHttpActionResult Post(Suppliers supplier)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }
            _service.SaveSupplier(supplier);
            return Created("", supplier);
        }
        public IHttpActionResult Delete(int id)
        {
            _service.Delete(id);
            return Ok();
        }
        public IHttpActionResult Get(int id)
        {
            var supplier = _service.Get(id);
            if(supplier == null)
            {
                return NotFound();
            }
            return Ok(supplier);
        }
    }
}
