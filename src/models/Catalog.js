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
import CatalogVersion from './CatalogVersion'

/**
* The Catalog model module.
* @module models/Catalog
* @version v2
*/
export default class Catalog {
    /**
    * Constructs a new <code>Catalog</code>.
    * @alias module:models/Catalog
    * @class
    */

    constructor() {
        /**
    *
    * @member {Array.<module:models/CatalogVersion>} catalogVersions
    */
        this.catalogVersions = undefined
        /**
    *
    * @member {String} id
    */
        this.id = undefined
        /**
    *
    * @member {String} lastModified
    */
        this.lastModified = undefined
        /**
    *
    * @member {String} name
    */
        this.name = undefined
        /**
    *
    * @member {String} url
    */
        this.url = undefined
    }

    /**
    * Constructs a <code>Catalog</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/Catalog} obj Optional instance to populate.
    * @return {module:models/Catalog} The populated
    * <code>Catalog</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Catalog()

            if (data.hasOwnProperty('catalogVersions')) {
                obj.catalogVersions = ApiClient.convertToType(data.catalogVersions, [CatalogVersion])
            }
            if (data.hasOwnProperty('id')) {
                obj.id = ApiClient.convertToType(data.id, 'String')
            }
            if (data.hasOwnProperty('lastModified')) {
                obj.lastModified = ApiClient.convertToType(data.lastModified, 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String')
            }
            if (data.hasOwnProperty('url')) {
                obj.url = ApiClient.convertToType(data.url, 'String')
            }
        }
        return obj
    }

}
