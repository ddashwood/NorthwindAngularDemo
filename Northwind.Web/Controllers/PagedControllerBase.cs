using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Northwind.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public abstract class PagedControllerBase<TDto> : ControllerBase
    {
        protected abstract IQueryable<TDto> GetData();

        protected virtual int DefaultPageSize => 10;

        [HttpGet]
        public async Task<IEnumerable<TDto>> Get([FromQuery]int? page, [FromQuery]int? pageSize)
        {
            int realPageSize = pageSize ?? DefaultPageSize;
            int realPage = page ?? 1;

            return await GetData().Skip((realPage - 1) * realPageSize).Take(realPageSize).ToListAsync();
        }
    }
}