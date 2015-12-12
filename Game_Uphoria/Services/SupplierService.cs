using Game_Uphoria.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Game_Uphoria.Services
{
    public class SupplierService : ISupplierService
    {
        private IGenericRepository _repo;
        public SupplierService(IGenericRepository repo)
        {
            _repo = repo;
        }
        public IList<Suppliers> ListBanners()
        {
            return (from s in _repo.Query<Suppliers>() select s).ToList();
        }

        public Suppliers Get(int id)
        {
            return _repo.Find<Suppliers>(id);
        }
        public void SaveBanner(Suppliers supplier)
        {
            if (supplier.Id == 0)
            {
                _repo.Add<Suppliers>(supplier);
                _repo.SaveChanges();
            }
            else
            {
                var original = _repo.Find<Suppliers>(supplier.Id);
                original.Name = supplier.Name;
                original.Address = supplier.Address;
                original.City = supplier.City;
                original.State = supplier.State;
                original.ZipCode = supplier.ZipCode;
                original.PhoneNumber = supplier.PhoneNumber;
                original.FaxNumber = supplier.FaxNumber;
                original.Email = supplier.Email;
                original.Active = supplier.Active;
                _repo.SaveChanges();
            }

        }
        public void Delete(int id)
        {
            _repo.Delete<Suppliers>(id);
            _repo.SaveChanges();
        }

        public IList<Suppliers> ListSupplier()
        {
            throw new NotImplementedException();
        }

        public void SaveSupplier(Suppliers supplier)
        {
            throw new NotImplementedException();
        }
    }
}