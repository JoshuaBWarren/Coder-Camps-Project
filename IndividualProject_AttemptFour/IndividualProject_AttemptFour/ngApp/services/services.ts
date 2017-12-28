namespace MyApp.Services {

    export class ReviewService {
        private ReviewResource;
	
        public searchReviews(searchString) {
            return this.ReviewResource.searchReviews({ searchString: searchString });
        }

        public listReviews() {
            return this.ReviewResource.get(); //ReviewResources allows calls to be made to the Reviews Controller
        } //.query gets a list //.get grabs the object which is what is going back and forth through the view model


        //is called upon by the save method in controller.ts
        public save(review) {
            return this.ReviewResource.save(review).$promise; //returns a promise that will return the review (success or failure)
        }
        

        //returns ones review based on the id
        public get(id: number) {
            return this.ReviewResource.get({ id: id }); //get is getting one review with a certain id
        }

        //same as the save above but removes the review
        public delete(review) {
            return this.ReviewResource.delete({ id: review.id }).$promise;
        }

        constructor($resource: angular.resource.IResourceService) {
            this.ReviewResource = $resource('/api/reviews/:id');  //"reviews" corresponds with the Reviews Controllre        
        }
    }

    angular.module('MyApp').service('reviewService', ReviewService);


    export class YelpSearchService {
        private YelpResource;

       
        public get(id: string) {
            return this.YelpResource.get({ id: id });
        }

        public yelpSearch(location, searchString) {
            return this.YelpResource.get({ location: location, searchString: searchString }); //something is wrong here for my search
        }

        constructor($resource: angular.resource.IResourceService) {
            this.YelpResource = $resource('/api/yelp/');
        }

    }

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

    }


