var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var ReviewService = (function () {
            function ReviewService($resource) {
                this.ReviewResource = $resource('/api/reviews/:id'); //"reviews" corresponds with the Reviews Controllre        
            }
            ReviewService.prototype.searchReviews = function (searchString) {
                return this.ReviewResource.searchReviews({ searchString: searchString });
            };
            ReviewService.prototype.listReviews = function () {
                return this.ReviewResource.get(); //ReviewResources allows calls to be made to the Reviews Controller
            }; //.query gets a list //.get grabs the object which is what is going back and forth through the view model
            //is called upon by the save method in controller.ts
            ReviewService.prototype.save = function (review) {
                return this.ReviewResource.save(review).$promise; //returns a promise that will return the review (success or failure)
            };
            //returns ones review based on the id
            ReviewService.prototype.get = function (id) {
                return this.ReviewResource.get({ id: id }); //get is getting one review with a certain id
            };
            //same as the save above but removes the review
            ReviewService.prototype.delete = function (review) {
                return this.ReviewResource.delete({ id: review.id }).$promise;
            };
            return ReviewService;
        }());
        Services.ReviewService = ReviewService;
        angular.module('MyApp').service('reviewService', ReviewService);
        var YelpSearchService = (function () {
            function YelpSearchService($resource) {
                this.YelpResource = $resource('/api/yelp/');
            }
            YelpSearchService.prototype.get = function (id) {
                return this.YelpResource.get({ id: id });
            };
            YelpSearchService.prototype.yelpSearch = function (location, searchString) {
                return this.YelpResource.get({ location: location, searchString: searchString }); //something is wrong here for my search
            };
            return YelpSearchService;
        }());
        Services.YelpSearchService = YelpSearchService;
        angular.module('MyApp').service('yelpSearchService', YelpSearchService);
        //export class YellowPagesSearchService {
        //    private YellowPageResource;
        //    public get(id: string) {
        //        return this.YellowPageResource.get({ id: id });
        //    }
        //    public yellowPageSearch(searchString) {
        //        return this.YellowPageResource.get({ searchString: searchString }); 
        //    }
        //    constructor($resource: angular.resource.IResourceService) {
        //        this.YellowPageResource = $resource('/api/yellowpages/');
        //    }
        //}
        //angular.module('MyApp').service('yellowPagesSearchService', YellowPagesSearchService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=services.js.map