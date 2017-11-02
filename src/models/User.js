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
import Address from './Address'
import CurrencyOCC from './CurrencyOCC'
import LanguageOCC from './LanguageOCC'

/**
* The User model module.
* @module models/User
* @version v2
*/
export default class User {
    /**
    * Constructs a new <code>User</code>.
    * @alias module:models/User
    * @class
    */

    constructor() {
        /**
    * @member {module:models/Address} defaultAddress
    */
        this.defaultAddress = undefined
        /**
    *
    * @member {String} titleCode
    */
        this.titleCode = undefined
        /**
    *
    * @member {String} title
    */
        this.title = undefined
        /**
    *
    * @member {String} firstName
    */
        this.firstName = undefined
        /**
    *
    * @member {String} lastName
    */
        this.lastName = undefined
        /**
    * @member {module:models/CurrencyOCC} currency
    */
        this.currency = undefined
        /**
    * @member {module:models/LanguageOCC} language
    */
        this.language = undefined
        /**
    *
    * @member {String} displayUid
    */
        this.displayUid = undefined
        /**
    *
    * @member {String} uid
    */
        this.uid = undefined
        /**
    *
    * @member {String} name
    */
        this.name = undefined
    }

    /**
    * Constructs a <code>User</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/User} obj Optional instance to populate.
    * @return {module:models/User} The populated <code>User</code>
    * instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User()

            if (data.hasOwnProperty('defaultAddress')) {
                obj.defaultAddress = Address.constructFromObject(data.defaultAddress)
            }
            if (data.hasOwnProperty('titleCode')) {
                obj.titleCode = ApiClient.convertToType(data.titleCode, 'String')
            }
            if (data.hasOwnProperty('title')) {
                obj.title = ApiClient.convertToType(data.title, 'String')
            }
            if (data.hasOwnProperty('firstName')) {
                obj.firstName = ApiClient.convertToType(data.firstName, 'String')
            }
            if (data.hasOwnProperty('lastName')) {
                obj.lastName = ApiClient.convertToType(data.lastName, 'String')
            }
            if (data.hasOwnProperty('currency')) {
                obj.currency = CurrencyOCC.constructFromObject(data.currency)
            }
            if (data.hasOwnProperty('language')) {
                obj.language = LanguageOCC.constructFromObject(data.language)
            }
            if (data.hasOwnProperty('displayUid')) {
                obj.displayUid = ApiClient.convertToType(data.displayUid, 'String')
            }
            if (data.hasOwnProperty('uid')) {
                obj.uid = ApiClient.convertToType(data.uid, 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String')
            }
        }
        return obj
    }



}
