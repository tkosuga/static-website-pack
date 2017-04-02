'use strict';

const chai = require('chai');
const assert = chai.assert;

describe('Website', () => {
  const website = require(`${__dirname}/../src/website`)('example');
  describe('#config', () => {
    it('load config file', () => {
      assert.isNotNull(website.config);
    });
  });
  describe('#task', () => {
    before(() => {
      website.task('make_clean')().then(paths => console.log('Deleted files and folders:\n', paths.join('\n')));
    });
    it('ejs_compile', () => website.task('ejs_compile')());
    it('sass_lint', () => website.task('sass_lint')());
    it('sass_compile', () => website.task('sass_compile')());
    it('es_lint', () => website.task('es_lint')());
    it('es_compile', () => website.task('es_compile')());
    it('img_compress', () => website.task('img_compress')());
    it('html_minify', () => website.task('html_minify')());
    it('css_concat', () => website.task('css_concat')());
    it('css_minify', () => website.task('css_minify')());
    it('js_concat', () => website.task('js_concat')());
    it('js_minify', () => website.task('js_minify')());
  });
});
