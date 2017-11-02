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
import SearchQuery from './SearchQuery'

/**
* The SearchState model module.
* @module models/SearchState
* @version v2
*/
export default class SearchState {
    /**
    * Constructs a new <code>SearchState</code>.
    * @alias module:models/SearchState
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} url
    */
        this.url = undefined
        /**
    * @member {module:models/SearchQuery} query
    */
        this.query = undefined
    }

    /**
    * Constructs a <code>SearchState</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/SearchState} obj Optional instance to populate.
    * @return {module:models/SearchState} The populated
    * <code>SearchState</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchState()

            if (data.hasOwnProperty('url')) {
                obj.url = ApiClient.convertToType(data.url, 'String')
            }
            if (data.hasOwnProperty('query')) {
                obj.query = SearchQuery.constructFromObject(data.query)
            }
        }
        return obj
    }



}