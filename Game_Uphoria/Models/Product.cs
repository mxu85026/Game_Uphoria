using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Game_Uphoria.Models
{
    public class Product
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string ImageUrl { get; set; }

        public int QuantityPerUnit { get; set; }

        public decimal UnitPrice { get; set; }

        public int UnitsInStock { get; set; }

        public int UnitsOnOrder { get; set; }

        public bool Discontinued { get; set; }

        public ICollection<Suppliers> Supplier { get; set; }
    }
}