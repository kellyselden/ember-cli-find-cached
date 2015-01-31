#ember-cli-find-cached

Combining Ember Data's store find() and all(). Fresh calls use find(). Any subsequent calls use all(). It is useful if you are using other ways to refresh models.

##Usage

`npm install --save-dev ember-cli-find-cached`
```javascript
this.store.findCached('product')
```
