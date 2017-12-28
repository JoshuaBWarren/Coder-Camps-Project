using IndividualProject_AttemptFour.Models;
using IndividualProject_AttemptFour.vModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;  //make sure this is up there when using user.Identity
namespace IndividualProject_AttemptFour.Services
{
    public class ReviewService : IReviewService
    {
        private IGenericRepository _repo;

        public ReviewService(IGenericRepository repo)
        {
            _repo = repo; // "_" means private
        }

        public ReviewViewModel ListReviews(ClaimsPrincipal user) //is getting claimsprincipal from the controller where it was passed in
        {

            var reviews = _repo.Query<Review>(); //.Query always gets a list  //_repo.Query searches the database for "Review"
            var userId = user.Identity.GetUserId(); //userId get's the users guid
            var isAdmin = user.HasClaim("IsAdmin", "true"); //checks if the user has the "IsAdmin" claim

            var reviewListViewModel = new ReviewViewModel()
            {
                Reviews = reviews.Select(A => new ReviewViewModel()
                {
                    Review = A,
                    CanModify = A.ApplicationUserId == userId || isAdmin
                }).ToList()
            };

            return reviewListViewModel; //sends it back to the API controller
        }



        public Review Get(int id)
        {
            return _repo.Find<Review>(id);
        }

        //Getting info from the ReviewsController.cs
        public void Save(ClaimsPrincipal user, Review review)
        {
            //get's the current users Id that is making the review
            var userId = user.Identity.GetUserId();
            if (review.Id == 0) //if the review doesn't exist then the code below creates it.         
            {
                review.ApplicationUserId = userId;
                _repo.Add(review); // services reference the Repo
                _repo.SaveChanges();   
            }
            else //if the review already exists then the review is modified
            {
                var original = _repo.Find<Review>(review.Id); //find original review by Id, get's the reviews Id
                original.Stars = review.Stars;
                original.Name = review.Name; //assign the new information over the original
                original.Reviews = review.Reviews; //assign the new information over the original
                _repo.SaveChanges(); //Calls the save method in the repository and saves it to the database
            }
        }

        public void Delete(int id)
        {
            _repo.Delete<Review>(id);
            _repo.SaveChanges();

        }

    }
}

