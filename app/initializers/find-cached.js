import Ember from 'ember';

// http://stackoverflow.com/a/19657808
export function initialize(container) {
  var typesAlreadyCached = [];
  var store = container.lookup('store:main');
  store.findCached = function(type) {
    if (typesAlreadyCached.contains(type))
      return new Ember.RSVP.Promise(function(resolve) { return resolve(store.all(type)); });
    typesAlreadyCached.push(type);
    return store.find(type);
  };
}

export default {
  name: 'find-cached',
  after: 'store',
  initialize: initialize
};
