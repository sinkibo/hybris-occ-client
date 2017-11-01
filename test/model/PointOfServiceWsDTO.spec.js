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
        instance = new Occ.PointOfServiceWsDTO()
    })

    const getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('PointOfServiceWsDTO', () => {
        it('should create an instance of PointOfServiceWsDTO', () => {
            // uncomment below and update the code to test PointOfServiceWsDTO
            // var instane = new Occ.PointOfServiceWsDTO();
            // expect(instance).to.be.a(Occ.PointOfServiceWsDTO);
        })

        it('should have the property name (base name: "name")', () => {
            // uncomment below and update the code to test the property name
            // var instane = new Occ.PointOfServiceWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property displayName (base name: "displayName")', () => {
            // uncomment below and update the code to test the property displayName
            // var instane = new Occ.PointOfServiceWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property url (base name: "url")', () => {
            // uncomment below and update the code to test the property url
            // var instane = new Occ.PointOfServiceWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property description (base name: "description")', () => {
            // uncomment below and update the code to test the property description
            // var instane = new Occ.PointOfServiceWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property openingHours (base name: "openingHours")', () => {
            // uncomment below and update the code to test the property openingHours
            // var instane = new Occ.PointOfServiceWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property storeContent (base name: "storeContent")', () => {
            // uncomment below and update the code to test the property storeContent
            // var instane = new Occ.PointOfServiceWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property features (base name: "features")', () => {
            // uncomment below and update the code to test the property features
            // var instane = new Occ.PointOfServiceWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property geoPoint (base name: "geoPoint")', () => {
            // uncomment below and update the code to test the property geoPoint
            // var instane = new Occ.PointOfServiceWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property formattedDistance (base name: "formattedDistance")', () => {
            // uncomment below and update the code to test the property formattedDistance
            // var instane = new Occ.PointOfServiceWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property distanceKm (base name: "distanceKm")', () => {
            // uncomment below and update the code to test the property distanceKm
            // var instane = new Occ.PointOfServiceWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property mapIcon (base name: "mapIcon")', () => {
            // uncomment below and update the code to test the property mapIcon
            // var instane = new Occ.PointOfServiceWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property address (base name: "address")', () => {
            // uncomment below and update the code to test the property address
            // var instane = new Occ.PointOfServiceWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property storeImages (base name: "storeImages")', () => {
            // uncomment below and update the code to test the property storeImages
            // var instane = new Occ.PointOfServiceWsDTO();
            // expect(instance).to.be();
        })

    })

}))
