var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        //--------------------The Controller that adds the reviews
        var AddReviewController = (function () {
            function AddReviewController(reviewService, $location, $modal) {
                this.reviewService = reviewService;
                this.$location = $location;
                this.$modal = $modal;
                this.reviews = this.reviewService.listReviews();
                // this.reviewStars();
            }
            AddReviewController.prototype.delete = function (id) {
                var _this = this;
                this.$modal.open({
                    templateUrl: '/ngApp/views/deleteReview.html',
                    controller: DeleteReviewController,
                    controllerAs: 'modal',
                    resolve: {
                        id: function () { return id; }
                    }
                }).result.then(function () { _this.reviews = _this.reviewService.listReviews(); });
            };
            //takes the new review and passes it over to the save method in the reviewService.ts
            AddReviewController.prototype.save = function () {
                var _this = this;
                this.reviewService.save(this.newReview).then(function () {
                    _this.reviews = _this.reviewService.listReviews(); //calls the method, saves the review, and lists it.
                });
                //makes the input fields empty when a new review has been posted.
                this.newReview = null;
            };
            AddReviewController.prototype.reviewStars = function () {
                //this.numStars = this.reviews[1].review.stars;
                //console.log("do something");
            };
            return AddReviewController;
        }());
        Controllers.AddReviewController = AddReviewController;
        //--------------------The Controller that edits the reviews
        var EditReviewController = (function () {
            function EditReviewController(reviewService, $location, $routeParams) {
                this.reviewService = reviewService;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.reviewToEdit = reviewService.get($routeParams['id']);
            }
            EditReviewController.prototype.save = function () {
                var _this = this;
                this.reviewService.save(this.reviewToEdit).then(function () {
                    _this.$location.path('/addReview');
                });
            };
            return EditReviewController;
        }());
        Controllers.EditReviewController = EditReviewController;
        //--------------------The Controller that deletes the reviews
        var DeleteReviewController = (function () {
            function DeleteReviewController(reviewService, $location, $routeParams, id, $modalInstance) {
                this.reviewService = reviewService;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.$modalInstance = $modalInstance;
                this.reviewToEdit = reviewService.get(id);
            }
            DeleteReviewController.prototype.save = function () {
                var _this = this;
                this.reviewService.delete(this.reviewToEdit).then(function () {
                    _this.$modalInstance.close();
                });
            };
            DeleteReviewController.prototype.dismiss = function () {
                this.$modalInstance.dismiss('dismiss');
            };
            return DeleteReviewController;
        }());
        Controllers.DeleteReviewController = DeleteReviewController;
        //--------------------The Controller that searches for reviews on Yelp an Yellow Pages
        var SearchReviewController = (function () {
            function SearchReviewController(yelpSearchService, 
                //private yellowPageService: MyApp.Services.YellowPagesSearchService,
                $location) {
                this.yelpSearchService = yelpSearchService;
                this.$location = $location;
                this.markers = [];
                this.center = {
                    latitude: 37.09024,
                    longitude: -100.7128981
                };
                this.zoom = 4;
                //this.yelpResults = this.yelpSearchService.listYelp();
            }
            //public yellowPageResults;
            //public yellowPageSearch;
            SearchReviewController.prototype.search = function () {
                this.yelpResults = this.yelpSearchService.yelpSearch(this.yelpSearch.location, this.yelpSearch.search);
                //this.yellowPageResults = this.yellowPageService.yellowPageSearch(this.yellowPageSearch);
            };
            return SearchReviewController;
        }());
        Controllers.SearchReviewController = SearchReviewController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=controllers.js.map