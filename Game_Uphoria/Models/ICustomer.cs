using System.Collections.Generic;

namespace Game_Uphoria.Models
{
    public interface ICustomer
    {
        void Delete(int id);
        Customer Find(int id);
        IList<Customer> ListCustomer();
        void SaveCustomer(Customer customerToSave);
    }
}