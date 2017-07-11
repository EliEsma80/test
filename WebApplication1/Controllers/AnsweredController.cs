using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    public class AnsweredController : ApiController
    {
        private ipadsEntities db = new ipadsEntities();

        [HttpGet]
        [BasicAuthentication]
        public IEnumerable<SpAnsweredQ_Result> Get()
        {
            return db.SpAnsweredQ().AsEnumerable();
        }
    }
}
