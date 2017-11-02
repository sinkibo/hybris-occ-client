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
import Suggestion from './Suggestion'

/**
* The SuggestionList model module.
* @module models/SuggestionList
* @version v2
*/
export default class SuggestionList {
    /**
    * Constructs a new <code>SuggestionList</code>.
    * @alias module:models/SuggestionList
    * @class
    */

    constructor() {
        /**
    *
    * @member {Array.<module:models/Suggestion>} suggestions
    */
        this.suggestions = undefined
    }

    /**
    * Constructs a <code>SuggestionList</code> from a plain JavaScript
    * object, optionally creating a new instance. Copies all relevant properties
    * from <code>data</code> to <code>obj</code> if supplied or a new instance
    * if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/SuggestionList} obj Optional instance to
    * populate.
    * @return {module:models/SuggestionList} The populated
    * <code>SuggestionList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SuggestionList()

            if (data.hasOwnProperty('suggestions')) {
                obj.suggestions = ApiClient.convertToType(data.suggestions, [Suggestion])
            }
        }
        return obj
    }



}
