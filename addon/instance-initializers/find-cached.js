import Ember from 'ember';

// http://stackoverflow.com/a/19657808
export function initialize(instance) {
  var typesAlreadyCached = [];
  var store = instance.container.lookup('store:main');
  store.findCached = function(type) {
    if (typesAlreadyCached.contains(type))
      return new Ember.RSVP.Promise(function(resolve) { return resolve(store.all(type)); });
    typesAlreadyCached.push(type);
    return store.find(type);
  };
}

export default {
  name: 'find-cached',
  after: 'ember-data',
  initialize: initialize
};
