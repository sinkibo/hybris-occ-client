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
import OrderStatusUpdateElementWsDTO from './OrderStatusUpdateElementWsDTO'

/**
* The OrderStatusUpdateElementListWsDTO model module.
* @module models/OrderStatusUpdateElementListWsDTO
* @version v2
*/
export default class OrderStatusUpdateElementListWsDTO {
    /**
    * Constructs a new <code>OrderStatusUpdateElementListWsDTO</code>.
    * @alias module:models/OrderStatusUpdateElementListWsDTO
    * @class
    */

    constructor() {
        /**
    *
    * @member {Array.<module:models/OrderStatusUpdateElementWsDTO>}
    * orderStatusUpdateElements
    */
        this.orderStatusUpdateElements = undefined
    }

    /**
    * Constructs a <code>OrderStatusUpdateElementListWsDTO</code> from a plain
    * JavaScript object, optionally creating a new instance. Copies all relevant
    * properties from <code>data</code> to <code>obj</code> if supplied or a new
    * instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/OrderStatusUpdateElementListWsDTO} obj Optional
    * instance to populate.
    * @return {module:models/OrderStatusUpdateElementListWsDTO} The populated
    * <code>OrderStatusUpdateElementListWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderStatusUpdateElementListWsDTO()

            if (data.hasOwnProperty('orderStatusUpdateElements')) {
                obj.orderStatusUpdateElements = ApiClient.convertToType(data.orderStatusUpdateElements, [OrderStatusUpdateElementWsDTO])
            }
        }
        return obj
    }



}
