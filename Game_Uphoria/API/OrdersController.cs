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
    public class OrdersController : ApiController
    {
        private ApplicationDbContext _db = new ApplicationDbContext();

        public IHttpActionResult GetOrders()
        {
            var orders = _db.Order.Include(p => p.Products).Include(c => c.Customers).ToList();
            return Ok(orders);
        }
        private IOrder _repo;
        public OrdersController(IOrder repo)
        {
            this._repo = repo;
        }
        public IEnumerable<Orders> Get()
        {
            var order = _repo.ListOrders();
            return order;
        }
        public IHttpActionResult Post(Orders order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }
            _repo.saveOrder(order);
            return Created("", order);
        }
        public IHttpActionResult Delete(int id)
        {
            _repo.Delete(id);
            return Ok();
        }

        public IHttpActionResult Get(int id)
        {
            var order = _repo.Find(id);
            if(order == null)
            {
                return NotFound();
            }
            return Ok(order);
        }
    }
}
