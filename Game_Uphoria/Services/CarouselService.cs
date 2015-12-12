using Game_Uphoria.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace Game_Uphoria.Services
{
    public class CarouselService : ICarouselService
    {
        private IGenericRepository _repo;
        public CarouselService(IGenericRepository repo)
        {
            _repo = repo;
        }
        public IList<Carousel> ListSupplier()
        {
            return (from b in _repo.Query<Carousel>() select b).ToList();
        }

        public Carousel Get(int id)
        {
            return _repo.Find<Carousel>(id);
        }
        public void SaveSupplier(Carousel banner)
        {
            if (banner.Id == 0)
            {
                _repo.Add<Carousel>(banner);
                _repo.SaveChanges();
            }
            else
            {
                var original = _repo.Find<Carousel>(banner.Id);
                original.Image = banner.Image;
                original.Text = banner.Text;
                _repo.SaveChanges();
            }
          
        }
        public void Delete(int id)
        {
            _repo.Delete<Carousel>(id);
            _repo.SaveChanges();
        }

        public IList<Carousel> ListBanners()
        {
            throw new NotImplementedException();
        }

        public void SaveBanner(Carousel banner)
        {
            throw new NotImplementedException();
        }
    }
}