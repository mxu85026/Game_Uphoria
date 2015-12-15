namespace Game_Uphoria.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using System.Security.Claims;
    internal sealed class Configuration : DbMigrationsConfiguration<Game_Uphoria.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Game_Uphoria.Models.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            var product = new Product[]
            {
               new Product
               {
                   Name = "Battle for Zendikar booster box",
                   ImageUrl = "http://www.legacycomics.com/cms/wp-content/uploads/2015/08/battle-for-zendikar-booster-box1.png",
                   QuantityPerUnit = 36,
                   UnitPrice = 109.99m,
                   UnitsInStock = 1,
                   UnitsOnOrder = 10,
                   Discontinued = false

               }

    };
            context.Products.AddOrUpdate(p => p.Name, product);

            var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new ApplicationUserManager(userStore);
            var user = userManager.FindByName("admin@gameuphoria.com");

            if(user == null)
            {
                user = new ApplicationUser
                {
                    UserName = "admin@gameuphoria.com",
                    Email = "admin@gameuphoria.com"
                };
                userManager.Create(user, "Secret123!");
                userManager.AddClaim(user.Id, new Claim("IsAdmin", "true"));
            }
        }
    }
}
