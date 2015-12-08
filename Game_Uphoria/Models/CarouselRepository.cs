using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Game_Uphoria.Models
{
    public class CarouselRepository
    {
        private ApplicationDbContext _db = new ApplicationDbContext();
        
        public IList<Carousel> ListBanners()
        {
            return _db.Banners.ToList();
        }

        public void SaveBanner(Carousel bannerToSave)
        {
            if(bannerToSave.Id == 0)
            {
                _db.Banners.Add(bannerToSave);
                _db.SaveChanges();
            }
            else
            {
                var original = this.Find(bannerToSave.Id);
                original.Image = bannerToSave.Image;
                original.Text = bannerToSave.Text;
                _db.SaveChanges();
            }
        }
        public Carousel Find(int id)
        {
            return _db.Banners.Find(id);
        }
        public void Delete(int id)
        {
            var banner = this.Find(id);
            _db.Banners.Remove(banner);
            _db.SaveChanges();
        }
    }

}