(function(angular){
    'use strict';
    var myApp = angular.module('myApp');
    myApp.controller('FlowManagerController',function($location,$scope){

        $scope.colors = ["#fc0003", "#f70008", "#f2000d", "#ed0012", "#e80017", "#e3001c", "#de0021", "#d90026", "#d4002b", "#cf0030", "#c90036", "#c4003b", "#bf0040", "#ba0045", "#b5004a", "#b0004f", "#ab0054", "#a60059", "#a1005e", "#9c0063", "#960069", "#91006e", "#8c0073", "#870078", "#82007d", "#7d0082", "#780087", "#73008c", "#6e0091", "#690096", "#63009c", "#5e00a1", "#5900a6", "#5400ab", "#4f00b0", "#4a00b5", "#4500ba", "#4000bf", "#3b00c4", "#3600c9", "#3000cf", "#2b00d4", "#2600d9", "#2100de", "#1c00e3", "#1700e8", "#1200ed", "#0d00f2", "#0800f7", "#0300fc"];
		
        function getSlide(target, style) {
            var i = target.length;
            return {
                id: (i + 1),
                label: 'slide #' + (i + 1),
                img: 'http://lorempixel.com/450/300/' + style + '/' + ((i + 1) % 10) ,
                color: $scope.colors[ (i*10) % $scope.colors.length],
                odd: (i % 2 === 0)
            };
        }
		
        function addSlide(target, style) {
            target.push(getSlide(target, style));
        };

        $scope.carouselIndex = 0;
		$scope.abcd = 1;
        $scope.carouselIndex2 = 0;
        //$scope.carouselIndex2 = 1;
        //$scope.carouselIndex3 = 5;
        //$scope.carouselIndex4 = 5;

        function addSlides(target, style, qty) {
            for (var i=0; i < qty; i++) {
                addSlide(target, style);
            }
            console.log('target:', target);
        }

        // 1st ngRepeat demo

        $scope.slides =[
            {
                id: 1,
                label: 'Cuong 1',
                img: 'slider1.png',
                color: $scope.colors[0],
                odd: false,
                description:'Festival Huế 2016 có chủ đề “710 năm Thuận Hóa - Phú Xuân - Thừa Thiên Huế; di sản văn hóa với hội nhập và phát triển” sẽ diễn ra từ ngày 29.4 đến ngày 4.5.2016.',
                name:'Festival'
            },
            {
                id: 2,
                label: 'Cuong 2',
                img: 'slider2.png',
                color: $scope.colors[1],
                odd: true,
                description:'Tổng hợp những thông tin mới nhất về văn hóa, chính trị, xã hội. Mang đến những bài viết nóng bỏng đang được dư luận quan tâm.',
                name:'Tin tức'
            },
            {
                id: 3,
                label: 'Cuong 4',
                img: 'slider3.png',
                color: $scope.colors[2],
                odd: false,
                description:'Chuyên mục thông tin địa điểm. Liệt kê, hướng dẫn những điểm đến hữu ích  cho quí khách. Tham quan, Ăn uống, Di chuyển, Mua sắm, Lưu niệm, Lưu trú, Giải trí, Ngân hàng',
                name:'Địa điểm'
            },
            {
                id: 4,
                label: 'Cuong 5',
                img: 'slider4.png',
                color: $scope.colors[3],
                odd: true,
                description:'Huế tuyệt vời! Cùng nhau khám phá huế qua chuyên mục này nhé. Di sản, Văn hóa, Ẩm thực, Khám phá, những thông tin hữu ích đều dành cho bạn đó !^^',
                name:'Khám phá huế'
            },
			{
                id: 5,
                label: 'Cuong 6',
                img: 'slider4.png',
                color: $scope.colors[3],
                odd: true,
                description:'Hình ảnh về danh lam thắng cánh. Video hoạt động, một kiếu du lịch mới. Xem và cảm nhận !^^',
                name:'Media'
            }
			
        ];


		
        //$scope.slides = [];

		
        //addSlides($scope.slides, 'sports', 50);

        // 2nd ngRepeat demo
        $scope.slides2 = [];
        addSlides($scope.slides2, 'sports', 10);

        // 3rd ngRepeat demo
        $scope.slides3 = [];
        addSlides($scope.slides3, 'people', 50);

        // 4th ngRepeat demo
        $scope.slides4 = [];
        addSlides($scope.slides4, 'city', 50);


        // 5th ngRepeat demo
        $scope.slides6 = [];
        $scope.carouselIndex6 = 0;
        addSlides($scope.slides6, 'sports', 10);
        $scope.addSlide = function(at) {
            if(at==='head') {
                $scope.slides6.unshift(getSlide($scope.slides6, 'people'));
            } else {
                $scope.slides6.push(getSlide($scope.slides6, 'people'));
            }
        }

        // End to End swiping
        // load 130 images in main javascript container
        var slideImages = [];
        addSlides(slideImages, 'sports', 10);
        addSlides(slideImages, 'people', 10);
        addSlides(slideImages, 'city', 10);
        addSlides(slideImages, 'abstract', 10);
        addSlides(slideImages, 'nature', 10);
        addSlides(slideImages, 'food', 10);
        addSlides(slideImages, 'transport', 10);
        addSlides(slideImages, 'animals', 10);
        addSlides(slideImages, 'business', 10);
        addSlides(slideImages, 'nightlife', 10);
        addSlides(slideImages, 'cats', 10);
        addSlides(slideImages, 'fashion', 10);
        addSlides(slideImages, 'technics', 10);
        $scope.totalimg = slideImages.length;
        $scope.galleryNumber = 1;
        console.log($scope.galleryNumber);

        function getImage(target) {
            var i = target.length
                , p = (($scope.galleryNumber-1)*$scope.setOfImagesToShow)+i;
            console.log("i=" + i + "--" + p);

            return slideImages[p];
        }
        function addImages(target, qty) {

            for (var i=0; i < qty; i++) {
                addImage(target);
            }
        }

        function addImage(target) {
            target.push(getImage(target));
        }
		
		/* $scope.popupContent= "";
		$scope.popupHeader= ""; */
		$scope.popupdone=false;
		/* $scope.bluredpopup = function ($event) {
			
			
			$scope.popupdone=true;
			var target = $event.target;
			$scope.popupContent=$scope.slides[target.getAttribute('slide-id') - 1].description;
			$scope.popupHeader=$scope.slides[target.getAttribute('slide-id') - 1].name;
		}; */
		
		$scope.unBlur= function () {
			$scope.popupdone=false;
		};
		
		$scope.clickbar= function (a)
		{
			$scope.carouselIndex = a;
			
		}
        $scope.slides7 = [];
        $scope.carouselIndex7 = 0;
        $scope.setOfImagesToShow = 3;
        addImages($scope.slides7, $scope.setOfImagesToShow);
        $scope.loadNextImages = function() {
            console.log("loading Next images");
            if (slideImages[slideImages.length-1].id !== $scope.slides7[$scope.slides7.length-1].id) {
                // Go to next set of images if exist
                $scope.slides7 = [];
                $scope.carouselIndex7 = 0;
                ++$scope.galleryNumber;
                addImages($scope.slides7, $scope.setOfImagesToShow);
            } else {
                // Go to first set of images if not exist
                $scope.galleryNumber = 1;
                $scope.slides7 = [];
                $scope.carouselIndex7 = 0;
                addImages($scope.slides7, $scope.setOfImagesToShow);
            }
        }
        $scope.loadPreviousImages = function() {
            if (slideImages[0].id !== $scope.slides7[0].id) {
                // Go to previous set of images if exist
                $scope.slides7 = [];
                $scope.carouselIndex7 = 0;
                --$scope.galleryNumber;
                addImages($scope.slides7, $scope.setOfImagesToShow);
            } else {
                // Go to last set of images if not exist
                console.log("slideimageslength: " + slideImages.length + ", " + slideImages.length-1 / $scope.setOfImagesToShow);
                // console.log("slideimageslength: " + slideImages.length );
                $scope.galleryNumber = slideImages.length / $scope.setOfImagesToShow;
                $scope.slides7 = [];
                $scope.carouselIndex7 = 0;
                addImages($scope.slides7, $scope.setOfImagesToShow);
                console.log("no images left");
            }

        }




    });

    myApp.directive('capitalize', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, modelCtrl) {
                var capitalize = function(inputValue) {
                    if(inputValue == undefined) inputValue = '';
                    var capitalized = inputValue.toLowerCase();
                    if(capitalized !== inputValue) {
                        modelCtrl.$setViewValue(capitalized);
                        modelCtrl.$render();
                    }
                    return capitalized;
                };
                modelCtrl.$parsers.push(capitalize);
                capitalize(scope[attrs.ngModel]);  // capitalize initial value
            }
        };
    });

	
	myApp.directive('spyStyle', [function () {

   return{
        restrict: 'A',
        link: function(scope, element, attrs){
            scope.$watch(function() {return element.attr('style'); }, function(newValue){
               
			   
			   alert(element.attr('style'));
			   
				
            });
        }
    };

}]);
	
	myApp.directive('blurred', function () {
		  var directive = { restrict: 'A' };
		  directive.compile = function compile (tElement) {
			// taken from blur.js homepage
			tElement.blurjs({
			  source: 'body',
			  radius: 7,
			  overlay: 'rgba(255,255,255,0.4)'
			});
		  };
		  return directive;
		});

    angular.module('ngIOS9UIWebViewPatch', ['ng']).config(['$provide', function($provide) {
        'use strict';

        $provide.decorator('$browser', ['$delegate', '$window', function($delegate, $window) {

            if (isIOS9UIWebView($window.navigator.userAgent)) {
                return applyIOS9Shim($delegate);
            }

            return $delegate;

            function isIOS9UIWebView(userAgent) {
                return /(iPhone|iPad|iPod).* OS 9_\d/.test(userAgent) && !/Version\/9\./.test(userAgent);
            }

            function applyIOS9Shim(browser) {
                var pendingLocationUrl = null;
                var originalUrlFn= browser.url;

                browser.url = function() {
                    if (arguments.length) {
                        pendingLocationUrl = arguments[0];
                        return originalUrlFn.apply(browser, arguments);
                    }
                    return pendingLocationUrl || originalUrlFn.apply(browser, arguments);
                };

                window.addEventListener('popstate', clearPendingLocationUrl, false);
                window.addEventListener('hashchange', clearPendingLocationUrl, false);

                function clearPendingLocationUrl() {
                    pendingLocationUrl = null;
                }

                return browser;
            }
        }]);
    }]);

})(window.angular);
