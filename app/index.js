'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the rad ' + chalk.red('Enmarcha Sharepoint') + ' generator!'
    ));

    var prompts = [{
      name: 'applicationName',
      message: 'What\'s the name of your Enmarcha Sharepoint application?',
      default: "Enmarcha.Template"
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },
  writing: {
    app: function () {
      var appName = {projectName: this.props.applicationName};      
      
      mkdirp(appName.projectName);
      mkdirp(appName.projectName + "\\Features");
      
      this.fs.copy(
        this.templatePath(".nuget"),
        this.destinationPath(".nuget")                      
      );            
      
      this.fs.copy(
        this.templatePath("packages"),
        this.destinationPath("packages")                      
      );
      
      this.fs.copy(
        this.templatePath("Enmarcha.Template\\Package"),
        this.destinationPath(appName.projectName + "\\Package")
      );
      
      this.fs.copy(
        this.templatePath("Enmarcha.Template\\packages.config"),
        this.destinationPath(appName.projectName + "\\packages.config")
      );
                   
      this.fs.copy(
          this.templatePath("Enmarcha.Template\\key.snk"),
          this.destinationPath(appName.projectName + "\\key.snk")
      );
      
      this.fs.copyTpl(
          this.templatePath("packages\\repositories.config"),
          this.destinationPath("packages\\repositories.config"),
          appName
      ); 
      
      this.fs.copyTpl(
          this.templatePath("Enmarcha.Template.sln"),
          this.destinationPath(appName.projectName + ".sln"),
          appName      
      );        
      
      this.fs.copyTpl(
          this.templatePath("Enmarcha.Template\\Enmarcha.Template.csproj"),
          this.destinationPath(appName.projectName + "\\" + appName.projectName + ".csproj"),
          appName
      );
      
      this.fs.copyTpl(
          this.templatePath("Enmarcha.Template\\Properties\\AssemblyInfo.cs"),
          this.destinationPath(appName.projectName + "\\Properties\\AssemblyInfo.cs"),
          appName
      );
      
      this.fs.copyTpl(
          this.templatePath("Enmarcha.Template\\Package\\Package.package"),
          this.destinationPath(appName.projectName + "\\Package\\Package.package"),
          appName
      );                      
    }
  },
  install: function () {
    this.installDependencies();
  }
});