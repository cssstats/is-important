var assert = require('assert');
var isImportant = require('..');

var importantValues = [
  'blue !important;',
  'thin solid #fafafa !important',
  'transparent !important'
];

var unimportantValues = [
  'green',
  'thin solid #fafafa',
  'url(http://foo.bar/important.jpg)',
]

describe('is-important', function() {

  it('should return true when !important', function() {
    importantValues.forEach(function(importantValue) {
      assert.ok(isImportant(importantValue));
    });
  });

  it('should return false when not !important', function() {
    unimportantValues.forEach(function(unimportantValue) {
      assert.ok(!isImportant(unimportantValue));
    });
  });
});
