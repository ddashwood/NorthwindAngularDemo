using System.Linq;
using Microsoft.EntityFrameworkCore;
using Northwind.Models;
using Northwind.Web.DTOs;

namespace Northwind.Web.Controllers
{
    public class CustomerController : PagedControllerBase<CustomerDto, string>
    {
        private readonly NorthwindContext context;

        public CustomerController(NorthwindContext context)
        {
            this.context = context;
        }

        protected override IQueryable<CustomerDto> GetData()
        {
            return context.Customers.Select(c => new CustomerDto
            {
                Id = c.CustomerId,
                CompanyName = c.CompanyName,
                ContactName = c.ContactName,
                ContactTitle = c.ContactTitle,
                Address = c.Address,
                City = c.City,
                Region = c.Region,
                PostalCode = c.PostalCode,
                Country = c.Country,
                Phone = c.Phone,
                Fax = c.Fax
            });
        }
    }
}