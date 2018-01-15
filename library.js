'use strict';

var S = require('string');
var meta = module.parent.require('./meta');
var user = module.parent.require('./user');

var library = {};

library.init = function (params, callback) {
  var app = params.router;
  var middleware = params.middleware;

  app.get('/admin/plugins/community', middleware.admin.buildHeader, renderAdmin);
  app.get('/api/admin/plugins/community', renderAdmin);

  app.get('/user/:user/edit', function (req, res) {
    res.status(404).render('404');
  });
  app.get('/account/delete', function (req, res) {
    res.status(404).render('404');
  });
  app.get('/admin/manage/users', function (req, res) {
    res.status(404).render('404');
  });
  app.get('/register', function (req, res) {
    res.status(404).render('404');
  });
  app.get('/reset', function (req, res) {
    res.status(404).render('404');
  });

  callback();
};

library.addAdminNavigation = function (header, callback) {
  header.plugins.push({
    route: '/plugins/community',
    icon: 'fa-paint-brush',
    name: 'Community Theme'
  });

  callback(null, header);
};

library.getTeasers = function (data, callback) {
  data.teasers.forEach(function (teaser) {
    if (teaser && teaser.content) {
      teaser.content = S(teaser.content).stripTags('img').s;
    }
  });
  callback(null, data);
};

library.defineWidgetAreas = function (areas, callback) {
  areas = areas.concat([
    {
      name: 'Categories Sidebar',
      template: 'categories.tpl',
      location: 'sidebar'
    },
    {
      name: 'Category Sidebar',
      template: 'category.tpl',
      location: 'sidebar'
    },
    {
      name: 'Topic Sidebar',
      template: 'topic.tpl',
      location: 'sidebar'
    },
    {
      name: 'Categories Header',
      template: 'categories.tpl',
      location: 'header'
    },
    {
      name: 'Category Header',
      template: 'category.tpl',
      location: 'header'
    },
    {
      name: 'Topic Header',
      template: 'topic.tpl',
      location: 'header'
    },
    {
      name: 'Categories Footer',
      template: 'categories.tpl',
      location: 'footer'
    },
    {
      name: 'Category Footer',
      template: 'category.tpl',
      location: 'footer'
    },
    {
      name: 'Topic Footer',
      template: 'topic.tpl',
      location: 'footer'
    }
  ]);

  callback(null, areas);
};

library.getThemeConfig = function (config, callback) {
  meta.settings.get('community', function (err, settings) {
    config.hideSubCategories = settings.hideSubCategories === 'on';
    config.hideCategoryLastPost = settings.hideCategoryLastPost === 'on';
    config.enableQuickReply = settings.enableQuickReply === 'on';
  });

  callback(false, config);
};

function renderAdmin(req, res, next) {
  res.render('admin/plugins/community', {});
}

library.addUserToTopic = function (data, callback) {
  if (data.req.user) {
    user.getUserData(data.req.user.uid, function (err, userdata) {
      if (err) {
        return callback(err);
      }

      data.templateData.loggedInUser = userdata;
      callback(null, data);
    });
  } else {
    callback(null, data);
  }
};

library.getLinkTags = function (data, callback) {
  data.links.push({
    rel: 'prefetch stylesheet',
    type: '',
    href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700'
  });

  callback(null, data);
};

module.exports = library;
