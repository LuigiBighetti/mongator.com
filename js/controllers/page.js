define(['app'], function(app) {
    'use strict';

    app.controller('DocumentCtrl', ['$scope', '$github', '$location', '$documentation', '$routeParams',
        function($scope, $github, $location, $documentation, $routeParams) {
            var module = $routeParams.folder;
            var file = 'introduction.rst';
            
            if ( $routeParams.file ) file = $routeParams.file
            var route = module + '/' + file;

            $documentation.document(route, function(html) { $scope.document = html; });
            $documentation.documents(module, function(documents) { $scope.documents = documents; });

            $scope.current = {
                file: $documentation.label(file),
                module:  $documentation.label(module),
            };
        }
    ]);
});
