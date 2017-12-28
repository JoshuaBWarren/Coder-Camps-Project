using IndividualProject_AttemptFour.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IndividualProject_AttemptFour.vModels
{
    public class ReviewViewModel
    {
        public bool CanModify { get; set; }
        public Review Review { get; set; }
        public List<ReviewViewModel> Reviews { get; set; }
    }
}