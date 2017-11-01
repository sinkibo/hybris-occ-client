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
        instance = new Occ.CurrencyWsDTO()
    })

    const getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('CurrencyWsDTO', () => {
        it('should create an instance of CurrencyWsDTO', () => {
            // uncomment below and update the code to test CurrencyWsDTO
            // var instane = new Occ.CurrencyWsDTO();
            // expect(instance).to.be.a(Occ.CurrencyWsDTO);
        })

        it('should have the property isocode (base name: "isocode")', () => {
            // uncomment below and update the code to test the property isocode
            // var instane = new Occ.CurrencyWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property name (base name: "name")', () => {
            // uncomment below and update the code to test the property name
            // var instane = new Occ.CurrencyWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property active (base name: "active")', () => {
            // uncomment below and update the code to test the property active
            // var instane = new Occ.CurrencyWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property symbol (base name: "symbol")', () => {
            // uncomment below and update the code to test the property symbol
            // var instane = new Occ.CurrencyWsDTO();
            // expect(instance).to.be();
        })

    })

}))
