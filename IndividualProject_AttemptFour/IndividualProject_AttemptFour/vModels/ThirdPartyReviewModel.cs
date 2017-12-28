using IndividualProject_AttemptFour.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IndividualProject_AttemptFour.vModels
{
    public class ThirdPartyReviewModel
    {
        public ICollection<YelpViewModel> YelpReviews { get; set; }

    }
}
