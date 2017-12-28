using IndividualProject_AttemptFour.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IndividualProject_AttemptFour.vModels
{
    public class ReviewListViewModel
    {
        public ICollection<ReviewViewModel> Reviews { get; set; }
    }
}
