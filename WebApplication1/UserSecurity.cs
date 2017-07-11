using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;

namespace WebApplication1
{
    public class UserSecurity
    {
        public static bool Login(string username, string password)
        {
           
            using (ipadsEntities db = new ipadsEntities())
            {

                //return db.Users.Any(user =>
                //       user.UserName.Equals(username, StringComparison.OrdinalIgnoreCase)
                //                          && user.KeyNo == password);
               // string encryptedPassword = FormsAuthentication.HashPasswordForStoringInConfigFile(password, "SHA1");
                if ((db.SpAuthen(username, password).Count())>0)
                { return true;
                }
                return false;
            }
        }
    }
}