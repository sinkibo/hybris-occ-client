/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/**
 * OCC No description provided (generated by Swagger Codegen
 * https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git Do not edit the class
 * manually.
 *
 */

import ApiClient from '../ApiClient'
import BaseOption from './BaseOption'
import Category from './Category'
import Classification from './Classification'
import FutureStock from './FutureStock'
import Image from './Image'
import Price from './Price'
import Promotion from './Promotion'
import Review from './Review'
import Stock from './Stock'
import VariantOption from './VariantOption'

/**
* The ProductOCC1 model module.
* @module models/ProductOCC1
* @version v2
*/
export default class ProductOCC1 {
    /**
    * Constructs a new <code>ProductOCC1</code>.
    * @alias module:models/ProductOCC1
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} code
    */
        this.code = undefined
        /**
    *
    * @member {String} name
    */
        this.name = undefined
        /**
    *
    * @member {String} url
    */
        this.url = undefined
        /**
    *
    * @member {String} description
    */
        this.description = undefined
        /**
    *
    * @member {Boolean} purchasable
    */
        this.purchasable = undefined
        /**
    * @member {module:models/Stock} stock
    */
        this.stock = undefined
        /**
    *
    * @member {Array.<module:models/FutureStock>} futureStocks
    */
        this.futureStocks = undefined
        /**
    *
    * @member {Boolean} availableForPickup
    */
        this.availableForPickup = undefined
        /**
    *
    * @member {Number} averageRating
    */
        this.averageRating = undefined
        /**
    *
    * @member {Number} numberOfReviews
    */
        this.numberOfReviews = undefined
        /**
    *
    * @member {String} summary
    */
        this.summary = undefined
        /**
    *
    * @member {String} manufacturer
    */
        this.manufacturer = undefined
        /**
    *
    * @member {String} variantType
    */
        this.variantType = undefined
        /**
    * @member {module:models/Price} price
    */
        this.price = undefined
        /**
    *
    * @member {String} baseProduct
    */
        this.baseProduct = undefined
        /**
    *
    * @member {Array.<module:models/Image>} images
    */
        this.images = undefined
        /**
    *
    * @member {Array.<module:models/Category>} categories
    */
        this.categories = undefined
        /**
    *
    * @member {Array.<module:models/Review>} reviews
    */
        this.reviews = undefined
        /**
    *
    * @member {Array.<module:models/Classification>} classifications
    */
        this.classifications = undefined
        /**
    *
    * @member {Array.<module:models/Promotion>} potentialPromotions
    */
        this.potentialPromotions = undefined
        /**
    *
    * @member {Array.<module:models/VariantOption>} variantOptions
    */
        this.variantOptions = undefined
        /**
    *
    * @member {Array.<module:models/BaseOption>} baseOptions
    */
        this.baseOptions = undefined
        /**
    *
    * @member {Boolean} volumePricesFlag
    */
        this.volumePricesFlag = undefined
        /**
    *
    * @member {Array.<module:models/Price>} volumePrices
    */
        this.volumePrices = undefined
    }

    /**
    * Constructs a <code>ProductOCC1</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/ProductOCC1} obj Optional instance to populate.
    * @return {module:models/ProductOCC1} The populated
    * <code>ProductOCC1</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductOCC1()

            if (data.hasOwnProperty('code')) {
                obj.code = ApiClient.convertToType(data.code, 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String')
            }
            if (data.hasOwnProperty('url')) {
                obj.url = ApiClient.convertToType(data.url, 'String')
            }
            if (data.hasOwnProperty('description')) {
                obj.description = ApiClient.convertToType(data.description, 'String')
            }
            if (data.hasOwnProperty('purchasable')) {
                obj.purchasable = ApiClient.convertToType(data.purchasable, 'Boolean')
            }
            if (data.hasOwnProperty('stock')) {
                obj.stock = Stock.constructFromObject(data.stock)
            }
            if (data.hasOwnProperty('futureStocks')) {
                obj.futureStocks = ApiClient.convertToType(data.futureStocks, [FutureStock])
            }
            if (data.hasOwnProperty('availableForPickup')) {
                obj.availableForPickup = ApiClient.convertToType(data.availableForPickup, 'Boolean')
            }
            if (data.hasOwnProperty('averageRating')) {
                obj.averageRating = ApiClient.convertToType(data.averageRating, 'Number')
            }
            if (data.hasOwnProperty('numberOfReviews')) {
                obj.numberOfReviews = ApiClient.convertToType(data.numberOfReviews, 'Number')
            }
            if (data.hasOwnProperty('summary')) {
                obj.summary = ApiClient.convertToType(data.summary, 'String')
            }
            if (data.hasOwnProperty('manufacturer')) {
                obj.manufacturer = ApiClient.convertToType(data.manufacturer, 'String')
            }
            if (data.hasOwnProperty('variantType')) {
                obj.variantType = ApiClient.convertToType(data.variantType, 'String')
            }
            if (data.hasOwnProperty('price')) {
                obj.price = Price.constructFromObject(data.price)
            }
            if (data.hasOwnProperty('baseProduct')) {
                obj.baseProduct = ApiClient.convertToType(data.baseProduct, 'String')
            }
            if (data.hasOwnProperty('images')) {
                obj.images = ApiClient.convertToType(data.images, [Image])
            }
            if (data.hasOwnProperty('categories')) {
                obj.categories = ApiClient.convertToType(data.categories, [Category])
            }
            if (data.hasOwnProperty('reviews')) {
                obj.reviews = ApiClient.convertToType(data.reviews, [Review])
            }
            if (data.hasOwnProperty('classifications')) {
                obj.classifications = ApiClient.convertToType(data.classifications, [Classification])
            }
            if (data.hasOwnProperty('potentialPromotions')) {
                obj.potentialPromotions = ApiClient.convertToType(data.potentialPromotions, [Promotion])
            }
            if (data.hasOwnProperty('variantOptions')) {
                obj.variantOptions = ApiClient.convertToType(data.variantOptions, [VariantOption])
            }
            if (data.hasOwnProperty('baseOptions')) {
                obj.baseOptions = ApiClient.convertToType(data.baseOptions, [BaseOption])
            }
            if (data.hasOwnProperty('volumePricesFlag')) {
                obj.volumePricesFlag = ApiClient.convertToType(data.volumePricesFlag, 'Boolean')
            }
            if (data.hasOwnProperty('volumePrices')) {
                obj.volumePrices = ApiClient.convertToType(data.volumePrices, [Price])
            }
        }
        return obj
    }

}
