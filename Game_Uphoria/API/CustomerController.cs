using Game_Uphoria.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Game_Uphoria.API
{
    public class CustomerController : ApiController
    {
        private ICustomer _repo;
        public CustomerController(ICustomer repo)
        {
            this._repo = repo;
        }
        public IEnumerable<Customer> Get()
        {
            var customer = _repo.ListCustomer();
            return customer;
        }
        public IHttpActionResult Post(Customer customer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }
            _repo.SaveCustomer(customer);
            return Created("", customer);
        }
        public IHttpActionResult Delete(int id)
        {
            _repo.Delete(id);
            return Ok();
        }
        public IHttpActionResult Get(int id)
        {
            var customer = _repo.Find(id);
            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }
    }
}
