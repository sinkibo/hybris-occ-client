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
import StockWsDTO from './StockWsDTO'

/**
* The FutureStockWsDTO model module.
* @module models/FutureStockWsDTO
* @version v2
*/
export default class FutureStockWsDTO {
    /**
    * Constructs a new <code>FutureStockWsDTO</code>.
    * @alias module:models/FutureStockWsDTO
    * @class
    */

    constructor() {
        /**
    * @member {module:models/StockWsDTO} stock
    */
        this.stock = undefined
        /**
    *
    * @member {String} date
    */
        this.date = undefined
        /**
    *
    * @member {String} formattedDate
    */
        this.formattedDate = undefined
    }

    /**
    * Constructs a <code>FutureStockWsDTO</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/FutureStockWsDTO} obj Optional instance to populate.
    * @return {module:models/FutureStockWsDTO} The populated
    * <code>FutureStockWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FutureStockWsDTO()

            if (data.hasOwnProperty('stock')) {
                obj.stock = StockWsDTO.constructFromObject(data.stock)
            }
            if (data.hasOwnProperty('date')) {
                obj.date = ApiClient.convertToType(data.date, 'String')
            }
            if (data.hasOwnProperty('formattedDate')) {
                obj.formattedDate = ApiClient.convertToType(data.formattedDate, 'String')
            }
        }
        return obj
    }

}
