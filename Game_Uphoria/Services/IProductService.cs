using System.Collections.Generic;
using Game_Uphoria.Models;

namespace Game_Uphoria.Services
{
    public interface IProductService
    {
        void Delete(int id);
        Product Get(int id);
        IList<Product> ListProducts();
        void SaveProduct(Product product);
    }
}