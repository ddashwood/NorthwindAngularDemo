using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Northwind.Web.DTOs;

namespace Northwind.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public abstract class PagedControllerBase<TDto> : ControllerBase
    {
        protected abstract IQueryable<TDto> GetData();

        protected virtual int DefaultPageSize => 10;

        [HttpGet]
        public async Task<PagedResults<TDto>> Get([FromQuery]int? page, [FromQuery]int? pageSize)
        {
            int realPage = page ?? 1;
            int realPageSize = pageSize ?? DefaultPageSize;

            var data = await GetData().Skip((realPage - 1) * realPageSize).Take(realPageSize).ToListAsync();
            var count = await GetData().CountAsync();

            // Adjustments because our pages start at 1, but the maths only works
            // if we start at 0
            var maxAdjustedPage = (count - 1) / realPageSize;
            var maxPage = maxAdjustedPage + 1;

            var results = new PagedResults<TDto>
            {
                PageNumber = realPage,
                PageSize = realPageSize,
                MaxPage =  maxPage,
                Data = data
            };

            return results;
        }
    }
}