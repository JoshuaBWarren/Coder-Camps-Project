using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IndividualProject_AttemptFour.Models
{
    public class Review
    {

        public int Id { get; set; }
        public string ApplicationUserId { get; set; }
        public string Title { get; set; }

        [Required(ErrorMessage = "You didn't type your name!")]
        public string Name { get; set; }

        [Required(ErrorMessage = "You didn't type anything!")]
        [MaxLength( 2000, ErrorMessage = "Review is too long.")]
        public string Reviews { get; set; }  //This will probably be an error because it says "Reviews"

        public int Stars { get; set; }
       

    }
}