using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Northwind.Web.DTOs
{
    public class ProductListDto
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal? UnitPrice { get; set; }
    }
}
