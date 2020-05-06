using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Northwind.Web.DTOs
{
    public abstract class DtoBase<TKey>
    {
        public abstract TKey Id { get; set;  }
    }
}
