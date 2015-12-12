using System.Collections.Generic;
using Game_Uphoria.Models;

namespace Game_Uphoria.Services
{
    public interface ICarouselService
    {
        void Delete(int id);
        Carousel Get(int id);
        IList<Carousel> ListBanners();
        void SaveBanner(Carousel banner);
    }
}