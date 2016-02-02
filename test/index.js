'use strict';

var helpers = require('yeoman-test');
var assert = require('assert');
var path = require('path');

describe('Enmarcha Generator Tests', function() {
	before(function(done) {
		helpers.run(path.join(__dirname, '../app'))
		.inDir(path.join(__dirname,'tmp'))
		.withPrompts({ applicationName: "Test" })
		.on('end', done);
	});
	
	it("creates files with the right name", function () {
		var files = [
			path.join(__dirname,'tmp/Test'),
			path.join(__dirname,'tmp/Test.sln'),
			path.join(__dirname,'tmp/Test/Test.csproj')
		]
		
		assert.file(files);
	});

	it("adds the Enmarcha assemblies", function() {
		var files = [
			path.join(__dirname,'tmp/packages/Enmarcha.SharePoint.1.0.0.2/lib/net45/Enmarcha.SharePoint.dll'),
			path.join(__dirname,'tmp/packages/Enmarcha.SharePoint.1.0.0.2/lib/net45/Enmarcha.SharePoint.Abstract.dll'),
		]
		
		assert.file(files);
	});
	
	it("adds the Enmarcha package configuration", function() {
		assert.fileContent(path.join(__dirname,'tmp/Test/packages.config'), /"Enmarcha\.SharePoint"/)
		assert.fileContent(path.join(__dirname,'tmp/Test/Package/package.package'), /"Enmarcha\.SharePoint\.dll"/)
		assert.fileContent(path.join(__dirname,'tmp/Test/Package/package.package'), /"Enmarcha\.SharePoint\.Abstract\.dll"/)
	});
});