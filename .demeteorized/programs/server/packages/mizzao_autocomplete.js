(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var DDP = Package.ddp.DDP;
var DDPServer = Package.ddp.DDPServer;

/* Package-scope variables */
var AutocompleteTest, __coffeescriptShare;

(function () {

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// packages/mizzao:autocomplete/autocomplete-server.coffee.js                             //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish('autocomplete-recordset', function(selector, options, collName) {
  var collection, handle, sub;
  collection = global[collName];
  if (!collection) {
    throw new Error(collName + ' is not defined on the global namespace of the server.');
  }
  if (!collection._isInsecure()) {
    Meteor._debug(collName + ' is a secure collection, therefore no data was returned because the client could compromise security by subscribing to arbitrary server collections via the browser console. Please write your own publish function.');
    return [];
  }
  sub = this;
  if (options.limit) {
    options.limit = Math.min(50, Math.abs(options.limit));
  }
  handle = collection.find(selector, options).observeChanges({
    added: function(id, fields) {
      return sub.added('autocompleteRecords', id, fields);
    },
    changed: function(id, fields) {
      return sub.changed('autocompleteRecords', id, fields);
    },
    removed: function(id) {
      return sub.removed('autocompleteRecords', id);
    }
  });
  sub.ready();
  return sub.onStop(function() {
    return handle.stop();
  });
});
////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mizzao:autocomplete'] = {
  AutocompleteTest: AutocompleteTest
};

})();
