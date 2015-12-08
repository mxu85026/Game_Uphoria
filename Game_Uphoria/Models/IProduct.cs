using System.Collections.Generic;

namespace Game_Uphoria.Models
{
    public interface IProduct
    {
        void Delete(int id);
        Product Find(int id);
        IList<Product> ListProduct();
        void SaveProduct(Product productToSave);
    }
}