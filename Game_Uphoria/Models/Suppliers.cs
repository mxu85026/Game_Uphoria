using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Game_Uphoria.Models
{
    public class Suppliers
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public int ZipCode { get; set; }

        public string PhoneNumber { get; set; }

        public string FaxNumber { get; set; }

        public string Email { get; set; }

        public bool Active { get; set; }
    }
}