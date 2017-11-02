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
import CountryOCC from './CountryOCC'
import RegionOCC from './RegionOCC'

/**
* The Address model module.
* @module models/Address
* @version v2
*/
export default class Address {
    /**
    * Constructs a new <code>Address</code>.
    * @alias module:models/Address
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} id
    */
        this.id = undefined
        /**
    *
    * @member {String} title
    */
        this.title = undefined
        /**
    *
    * @member {String} titleCode
    */
        this.titleCode = undefined
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
    *
    * @member {String} companyName
    */
        this.companyName = undefined
        /**
    *
    * @member {String} line1
    */
        this.line1 = undefined
        /**
    *
    * @member {String} line2
    */
        this.line2 = undefined
        /**
    *
    * @member {String} town
    */
        this.town = undefined
        /**
    * @member {module:models/RegionOCC} region
    */
        this.region = undefined
        /**
    *
    * @member {String} postalCode
    */
        this.postalCode = undefined
        /**
    *
    * @member {String} phone
    */
        this.phone = undefined
        /**
    *
    * @member {String} email
    */
        this.email = undefined
        /**
    * @member {module:models/CountryOCC} country
    */
        this.country = undefined
        /**
    *
    * @member {Boolean} shippingAddress
    */
        this.shippingAddress = undefined
        /**
    *
    * @member {Boolean} visibleInAddressBook
    */
        this.visibleInAddressBook = undefined
        /**
    *
    * @member {String} formattedAddress
    */
        this.formattedAddress = undefined
    }

    /**
    * Constructs a <code>Address</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/Address} obj Optional instance to populate.
    * @return {module:models/Address} The populated
    * <code>Address</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Address()

            if (data.hasOwnProperty('id')) {
                obj.id = ApiClient.convertToType(data.id, 'String')
            }
            if (data.hasOwnProperty('title')) {
                obj.title = ApiClient.convertToType(data.title, 'String')
            }
            if (data.hasOwnProperty('titleCode')) {
                obj.titleCode = ApiClient.convertToType(data.titleCode, 'String')
            }
            if (data.hasOwnProperty('firstName')) {
                obj.firstName = ApiClient.convertToType(data.firstName, 'String')
            }
            if (data.hasOwnProperty('lastName')) {
                obj.lastName = ApiClient.convertToType(data.lastName, 'String')
            }
            if (data.hasOwnProperty('companyName')) {
                obj.companyName = ApiClient.convertToType(data.companyName, 'String')
            }
            if (data.hasOwnProperty('line1')) {
                obj.line1 = ApiClient.convertToType(data.line1, 'String')
            }
            if (data.hasOwnProperty('line2')) {
                obj.line2 = ApiClient.convertToType(data.line2, 'String')
            }
            if (data.hasOwnProperty('town')) {
                obj.town = ApiClient.convertToType(data.town, 'String')
            }
            if (data.hasOwnProperty('region')) {
                obj.region = RegionOCC.constructFromObject(data.region)
            }
            if (data.hasOwnProperty('postalCode')) {
                obj.postalCode = ApiClient.convertToType(data.postalCode, 'String')
            }
            if (data.hasOwnProperty('phone')) {
                obj.phone = ApiClient.convertToType(data.phone, 'String')
            }
            if (data.hasOwnProperty('email')) {
                obj.email = ApiClient.convertToType(data.email, 'String')
            }
            if (data.hasOwnProperty('country')) {
                obj.country = CountryOCC.constructFromObject(data.country)
            }
            if (data.hasOwnProperty('shippingAddress')) {
                obj.shippingAddress = ApiClient.convertToType(data.shippingAddress, 'Boolean')
            }
            if (data.hasOwnProperty('visibleInAddressBook')) {
                obj.visibleInAddressBook = ApiClient.convertToType(data.visibleInAddressBook, 'Boolean')
            }
            if (data.hasOwnProperty('formattedAddress')) {
                obj.formattedAddress = ApiClient.convertToType(data.formattedAddress, 'String')
            }
        }
        return obj
    }
}
