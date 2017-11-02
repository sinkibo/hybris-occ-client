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
        instance = new Occ.UserWsDTO286()
    })

    const getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('UserWsDTO286', () => {
        it('should create an instance of UserWsDTO286', () => {
            // uncomment below and update the code to test UserWsDTO286
            // var instane = new Occ.UserWsDTO286();
            // expect(instance).to.be.a(Occ.UserWsDTO286);
        })

        it('should have the property titleCode (base name: "titleCode")', () => {
            // uncomment below and update the code to test the property titleCode
            // var instane = new Occ.UserWsDTO286();
            // expect(instance).to.be();
        })

        it('should have the property firstName (base name: "firstName")', () => {
            // uncomment below and update the code to test the property firstName
            // var instane = new Occ.UserWsDTO286();
            // expect(instance).to.be();
        })

        it('should have the property lastName (base name: "lastName")', () => {
            // uncomment below and update the code to test the property lastName
            // var instane = new Occ.UserWsDTO286();
            // expect(instance).to.be();
        })

        it('should have the property currency (base name: "currency")', () => {
            // uncomment below and update the code to test the property currency
            // var instane = new Occ.UserWsDTO286();
            // expect(instance).to.be();
        })

        it('should have the property language (base name: "language")', () => {
            // uncomment below and update the code to test the property language
            // var instane = new Occ.UserWsDTO286();
            // expect(instance).to.be();
        })

    })

}))
