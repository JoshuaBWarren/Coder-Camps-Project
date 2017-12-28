namespace IndividualProject_AttemptFour.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using System.Security.Claims;
    internal sealed class Configuration : DbMigrationsConfiguration<IndividualProject_AttemptFour.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(IndividualProject_AttemptFour.Models.ApplicationDbContext context)
        {
            var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new ApplicationUserManager(userStore);

            //Me!!
            var user = userManager.FindByName("WarrenJB86@live.com");

            if (user == null)
            {
                user = new ApplicationUser
                {
                    UserName = "WarrenJB86@live.com",
                    Email = "WarrenJB86@live.com"
                };

                userManager.Create(user, "Secret123!");

                //claims
                userManager.AddClaim(user.Id, new Claim("IsAdmin", "true"));

                var reviews = new Review[]
                {
                new Review { Name="Batman", Title="I'm Batman", Reviews="I use this site.  Also; i'm better than Superman.", ApplicationUserId=user.Id, Stars=5  },
                new Review { Name="Spider-Man", Title="Hi Jameson!", Reviews="This site is pretty rad!", ApplicationUserId=user.Id, Stars=5  },
                new Review { Name="Thor", Title="You are no match!", Reviews="I, Thor Odinson, pledge my allegience to this site!", ApplicationUserId=user.Id, Stars=5  }
                };


                context.Reviews.AddOrUpdate(rbox => rbox.Name, reviews);
            }
        }
    }
}
