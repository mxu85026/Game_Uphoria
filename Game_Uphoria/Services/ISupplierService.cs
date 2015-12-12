using System.Collections.Generic;
using Game_Uphoria.Models;

namespace Game_Uphoria.Services
{
    public interface ISupplierService
    {
        void Delete(int id);
        Suppliers Get(int id);
        IList<Suppliers> ListSupplier();
        void SaveSupplier(Suppliers supplier);
    }
}