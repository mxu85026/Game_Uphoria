using Game_Uphoria.Models;
using Game_Uphoria.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;

namespace Game_Uphoria.API
{
    public class UserController : ApiController
    {
        //CRUD

        private IApplicationUserService _service;

        public UserController(IApplicationUserService service)
        {
            this._service = service;
        }
        
        public IHttpActionResult Get()
        {
            var users = _service.ListUsers();
            return Ok(users);
        }
        public IHttpActionResult Post(ApplicationUser user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }
            _service.SaveUser(user);
            return Created("", user);
        }
        public IHttpActionResult Delete(string id)
        {
            _service.Delete(id);
            return Ok();
        }
        public IHttpActionResult Get(string id)
        {
            var user = _service.Get(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
    }
}
