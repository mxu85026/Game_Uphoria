using Game_Uphoria.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Game_Uphoria.Services
{
    public class ProductService : IProductService
    {
        private IGenericRepository _repo;
        public ProductService(IGenericRepository repo)
        {
            _repo = repo;
        }
        public IList<Product> ListProducts()
        {
            return (from p in _repo.Query<Product>().Include(s => s.Supplier) select p).ToList();
        }

        public Product Get(int id)
        {
            return _repo.Find<Product>(id);
        }
        public void SaveProduct(Product product)
        {
            if (product.Id == 0)
            {
                _repo.Add<Product>(product);
                _repo.SaveChanges();
            }
            else
            {
                var original = _repo.Find<Product>(product.Id);
                original.Name = product.Name;
                original.ImageUrl = product.ImageUrl;
                original.UnitPrice = product.UnitPrice;
                original.UnitsInStock = product.UnitsInStock;
                original.QuantityPerUnit = product.QuantityPerUnit;
                original.UnitsOnOrder = product.UnitsOnOrder;
                _repo.SaveChanges();
            }
        }
        public void Delete(int id)
        {
            _repo.Delete<Product>(id);
            _repo.SaveChanges();
        }
    }
}