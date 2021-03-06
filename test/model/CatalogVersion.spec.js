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
        instance = new Occ.CatalogVersion()
    })

    const getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('CatalogVersion', () => {
        it('should create an instance of CatalogVersion', () => {
            // uncomment below and update the code to test CatalogVersion
            // var instane = new Occ.CatalogVersion();
            // expect(instance).to.be.a(Occ.CatalogVersion);
        })

        it('should have the property categories (base name: "categories")', () => {
            // uncomment below and update the code to test the property categories
            // var instane = new Occ.CatalogVersion();
            // expect(instance).to.be();
        })

        it('should have the property id (base name: "id")', () => {
            // uncomment below and update the code to test the property id
            // var instane = new Occ.CatalogVersion();
            // expect(instance).to.be();
        })

        it('should have the property lastModified (base name: "lastModified")', () => {
            // uncomment below and update the code to test the property lastModified
            // var instane = new Occ.CatalogVersion();
            // expect(instance).to.be();
        })

        it('should have the property name (base name: "name")', () => {
            // uncomment below and update the code to test the property name
            // var instane = new Occ.CatalogVersion();
            // expect(instance).to.be();
        })

        it('should have the property url (base name: "url")', () => {
            // uncomment below and update the code to test the property url
            // var instane = new Occ.CatalogVersion();
            // expect(instance).to.be();
        })

    })

}))
