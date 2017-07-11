using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    public class UsersController : ApiController
    {
        private ipadsEntities db = new ipadsEntities();

        [HttpGet]
        [BasicAuthentication]
        //  [Route("api/users/{Username}/{Password}")]
        public IEnumerable<SpAuthen_Result> Get(string Username, string Password)
        {

            if (Username == null)
                Username = "";

            if (Password == null)
                Password = "";

           
            return db.SpAuthen(Username, Password).AsEnumerable();
        }

      
    }
}
