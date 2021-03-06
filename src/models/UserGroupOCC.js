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
import Principal from './Principal'

/**
* The UserGroupOCC model module.
* @module models/UserGroupOCC
* @version v2
*/
export default class UserGroupOCC {
    /**
    * Constructs a new <code>UserGroupOCC</code>.
    * @alias module:models/UserGroupOCC
    * @class
    */

    constructor() {
        /**
    *
    * @member {Array.<module:models/Principal>} members
    */
        this.members = undefined
    }

    /**
    * Constructs a <code>UserGroupOCC</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/UserGroupOCC} obj Optional instance to populate.
    * @return {module:models/UserGroupOCC} The populated
    * <code>UserGroupOCC</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserGroupOCC()

            if (data.hasOwnProperty('members')) {
                obj.members = ApiClient.convertToType(data.members, [Principal])
            }
        }
        return obj
    }

}
