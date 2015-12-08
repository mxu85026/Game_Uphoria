using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Game_Uphoria.Models
{
    public class OrdersRepository : IOrder
    {
        private ApplicationDbContext _db= new ApplicationDbContext();

        public IList<Orders> ListOrders()
        {
            return _db.Order.ToList();
        }

        public void saveOrder(Orders orderToSave)
        {
            if(orderToSave.Id == 0)
            {
                _db.Order.Add(orderToSave);
                _db.SaveChanges();
            }
            else
            {
                var original = this.Find(orderToSave.Id);
                original.EmployeeId = orderToSave.EmployeeId;
                original.OrderDate = orderToSave.OrderDate;
                original.ShippedDate = orderToSave.ShippedDate;
                original.ShippedVia = orderToSave.ShippedVia;
                original.ShipName = orderToSave.ShipName;
                original.ShipAddress = orderToSave.ShipAddress;
                original.ShipCity = orderToSave.ShipCity;
                original.ShipState = orderToSave.ShipState;
                original.ShipZip = orderToSave.ShipZip;
                _db.SaveChanges();
            }
        }
        public Orders Find(int id)
        {
            return _db.Order.Find(id);
        }
        public void Delete(int id)
        {
            var order = this.Find(id);
            _db.Order.Remove(order);
            _db.SaveChanges();
        }
    }
}