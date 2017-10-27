/**
 * OCC
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../config'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../config'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Occ);
  }
}(this, function(expect, Occ) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Occ.default.CustomergroupsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CustomergroupsApi', function() {
    describe('getCustomergroups', function() {
      it('should call getCustomergroups successfully', function(done) {
        //uncomment below and update the code to test customergroups
        //instance.getCustomergroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postCustomergroup', function() {
      it('should call postCustomergroup successfully', function(done) {
        //uncomment below and update the code to test postCustomergroup
        //instance.postCustomergroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomergroup', function() {
      it('should call getCustomergroup successfully', function(done) {
        //uncomment below and update the code to test getCustomergroup
        //instance.getCustomergroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putCustomergroupsMembers', function() {
      it('should call putCustomergroupsMembers successfully', function(done) {
        //uncomment below and update the code to test putCustomergroupsMembers
        //instance.putCustomergroupsMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchCustomergroupsMembers', function() {
      it('should call patchCustomergroupsMembers successfully', function(done) {
        //uncomment below and update the code to test patchCustomergroupsMembers
        //instance.patchCustomergroupsMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCustomergroupsMember', function() {
      it('should call deleteCustomergroupsMember successfully', function(done) {
        //uncomment below and update the code to test deleteCustomergroupsMember
        //instance.deleteCustomergroupsMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
