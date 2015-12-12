using Game_Uphoria.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Game_Uphoria.Services
{
    public class OrderService : IOrderService
    {
        private IGenericRepository _repo;
        public OrderService(IGenericRepository repo)
        {
            _repo = repo;
        }
        public IList<Orders> ListOrders()
        {
            return (from o in _repo.Query<Orders>().Include(p => p.Products).Include(u => u.Users) select o).ToList();
        }

        public Orders Get(int id)
        {
            return _repo.Find<Orders>(id);
        }
        public void SaveOrder(Orders order)
        {
            if (order.Id == 0)
            {
                _repo.Add<Orders>(order);
                _repo.SaveChanges();
            }
            else
            {
                var original = _repo.Find<Orders>(order.Id);
                original.EmployeeId = order.EmployeeId;
                original.OrderDate = order.OrderDate;
                original.ShippedDate = order.ShippedDate;
                original.ShippedVia = order.ShippedVia;
                original.ShipName = order.ShipName;
                original.ShipAddress = order.ShipAddress;
                original.ShipCity = order.ShipCity;
                original.ShipState = order.ShipState;
                original.ShipZip = order.ShipZip;
                _repo.SaveChanges();
            }
        }
        public void Delete(int id)
        {
            _repo.Delete<Orders>(id);
            _repo.SaveChanges();
        }
    }
}
