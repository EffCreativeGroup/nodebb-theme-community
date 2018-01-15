NodeBB Community theme
======================

# Installation

```
$ cd /path/to/nodebb/node_modules
$ git clone https://github.com/EffCreativeGroup/nodebb-theme-community.git
$ cd nodebb-theme-community
$ npm i
# Then start NodeBB and activate the theme via the /admin/appearance/themes page
```

**For developers:**

```
$ cd /path/to/nodebb/plugins
$ git clone https://github.com/EffCreativeGroup/nodebb-theme-community.git
$ cd nodebb-theme-community
$ npm i
$ npm link
$ cd /path/to/nodebb/node_modules
$ npm link nodebb-theme-community
# Then start/restart NodeBB and activate the theme via the /admin/appearance/themes page
```

# Modification of the theme

You are install theme to /path/to/nodebb/plugins and can change files of theme here.

After add changes you must restart NodeBB before you can see you changes on forum.

After ending of all work with theme you must: 
* Add you changes to git repository 
* Add this theme as dependency to package.json of NodeBB
* Change theme of community to default
* Remove link from node modules: 
```
cd /path/to/nodebb/node_modules
npm unlink nodebb-theme-community
``` 
* Remove nodebb-theme-community from /path/to/nodebb/plugins dir
* Update community:
```
cd /path/to/nodebb/
./nodebb stop
npm install
npm upgrade
./nodebb build
./nodebb start
```
* Change theme of community to Community-Theme via the /admin/appearance/themes page
