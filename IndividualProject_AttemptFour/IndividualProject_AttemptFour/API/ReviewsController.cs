using IndividualProject_AttemptFour.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Security.Claims;
using Microsoft.AspNet.Identity;
using IndividualProject_AttemptFour.vModels;
using IndividualProject_AttemptFour.Services;

namespace IndividualProject_AttemptFour.API
{
    public class ReviewsController : ApiController
    {
        private IReviewService _service;

        public ReviewsController(IReviewService service)
        {
            this._service = service;
        }

        public IHttpActionResult Get()
        {
            var reviews = _service.ListReviews((ClaimsPrincipal)this.User);
            return Ok(reviews);
        }

        public IHttpActionResult Get(int id)
        {
            var review = _service.Get(id);
            if (review == null)
            {
                return NotFound();
            }
            return Ok(review);
        }

        [Authorize]
        public IHttpActionResult Post(Review review) //corresponds to the .save method in services.ts
        {


            if (!ModelState.IsValid)//checks to the server side validation
            {
                return BadRequest(this.ModelState); //returns the exception ----ModelState is where the exceptions are stored
            }

           _service.Save((ClaimsPrincipal)this.User, review); //the second parameter corresponds to the review in the Post();
            // calling the save method

            return Created("/reviews/" + review.Id, review);
        }

        public IHttpActionResult Delete(int id)
        {
            _service.Delete(id);
            return Ok();


        }



    }
}