using System.Collections.Generic;
using Game_Uphoria.Models;

namespace Game_Uphoria.Services
{
    public interface IApplicationUserService
    {
        void Delete(string id);
        ApplicationUser Get(string id);
        IList<ApplicationUser> ListUsers();
        void SaveUser(ApplicationUser user);
    }
}