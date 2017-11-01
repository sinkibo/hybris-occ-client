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
        instance = new Occ.PriceWsDTO()
    })

    const getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('PriceWsDTO', () => {
        it('should create an instance of PriceWsDTO', () => {
            // uncomment below and update the code to test PriceWsDTO
            // var instane = new Occ.PriceWsDTO();
            // expect(instance).to.be.a(Occ.PriceWsDTO);
        })

        it('should have the property currencyIso (base name: "currencyIso")', () => {
            // uncomment below and update the code to test the property currencyIso
            // var instane = new Occ.PriceWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property value (base name: "value")', () => {
            // uncomment below and update the code to test the property value
            // var instane = new Occ.PriceWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property priceType (base name: "priceType")', () => {
            // uncomment below and update the code to test the property priceType
            // var instane = new Occ.PriceWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property formattedValue (base name: "formattedValue")', () => {
            // uncomment below and update the code to test the property formattedValue
            // var instane = new Occ.PriceWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property minQuantity (base name: "minQuantity")', () => {
            // uncomment below and update the code to test the property minQuantity
            // var instane = new Occ.PriceWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property maxQuantity (base name: "maxQuantity")', () => {
            // uncomment below and update the code to test the property maxQuantity
            // var instane = new Occ.PriceWsDTO();
            // expect(instance).to.be();
        })

    })

}))
