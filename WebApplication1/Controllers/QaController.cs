using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    public class QaController : ApiController
    {
        private ipadsEntities db = new ipadsEntities();

        [HttpGet]
        [BasicAuthentication]
        public IEnumerable<SpAllQandA_Result> Get()
        {
           return db.SpAllQandA().AsEnumerable();
        }
    }
}
