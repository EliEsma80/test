using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    public class SumsController : ApiController
    {
        private ipadsEntities db = new ipadsEntities();

        [HttpGet]
        [BasicAuthentication]
       // [Route("api/sums/{MC:alpha}")]
        public IEnumerable<SpSummary_Result> Get(string MC)
        {
            return db.SpSummary(MC).AsEnumerable();
        }
    }
}
