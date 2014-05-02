/*
 * Copyright 2012 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var path = require("path");

module.exports = function (grunt) {
  grunt.initConfig({
    hspserver: {
      port: 1337,
      templateExtension: "hsp",
      base: path.join(__dirname, "/public_html"),
      staticFolders: {
        "/aria":  path.join(__dirname, "/node_modules/ariatemplates/build/target/production/aria"),
        "/hsp":   path.join(__dirname, "/node_modules/hashspace/hsp"),
        "/noder": path.join(__dirname, "/node_modules/noder-js/dist/browser")
      }
    }
  });

  grunt.loadTasks('grunt-tasks');
  grunt.registerTask('default', ['hspserver']);
};
