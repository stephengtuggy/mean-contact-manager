(function () {
  'use strict';

  angular
    .module('contacts')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Contacts',
      state: 'contacts',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'contacts', {
      title: 'List Contacts',
      state: 'contacts.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'contacts', {
      title: 'Create Contact',
      state: 'contacts.create',
      roles: ['user']
    });
  }
})();
