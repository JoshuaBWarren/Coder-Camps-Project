using IndividualProject_AttemptFour.vModels;
using System.Configuration;
using System.Threading.Tasks;
using YelpSharp;
using YelpSharp.Data;
using System.Linq;
using IndividualProject_AttemptFour.Models;
using YelpSharp.Data.Options;

namespace IndividualProject_AttemptFour.Services
{
    public class YelpService : IYelpService
    {
        private Yelp _yelp;

        public ThirdPartyReviewModel Search(string location, string search)
        {
            
            var x = _yelp.Search (search, location).Result;
            var model = new ThirdPartyReviewModel()
            {   //filters out our results
                YelpReviews = x.businesses.Select(B => new YelpViewModel()
                {
                    id = B.id,
                    name = B.name,
                    image_url = B.image_url,
                    snippet_text = B.snippet_text,
                    

                }).ToList()
            };

            return model;
        }

        public YelpService()
        {

            var options = new Options()
            {
                AccessToken = ConfigurationManager.AppSettings["YELP_ACCESS_TOKEN"],
                AccessTokenSecret = ConfigurationManager.AppSettings["YELP_ACCESS_TOKEN_SECRET"],
                ConsumerKey = ConfigurationManager.AppSettings["YELP_CONSUMER_KEY"],
                ConsumerSecret = ConfigurationManager.AppSettings["YELP_CONSUMER_SECRET"],

            };
            _yelp = new Yelp(options);

        }
    }



}

