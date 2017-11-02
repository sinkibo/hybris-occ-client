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
* The ReviewWsDTO208 model module.
* @module models/ReviewWsDTO208
* @version v2
*/
export default class ReviewWsDTO208 {
    /**
    * Constructs a new <code>ReviewWsDTO208</code>.
    * @alias module:models/ReviewWsDTO208
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} headline
    */
        this.headline = undefined
        /**
    *
    * @member {String} comment
    */
        this.comment = undefined
        /**
    *
    * @member {Number} rating
    */
        this.rating = undefined
        /**
    *
    * @member {String} date
    */
        this.date = undefined
        /**
    *
    * @member {String} alias
    */
        this.alias = undefined
    }

    /**
    * Constructs a <code>ReviewWsDTO208</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/ReviewWsDTO208} obj Optional instance to populate.
    * @return {module:models/ReviewWsDTO208} The populated
    * <code>ReviewWsDTO208</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReviewWsDTO208()

            if (data.hasOwnProperty('headline')) {
                obj.headline = ApiClient.convertToType(data.headline, 'String')
            }
            if (data.hasOwnProperty('comment')) {
                obj.comment = ApiClient.convertToType(data.comment, 'String')
            }
            if (data.hasOwnProperty('rating')) {
                obj.rating = ApiClient.convertToType(data.rating, 'Number')
            }
            if (data.hasOwnProperty('date')) {
                obj.date = ApiClient.convertToType(data.date, 'String')
            }
            if (data.hasOwnProperty('alias')) {
                obj.alias = ApiClient.convertToType(data.alias, 'String')
            }
        }
        return obj
    }



}
