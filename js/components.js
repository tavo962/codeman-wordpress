app.component( 'contact', {
	"controller":	[ '$scope', 'request', function( $scope, request ) {
		$scope.loading = false;

		$scope.action = function() {
			if( $scope.form.$invalid ) {
				$scope.form.email.$pristine = false;
				$scope.form.message.$pristine = false;
				$scope.form.name.$pristine = false;
				$scope.form.subject.$pristine = false;
				$scope.form.tel.$pristine = false;
				return;
			}	// end if

			$scope.input[ 'g-recaptcha-response' ] = angular.element( '#g-recaptcha-response' ).val();
			if( ! $scope.input[ 'g-recaptcha-response' ] ) {
				$scope.recaptcha = true;
				return;
			}	// end if

			$scope.loading = true;

			request.post( request.url.controller.wordpress + '?action=new_contact', $scope.input )
			.then( function( response ) {
				if( request.check( response ) )
					alert( 'Success' );
				else
					alert( 'Error' );
				$scope.reset();
			}, function( error ) {} );
		};

		$scope.reset = function() {
			$scope.loading = false;
			$scope.recaptcha = false;
			grecaptcha.reset();
			$scope.form.$setPristine();
			$scope.input = {};
		};	
	} ],
	"templateUrl":	'/wp-content/themes/codeman-wordpress-2.00/component/contact.html',
} );

app.component( 'newsletter', {
	"controller":	[ '$scope', 'request', function( $scope, request ) {
		$scope.loading = false;

		$scope.action = function() {
			if( $scope.form.$invalid ) {
				$scope.form.email.$pristine = false;
				$scope.form.name.$pristine = false;
				return;
			}	// end if

			$scope.input[ 'g-recaptcha-response' ] = angular.element( '#g-recaptcha-response' ).val();
			if( ! $scope.input[ 'g-recaptcha-response' ] ) {
				$scope.recaptcha = true;
				return;
			}	// end if

			$scope.loading = true;

			request.post( request.url.controller.wordpress + '?action=new_subscription', $scope.input )
			.then( function( response ) {
				if( request.check( response ) )
					alert( 'Success' );
				else
					alert( 'Error' );
				$scope.reset();
			}, function( error ) {} );
		};

		$scope.reset = function() {
			$scope.loading = false;
			$scope.recaptcha = false;
			grecaptcha.reset();
			$scope.form.$setPristine();
			$scope.input = {};
		};	
	} ],
	"templateUrl":	'/wp-content/themes/codeman-wordpress-2.00/component/newsletter.html',
} );

app.component( 'search', {
	"templateUrl":	'/wp-content/themes/codeman-wordpress-2.00/component/search.html',
} );