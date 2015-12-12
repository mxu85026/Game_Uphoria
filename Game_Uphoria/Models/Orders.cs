using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Game_Uphoria.Models
{
    public class Orders
    {
        public int Id { get; set; }

        public string EmployeeId { get; set; }

        public string OrderDate { get; set; }

        public string ShippedDate { get; set; }

        public string ShippedVia { get; set; }

        public string ShipName { get; set; }

        public string ShipAddress { get; set; }

        public string ShipCity { get; set; }

        public string ShipState { get; set; }

        public string ShipZip { get; set; }

        public ICollection<Product> Products { get; set; }
        public ICollection<ApplicationUser> Users { get; set; }
    }
}