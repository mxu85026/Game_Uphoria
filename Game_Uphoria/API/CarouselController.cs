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
    public class CarouselController : ApiController
    {
        private ICarouselService _service;

        public CarouselController(ICarouselService service)
        {
            this._service = service;
        }

        public IHttpActionResult Get()
        {
            var banner = _service.ListBanners();
            return Ok();
        }

        public IHttpActionResult Get(int id)
        {
            var banner = _service.Get(id);
            if(banner == null)
            {
                return NotFound();
            }
            return Ok(banner);
        }

        public IHttpActionResult Post(Carousel banner)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }

            _service.SaveBanner(banner);
            return Created("", banner);
        }

        public IHttpActionResult Delete(int id)
        {
            _service.Delete(id);
            return Ok();
        }
    }
}
