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
        instance = new Occ.ImageWsDTO()
    })

    const getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('ImageWsDTO', () => {
        it('should create an instance of ImageWsDTO', () => {
            // uncomment below and update the code to test ImageWsDTO
            // var instane = new Occ.ImageWsDTO();
            // expect(instance).to.be.a(Occ.ImageWsDTO);
        })

        it('should have the property imageType (base name: "imageType")', () => {
            // uncomment below and update the code to test the property imageType
            // var instane = new Occ.ImageWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property format (base name: "format")', () => {
            // uncomment below and update the code to test the property format
            // var instane = new Occ.ImageWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property url (base name: "url")', () => {
            // uncomment below and update the code to test the property url
            // var instane = new Occ.ImageWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property altText (base name: "altText")', () => {
            // uncomment below and update the code to test the property altText
            // var instane = new Occ.ImageWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property galleryIndex (base name: "galleryIndex")', () => {
            // uncomment below and update the code to test the property galleryIndex
            // var instane = new Occ.ImageWsDTO();
            // expect(instance).to.be();
        })

    })

}))
