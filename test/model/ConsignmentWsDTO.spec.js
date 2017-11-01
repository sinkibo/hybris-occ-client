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
        instance = new Occ.ConsignmentWsDTO()
    })

    const getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('ConsignmentWsDTO', () => {
        it('should create an instance of ConsignmentWsDTO', () => {
            // uncomment below and update the code to test ConsignmentWsDTO
            // var instane = new Occ.ConsignmentWsDTO();
            // expect(instance).to.be.a(Occ.ConsignmentWsDTO);
        })

        it('should have the property code (base name: "code")', () => {
            // uncomment below and update the code to test the property code
            // var instane = new Occ.ConsignmentWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property trackingID (base name: "trackingID")', () => {
            // uncomment below and update the code to test the property trackingID
            // var instane = new Occ.ConsignmentWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property status (base name: "status")', () => {
            // uncomment below and update the code to test the property status
            // var instane = new Occ.ConsignmentWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property statusDate (base name: "statusDate")', () => {
            // uncomment below and update the code to test the property statusDate
            // var instane = new Occ.ConsignmentWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property entries (base name: "entries")', () => {
            // uncomment below and update the code to test the property entries
            // var instane = new Occ.ConsignmentWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property shippingAddress (base name: "shippingAddress")', () => {
            // uncomment below and update the code to test the property shippingAddress
            // var instane = new Occ.ConsignmentWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property deliveryPointOfService (base name: "deliveryPointOfService")', () => {
            // uncomment below and update the code to test the property deliveryPointOfService
            // var instane = new Occ.ConsignmentWsDTO();
            // expect(instance).to.be();
        })

    })

}))
