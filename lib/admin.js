'use strict';
/* globals $, app */

define('admin/plugins/community', ['settings'], function (Settings) {

  var ACP = {};

  ACP.init = function () {
    Settings.load('community', $('.community-settings'));

    $('#save').on('click', function () {
      Settings.save('community', $('.community-settings'), function () {
        app.alert({
          type: 'success',
          alert_id: 'community-saved',
          title: 'Settings Saved',
          message: 'Theme settings saved'
        });
      });
    });
  };

  return ACP;
});
