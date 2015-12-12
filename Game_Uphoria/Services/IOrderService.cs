using System.Collections.Generic;
using Game_Uphoria.Models;

namespace Game_Uphoria.Services
{
    public interface IOrderService
    {
        void Delete(int id);
        Orders Get(int id);
        IList<Orders> ListOrders();
        void SaveOrder(Orders order);
    }
}