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
        instance = new Occ.ReviewOCC()
    })

    const getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('ReviewOCC', () => {
        it('should create an instance of ReviewOCC', () => {
            // uncomment below and update the code to test ReviewOCC
            // var instane = new Occ.ReviewOCC();
            // expect(instance).to.be.a(Occ.ReviewOCC);
        })

        it('should have the property headline (base name: "headline")', () => {
            // uncomment below and update the code to test the property headline
            // var instane = new Occ.ReviewOCC();
            // expect(instance).to.be();
        })

        it('should have the property comment (base name: "comment")', () => {
            // uncomment below and update the code to test the property comment
            // var instane = new Occ.ReviewOCC();
            // expect(instance).to.be();
        })

        it('should have the property rating (base name: "rating")', () => {
            // uncomment below and update the code to test the property rating
            // var instane = new Occ.ReviewOCC();
            // expect(instance).to.be();
        })

        it('should have the property _date (base name: "date")', () => {
            // uncomment below and update the code to test the property _date
            // var instane = new Occ.ReviewOCC();
            // expect(instance).to.be();
        })

        it('should have the property alias (base name: "alias")', () => {
            // uncomment below and update the code to test the property alias
            // var instane = new Occ.ReviewOCC();
            // expect(instance).to.be();
        })

    })

}))
