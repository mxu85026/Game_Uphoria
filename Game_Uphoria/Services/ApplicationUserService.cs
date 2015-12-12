using Game_Uphoria.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Game_Uphoria.Services
{
    public class ApplicationUserService : IApplicationUserService
    {
        private IGenericRepository _repo;
        public ApplicationUserService(IGenericRepository repo)
        {
            _repo = repo;
        }
        public IList<ApplicationUser> ListUsers()
        {
            return (from a in _repo.Query<ApplicationUser>() select a).ToList();
        }

        public ApplicationUser Get(string id)
        {
            return _repo.Find<ApplicationUser>(id);
        }
        public void SaveUser(ApplicationUser user)
        {
            var isExist = new ApplicationUser().Id != null;
            if(!isExist)
            {
                _repo.Add<ApplicationUser>(user);
                _repo.SaveChanges();
            }
            else
            {
                var original = _repo.Find<ApplicationUser>(user.Id);
                original.FirstName = user.FirstName;
                original.LastName = user.LastName;
                original.Address = user.Address;
                original.City = user.City;
                original.State = user.State;
                original.ZipCode = user.ZipCode;
                original.PhoneNumber = user.PhoneNumber;
                original.Email = user.Email;
                _repo.SaveChanges();
            }
        }
        public void Delete(string id)
        {
            _repo.Delete<ApplicationUser>(id);
            _repo.SaveChanges();
        }
    }
}


