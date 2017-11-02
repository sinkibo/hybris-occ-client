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
        instance = new Occ.ProductWsDTO()
    })

    const getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('ProductWsDTO', () => {
        it('should create an instance of ProductWsDTO', () => {
            // uncomment below and update the code to test ProductWsDTO
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be.a(Occ.ProductWsDTO);
        })

        it('should have the property code (base name: "code")', () => {
            // uncomment below and update the code to test the property code
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property name (base name: "name")', () => {
            // uncomment below and update the code to test the property name
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property url (base name: "url")', () => {
            // uncomment below and update the code to test the property url
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property description (base name: "description")', () => {
            // uncomment below and update the code to test the property description
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property purchasable (base name: "purchasable")', () => {
            // uncomment below and update the code to test the property purchasable
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property stock (base name: "stock")', () => {
            // uncomment below and update the code to test the property stock
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property futureStocks (base name: "futureStocks")', () => {
            // uncomment below and update the code to test the property futureStocks
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property availableForPickup (base name: "availableForPickup")', () => {
            // uncomment below and update the code to test the property availableForPickup
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property averageRating (base name: "averageRating")', () => {
            // uncomment below and update the code to test the property averageRating
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property numberOfReviews (base name: "numberOfReviews")', () => {
            // uncomment below and update the code to test the property numberOfReviews
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property summary (base name: "summary")', () => {
            // uncomment below and update the code to test the property summary
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property manufacturer (base name: "manufacturer")', () => {
            // uncomment below and update the code to test the property manufacturer
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property variantType (base name: "variantType")', () => {
            // uncomment below and update the code to test the property variantType
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property price (base name: "price")', () => {
            // uncomment below and update the code to test the property price
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property baseProduct (base name: "baseProduct")', () => {
            // uncomment below and update the code to test the property baseProduct
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property images (base name: "images")', () => {
            // uncomment below and update the code to test the property images
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property categories (base name: "categories")', () => {
            // uncomment below and update the code to test the property categories
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property reviews (base name: "reviews")', () => {
            // uncomment below and update the code to test the property reviews
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property classifications (base name: "classifications")', () => {
            // uncomment below and update the code to test the property classifications
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property potentialPromotions (base name: "potentialPromotions")', () => {
            // uncomment below and update the code to test the property potentialPromotions
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property variantOptions (base name: "variantOptions")', () => {
            // uncomment below and update the code to test the property variantOptions
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property baseOptions (base name: "baseOptions")', () => {
            // uncomment below and update the code to test the property baseOptions
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property volumePricesFlag (base name: "volumePricesFlag")', () => {
            // uncomment below and update the code to test the property volumePricesFlag
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property volumePrices (base name: "volumePrices")', () => {
            // uncomment below and update the code to test the property volumePrices
            // var instane = new Occ.ProductWsDTO();
            // expect(instance).to.be();
        })

    })

}))
