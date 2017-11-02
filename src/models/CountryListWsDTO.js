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
import CountryWsDTO from './CountryWsDTO'

/**
* The CountryListWsDTO model module.
* @module models/CountryListWsDTO
* @version v2
*/
export default class CountryListWsDTO {
    /**
    * Constructs a new <code>CountryListWsDTO</code>.
    * @alias module:models/CountryListWsDTO
    * @class
    */

    constructor() {
        /**
    *
    * @member {Array.<module:models/CountryWsDTO>} countries
    */
        this.countries = undefined
    }

    /**
    * Constructs a <code>CountryListWsDTO</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/CountryListWsDTO} obj Optional instance to populate.
    * @return {module:models/CountryListWsDTO} The populated
    * <code>CountryListWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CountryListWsDTO()

            if (data.hasOwnProperty('countries')) {
                obj.countries = ApiClient.convertToType(data.countries, [CountryWsDTO])
            }
        }
        return obj
    }

}
