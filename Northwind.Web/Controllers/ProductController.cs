using System.Linq;
using Microsoft.EntityFrameworkCore;
using Northwind.Models;
using Northwind.Web.DTOs;

namespace Northwind.Web.Controllers
{
    public class ProductController : PagedControllerBase<ProductDto, int>
    {
        private readonly NorthwindContext context;

        public ProductController(NorthwindContext context)
        {
            this.context = context;
        }

        protected override IQueryable<ProductDto> GetData()
        {
            return context.Products.Include(p => p.Supplier)
                                   .Include(p => p.Category)
                                   .Select(p => new ProductDto
            {
                Id = p.ProductId,
                ProductName = p.ProductName,
                SupplierId = p.SupplierId,
                SupplierName = p.Supplier.CompanyName,
                CategoryId = p.CategoryId,
                CategoryName = p.Category.CategoryName,
                QuantityPerUnit = p.QuantityPerUnit,
                UnitPrice = p.UnitPrice,
                UnitsInStock = p.UnitsInStock,
                UnitsOnOrder = p.UnitsOnOrder,
                ReorderLevel = p.ReorderLevel,
                Discontinued = p.Discontinued
            });
        }
    }
}