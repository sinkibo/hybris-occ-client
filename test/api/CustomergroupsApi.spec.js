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
    describe('getCustomerGroups', function() {
      it('should call getCustomerGroups successfully', function(done) {
        //uncomment below and update the code to test customergroups
        //instance.getCustomerGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postCustomerGroup', function() {
      it('should call postCustomerGroup successfully', function(done) {
        //uncomment below and update the code to test postCustomerGroup
        //instance.postCustomerGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerGroup', function() {
      it('should call getCustomerGroup successfully', function(done) {
        //uncomment below and update the code to test getCustomerGroup
        //instance.getCustomerGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putCustomerGroupsMembers', function() {
      it('should call putCustomerGroupsMembers successfully', function(done) {
        //uncomment below and update the code to test putCustomerGroupsMembers
        //instance.putCustomerGroupsMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchCustomerGroupsMembers', function() {
      it('should call patchCustomerGroupsMembers successfully', function(done) {
        //uncomment below and update the code to test patchCustomerGroupsMembers
        //instance.patchCustomerGroupsMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCustomerGroupsMember', function() {
      it('should call deleteCustomerGroupsMember successfully', function(done) {
        //uncomment below and update the code to test deleteCustomerGroupsMember
        //instance.deleteCustomerGroupsMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
