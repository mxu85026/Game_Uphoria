using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Game_Uphoria.Models
{
    public class ProductRepository : IProduct
    {
        private ApplicationDbContext _db = new ApplicationDbContext();

        public IList<Product> ListProduct()
        {
            return _db.Products.ToList();
        }

        public void SaveProduct(Product productToSave)
        {
            if(productToSave.Id == 0)
            {
                _db.Products.Add(productToSave);
                _db.SaveChanges();
            }
            else
            {
                var original = this.Find(productToSave.Id);
                original.Name = productToSave.Name;
                original.UnitPrice = productToSave.UnitPrice;
                original.UnitsInStock = productToSave.UnitsInStock;
                original.QuantityPerUnit = productToSave.QuantityPerUnit;
                original.UnitsOnOrder = productToSave.UnitsOnOrder;
                _db.SaveChanges();
            }
        }
        public Product Find(int id)
        {
            return _db.Products.Find(id);
        }
        public void Delete(int id)
        {
            var product = this.Find(id);
            _db.Products.Remove(product);
            _db.SaveChanges();
        }
    }
}