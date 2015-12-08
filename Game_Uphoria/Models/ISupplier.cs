using System.Collections.Generic;

namespace Game_Uphoria.Models
{
    public interface ISupplier
    {
        void Delete(int id);
        Suppliers Find(int id);
        IList<Suppliers> ListSupplier();
        void SaveSupplier(Suppliers supplierToSave);
    }
}