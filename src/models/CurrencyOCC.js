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

/**
* The CurrencyOCC model module.
* @module models/CurrencyOCC
* @version v2
*/
export default class CurrencyOCC {
    /**
    * Constructs a new <code>CurrencyOCC</code>.
    * @alias module:models/CurrencyOCC
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} isocode
    */
        this.isocode = undefined
        /**
    *
    * @member {String} name
    */
        this.name = undefined
        /**
    *
    * @member {Boolean} active
    */
        this.active = undefined
        /**
    *
    * @member {String} symbol
    */
        this.symbol = undefined
    }

    /**
    * Constructs a <code>CurrencyOCC</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/CurrencyOCC} obj Optional instance to populate.
    * @return {module:models/CurrencyOCC} The populated
    * <code>CurrencyOCC</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrencyOCC()

            if (data.hasOwnProperty('isocode')) {
                obj.isocode = ApiClient.convertToType(data.isocode, 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String')
            }
            if (data.hasOwnProperty('active')) {
                obj.active = ApiClient.convertToType(data.active, 'Boolean')
            }
            if (data.hasOwnProperty('symbol')) {
                obj.symbol = ApiClient.convertToType(data.symbol, 'String')
            }
        }
        return obj
    }

}
