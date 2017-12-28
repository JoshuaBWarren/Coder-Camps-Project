using IndividualProject_AttemptFour.vModels;
using YelpSharp.Data;

namespace IndividualProject_AttemptFour.Services
{
    public interface IYelpService
    {
        ThirdPartyReviewModel Search(string location, string searchString);
    }
}