/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
 //User Routes
 'POST /user':'UserController.create',
 'GET /user':'UserController.find',
 'GET /user/:id':'UserController.findOne',
 'PATCH /user/:id':'UserController.update',
 'delete /user/:id':'UserController.delete',
 //register user
 "GET /": "home/index",
 'POST /user/register': 'user/register',
 'GET /user/confirm': 'user/confirm',
 'POST /user/login': 'user/login',

//User Task Routes
 'POST /addTask':'TaskController.create',
 'GET /getTask':'TaskController.find',
 'PATCH /task/:id':'TaskController.update',
 'DELETE /task/:id':'TaskController.delete',

//  'POST /cmpny':'CompnayController.create',
//  'GET /cmpny':'CompnayController.find',
//  'POST /jobs':'JobController.create',
//  'GET /jobs':'JobController.find',

};
