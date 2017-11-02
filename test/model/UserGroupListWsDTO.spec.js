/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

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
        define(['expect.js', '../../src/index'], factory)
    } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
        factory(require('expect.js'), require('../../src/index'))
    } else {
    // Browser globals (root is window)
        factory(root.expect, root.Occ)
    }
}(this, (expect, Occ) => {
    'use strict'

    let instance

    beforeEach(() => {
        instance = new Occ.UserGroupListWsDTO()
    })

    const getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('UserGroupListWsDTO', () => {
        it('should create an instance of UserGroupListWsDTO', () => {
            // uncomment below and update the code to test UserGroupListWsDTO
            // var instane = new Occ.UserGroupListWsDTO();
            // expect(instance).to.be.a(Occ.UserGroupListWsDTO);
        })

        it('should have the property userGroups (base name: "userGroups")', () => {
            // uncomment below and update the code to test the property userGroups
            // var instane = new Occ.UserGroupListWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property totalNumber (base name: "totalNumber")', () => {
            // uncomment below and update the code to test the property totalNumber
            // var instane = new Occ.UserGroupListWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property pageSize (base name: "pageSize")', () => {
            // uncomment below and update the code to test the property pageSize
            // var instane = new Occ.UserGroupListWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property numberOfPages (base name: "numberOfPages")', () => {
            // uncomment below and update the code to test the property numberOfPages
            // var instane = new Occ.UserGroupListWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property currentPage (base name: "currentPage")', () => {
            // uncomment below and update the code to test the property currentPage
            // var instane = new Occ.UserGroupListWsDTO();
            // expect(instance).to.be();
        })

    })

}))
