using IndividualProject_AttemptFour.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace IndividualProject_AttemptFour.API
{
    public class YelpController : ApiController
    {
        private IYelpService _service; //declaring the service

        public YelpController(IYelpService service)
        {
            this._service = service; //creating an instance of service
        }

        public IHttpActionResult Get(string location, string searchString)
        {
            var service = new YelpService();
            return Ok(service.Search(location, searchString));
        }
    }

    }
