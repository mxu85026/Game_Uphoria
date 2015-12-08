using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Game_Uphoria.Models
{
    public class CustomerRepository : ICustomer
    {
        private ApplicationDbContext _db = new ApplicationDbContext();

        public IList<Customer> ListCustomer()
        {
            return _db.Customer.ToList();
        }

        public void SaveCustomer(Customer customerToSave)
        {
            if(customerToSave.Id == 0)
            {
                _db.Customer.Add(customerToSave);
                _db.SaveChanges();
            }
            else
            {
                var original = this.Find(customerToSave.Id);
                original.Name = customerToSave.Name;
                original.Address = customerToSave.Address;
                original.City = customerToSave.City;
                original.State = customerToSave.State;
                original.ZipCode = customerToSave.ZipCode;
                original.PhoneNumber = customerToSave.PhoneNumber;
                original.Email = customerToSave.Email;
                _db.SaveChanges();
            }
        }
        public Customer Find(int id)
        {
            return _db.Customer.Find(id);
        }
        public void Delete(int id)
        {
            var customer = this.Find(id);
            _db.Customer.Remove(customer);
            _db.SaveChanges();
        }
    }
}