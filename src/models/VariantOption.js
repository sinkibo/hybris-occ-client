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
import Price from './Price'
import Stock from './Stock'
import VariantOptionQualifier from './VariantOptionQualifier'

/**
* The VariantOption model module.
* @module models/VariantOption
* @version v2
*/
export default class VariantOption {
    /**
    * Constructs a new <code>VariantOption</code>.
    * @alias module:models/VariantOption
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} code
    */
        this.code = undefined
        /**
    * @member {module:models/Stock} stock
    */
        this.stock = undefined
        /**
    *
    * @member {String} url
    */
        this.url = undefined
        /**
    * @member {module:models/Price} priceData
    */
        this.priceData = undefined
        /**
    *
    * @member {Array.<module:models/VariantOptionQualifier>}
    * variantOptionQualifiers
    */
        this.variantOptionQualifiers = undefined
    }

    /**
    * Constructs a <code>VariantOption</code> from a plain JavaScript
    * object, optionally creating a new instance. Copies all relevant properties
    * from <code>data</code> to <code>obj</code> if supplied or a new instance
    * if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/VariantOption} obj Optional instance to
    * populate.
    * @return {module:models/VariantOption} The populated
    * <code>VariantOption</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariantOption()

            if (data.hasOwnProperty('code')) {
                obj.code = ApiClient.convertToType(data.code, 'String')
            }
            if (data.hasOwnProperty('stock')) {
                obj.stock = Stock.constructFromObject(data.stock)
            }
            if (data.hasOwnProperty('url')) {
                obj.url = ApiClient.convertToType(data.url, 'String')
            }
            if (data.hasOwnProperty('priceData')) {
                obj.priceData = Price.constructFromObject(data.priceData)
            }
            if (data.hasOwnProperty('variantOptionQualifiers')) {
                obj.variantOptionQualifiers = ApiClient.convertToType(data.variantOptionQualifiers, [VariantOptionQualifier])
            }
        }
        return obj
    }



}
