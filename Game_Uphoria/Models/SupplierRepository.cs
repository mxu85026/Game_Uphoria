using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Game_Uphoria.Models
{
    public class SupplierRepository : ISupplier
    {
        private ApplicationDbContext _db = new ApplicationDbContext();

        public IList<Suppliers> ListSupplier()
        {
            return _db.Supplier.ToList();
        }
        public void SaveSupplier(Suppliers supplierToSave)
        {
            if(supplierToSave.Id == 0)
            {
                _db.Supplier.Add(supplierToSave);
                _db.SaveChanges();
            }
            else
            {
                var original = this.Find(supplierToSave.Id);
                original.Name = supplierToSave.Name;
                original.Address = supplierToSave.Address;
                original.City = supplierToSave.City;
                original.State = supplierToSave.State;
                original.ZipCode = supplierToSave.ZipCode;
                original.PhoneNumber = supplierToSave.PhoneNumber;
                original.FaxNumber = supplierToSave.FaxNumber;
                original.Email = supplierToSave.Email;
                original.Active = supplierToSave.Active;
                _db.SaveChanges();
            }
        }

        public Suppliers Find(int id)
        {
            return _db.Supplier.Find(id);
        }
        public void Delete(int id)
        {
            var supplier = this.Find(id);
            _db.Supplier.Remove(supplier);
            _db.SaveChanges();
        }
    }
}