using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using YelpSharp;
using YelpSharp.Data;
using YelpSharp.Data.Options;

namespace IndividualProject_AttemptFour.Models
{
    public class YelpViewModel
    {
        public string id { get; set; }
        public string name { get; set; }
        public string image_url { get; set; }
        public string snippet_text { get; set; }
        public string url { get; set; }
        public string location { get; set; }
        public int rating { get; set; }
        public string rating_img_url_small { get; set; }
        public int review_count { get; set; }






    }
}
