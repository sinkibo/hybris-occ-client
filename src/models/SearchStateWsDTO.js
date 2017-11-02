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
import SearchQueryWsDTO from './SearchQueryWsDTO'

/**
* The SearchStateWsDTO model module.
* @module models/SearchStateWsDTO
* @version v2
*/
export default class SearchStateWsDTO {
    /**
    * Constructs a new <code>SearchStateWsDTO</code>.
    * @alias module:models/SearchStateWsDTO
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} url
    */
        this.url = undefined
        /**
    * @member {module:models/SearchQueryWsDTO} query
    */
        this.query = undefined
    }

    /**
    * Constructs a <code>SearchStateWsDTO</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/SearchStateWsDTO} obj Optional instance to populate.
    * @return {module:models/SearchStateWsDTO} The populated
    * <code>SearchStateWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchStateWsDTO()

            if (data.hasOwnProperty('url')) {
                obj.url = ApiClient.convertToType(data.url, 'String')
            }
            if (data.hasOwnProperty('query')) {
                obj.query = SearchQueryWsDTO.constructFromObject(data.query)
            }
        }
        return obj
    }



}
