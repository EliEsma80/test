using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;

namespace WebApplication1.Controllers
{
    public class InsertController : ApiController
    {
        private ipadsEntities db = new ipadsEntities();

        [HttpGet]
        [BasicAuthentication]
        public IEnumerable<string> insertIc(short iPadId, string Name)
        {
            return db.SpInsertIC(iPadId, Name).AsEnumerable();
        }

        [HttpGet]
        [BasicAuthentication]
        public HttpResponseMessage insertQA(string Question)
        {

            MailMessage mail = new MailMessage();
            mail.To.Add("kyoon@appcogroup.com.au");
            // mail.To.Add("aesmailzadeh@appcogroup.com.au");
            mail.From = new MailAddress("admin@appcoonline.com");
            mail.Subject = "Hey Kyle, You have a new question in iPad portal!";

            SmtpClient client = new SmtpClient();
            client.Credentials = new System.Net.NetworkCredential("admin@appcoonline.com", "A$$c0Web");
            client.Port = 26;
            client.Host = "planet.studiocoast.com.au";
            client.Send(mail);

            db.SpInsertQandA(Question);
            return Request.CreateResponse(HttpStatusCode.OK);

        }

        [HttpGet]
        [BasicAuthentication]
        public HttpResponseMessage updateQA(int Id, string Answer)
        {
            db.SpUpdateQandA(Id, Answer);
            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}
