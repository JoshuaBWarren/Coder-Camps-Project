namespace MyApp.Controllers {

    export class HomeController {

    }
 
    //--------------------The Controller that adds the reviews
    export class AddReviewController {
        public newReview;
        public reviews;
        public user;
        public numStars;
        
        public delete(id) {
            this.$modal.open({
                templateUrl: '/ngApp/views/deleteReview.html',
                controller: DeleteReviewController,
                controllerAs: 'modal',
                resolve: {
                    id: () => id
                }

            }).result.then(() => { this.reviews = this.reviewService.listReviews(); })
        }
        //takes the new review and passes it over to the save method in the reviewService.ts
        public save() {
            this.reviewService.save(this.newReview).then(() => {
                this.reviews = this.reviewService.listReviews(); //calls the method, saves the review, and lists it.
               
            });
            //makes the input fields empty when a new review has been posted.
            this.newReview = null;
        }
        public reviewStars() {  //it's really obvious I have no idea what's going on.
            //this.numStars = this.reviews[1].review.stars;
            //console.log("do something");
            
        }
        
       

        

        constructor(
            private reviewService: MyApp.Services.ReviewService,
            private $location: angular.ILocationService,
            private $modal: angular.ui.bootstrap.IModalService
        ) {
            this.reviews = this.reviewService.listReviews();
           // this.reviewStars();

        }

    }

    //--------------------The Controller that edits the reviews
    export class EditReviewController {
        public reviewToEdit;

        public save() {
            this.reviewService.save(this.reviewToEdit).then(() => {
                this.$location.path('/addReview');
            });
        }
        constructor(
            private reviewService: MyApp.Services.ReviewService,
            private $location: angular.ILocationService,
            private $routeParams: ng.route.IRouteParamsService
        ) {
            this.reviewToEdit = reviewService.get($routeParams['id']);
        }
    }

    //--------------------The Controller that deletes the reviews
    export class DeleteReviewController {
        public reviewToEdit;

        public save() {
            this.reviewService.delete(this.reviewToEdit).then(() => {
                this.$modalInstance.close();
            });
        }
        public dismiss() {

            this.$modalInstance.dismiss('dismiss');
        }

        constructor(
            private reviewService: MyApp.Services.ReviewService,
            private $location: angular.ILocationService,
            private $routeParams: ng.route.IRouteParamsService,
            id: number,
            private $modalInstance: angular.ui.bootstrap.IModalServiceInstance
        ) {
            this.reviewToEdit = reviewService.get(id);
        }
    }

    


    //--------------------The Controller that searches for reviews on Yelp an Yellow Pages
    export class SearchReviewController {
        public yelpResults;
        public yelpSearch;
        //public yellowPageResults;
        //public yellowPageSearch;

        public search() {
            this.yelpResults = this.yelpSearchService.yelpSearch(this.yelpSearch.location, this.yelpSearch.search);
            //this.yellowPageResults = this.yellowPageService.yellowPageSearch(this.yellowPageSearch);
        }
       
        constructor(
            private yelpSearchService: MyApp.Services.YelpSearchService,
            //private yellowPageService: MyApp.Services.YellowPagesSearchService,
            private $location: ng.ILocationService
        ) {
            //this.yelpResults = this.yelpSearchService.listYelp();
        }
  

        public markers = [];

        public center = {
        latitude: 37.09024,
        longitude: -100.7128981
    }
        public zoom = 4;

    }



}
