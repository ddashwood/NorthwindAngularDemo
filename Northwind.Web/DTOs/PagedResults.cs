using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Northwind.Web.DTOs
{
    public class PagedResults<TDto>
    {
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public int MaxPage { get; set; }

        public IEnumerable<TDto> Data { get; set; }
    }
}
