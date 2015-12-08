using System.Collections.Generic;

namespace Game_Uphoria.Models
{
    public interface IOrder
    {
        void Delete(int id);
        Orders Find(int id);
        IList<Orders> ListOrders();
        void saveOrder(Orders orderToSave);
    }
}