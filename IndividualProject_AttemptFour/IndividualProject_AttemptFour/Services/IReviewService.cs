using System.Security.Claims;
using IndividualProject_AttemptFour.Models;
using IndividualProject_AttemptFour.vModels;

namespace IndividualProject_AttemptFour.Services
{
    public interface IReviewService
    {
        void Delete(int id);
        Review Get(int id);
        ReviewViewModel ListReviews(ClaimsPrincipal user);
        void Save(ClaimsPrincipal user, Review review);
    }
}