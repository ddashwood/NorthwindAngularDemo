using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Northwind.Models;
using Northwind.Web.DTOs;

namespace Northwind.Web.Controllers
{
    public class ProductController : PagedControllerBase<ProductListDto>
    {
        private readonly NorthwindContext context;

        public ProductController(NorthwindContext context)
        {
            this.context = context;
        }

        protected override IQueryable<ProductListDto> GetData()
        {
            return context.Products.Select(p => new ProductListDto
            {
                ProductId = p.ProductId,
                ProductName = p.ProductName,
                UnitPrice = p.UnitPrice
            });
        }
    }
}