(function() {
  'use strict';

  angular
    .module('gulpTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
