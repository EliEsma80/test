using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    public class InfosController : ApiController
    {
        private ipadsEntities db = new ipadsEntities();

        [HttpGet]
        [BasicAuthentication]
      //  [Route("api/infos/{MC:alpha}")]
        public IEnumerable<SpReportSearch_Result> Get(string MC)
        {
            return db.SpReportSearch(MC).AsEnumerable();
        }
    }
}
