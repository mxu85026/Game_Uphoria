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
    public class OrdersController : ApiController
    {

        private IOrderService _service;
        public OrdersController(IOrderService service)
        {
            this._service = service;
        }
        public IHttpActionResult Get()
        {
            var supplier = _service.ListOrders();
            return Ok();
        }
        public IHttpActionResult Post(Orders order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }
            _service.SaveOrder(order);
            return Created("", order);
        }
        public IHttpActionResult Delete(int id)
        {
            _service.Delete(id);
            return Ok();
        }
        public IHttpActionResult Get(int id)
        {
            var order = _service.Get(id);
            if (order == null)
            {
                return NotFound();
            }
            return Ok(order);
        }
    }
}
