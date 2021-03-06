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
import OrderEntry from './OrderEntry'

/**
* The ConsignmentEntry model module.
* @module models/ConsignmentEntry
* @version v2
*/
export default class ConsignmentEntry {
    /**
    * Constructs a new <code>ConsignmentEntry</code>.
    * @alias module:models/ConsignmentEntry
    * @class
    */

    constructor() {
        /**
    * @member {module:models/OrderEntry} orderEntry
    */
        this.orderEntry = undefined
        /**
    *
    * @member {Number} quantity
    */
        this.quantity = undefined
        /**
    *
    * @member {Number} shippedQuantity
    */
        this.shippedQuantity = undefined
    }

    /**
    * Constructs a <code>ConsignmentEntry</code> from a plain JavaScript
    * object, optionally creating a new instance. Copies all relevant properties
    * from <code>data</code> to <code>obj</code> if supplied or a new instance
    * if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/ConsignmentEntry} obj Optional instance to
    * populate.
    * @return {module:models/ConsignmentEntry} The populated
    * <code>ConsignmentEntry</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConsignmentEntry()

            if (data.hasOwnProperty('orderEntry')) {
                obj.orderEntry = OrderEntry.constructFromObject(data.orderEntry)
            }
            if (data.hasOwnProperty('quantity')) {
                obj.quantity = ApiClient.convertToType(data.quantity, 'Number')
            }
            if (data.hasOwnProperty('shippedQuantity')) {
                obj.shippedQuantity = ApiClient.convertToType(data.shippedQuantity, 'Number')
            }
        }
        return obj
    }

}
