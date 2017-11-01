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
        instance = new Occ.ProductSearchPageWsDTO()
    })

    const getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('ProductSearchPageWsDTO', () => {
        it('should create an instance of ProductSearchPageWsDTO', () => {
            // uncomment below and update the code to test ProductSearchPageWsDTO
            // var instane = new Occ.ProductSearchPageWsDTO();
            // expect(instance).to.be.a(Occ.ProductSearchPageWsDTO);
        })

        it('should have the property freeTextSearch (base name: "freeTextSearch")', () => {
            // uncomment below and update the code to test the property freeTextSearch
            // var instane = new Occ.ProductSearchPageWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property categoryCode (base name: "categoryCode")', () => {
            // uncomment below and update the code to test the property categoryCode
            // var instane = new Occ.ProductSearchPageWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property keywordRedirectUrl (base name: "keywordRedirectUrl")', () => {
            // uncomment below and update the code to test the property keywordRedirectUrl
            // var instane = new Occ.ProductSearchPageWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property spellingSuggestion (base name: "spellingSuggestion")', () => {
            // uncomment below and update the code to test the property spellingSuggestion
            // var instane = new Occ.ProductSearchPageWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property products (base name: "products")', () => {
            // uncomment below and update the code to test the property products
            // var instane = new Occ.ProductSearchPageWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property sorts (base name: "sorts")', () => {
            // uncomment below and update the code to test the property sorts
            // var instane = new Occ.ProductSearchPageWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property pagination (base name: "pagination")', () => {
            // uncomment below and update the code to test the property pagination
            // var instane = new Occ.ProductSearchPageWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property currentQuery (base name: "currentQuery")', () => {
            // uncomment below and update the code to test the property currentQuery
            // var instane = new Occ.ProductSearchPageWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property breadcrumbs (base name: "breadcrumbs")', () => {
            // uncomment below and update the code to test the property breadcrumbs
            // var instane = new Occ.ProductSearchPageWsDTO();
            // expect(instance).to.be();
        })

        it('should have the property facets (base name: "facets")', () => {
            // uncomment below and update the code to test the property facets
            // var instane = new Occ.ProductSearchPageWsDTO();
            // expect(instance).to.be();
        })

    })

}))
