/**
 * OCC
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import UserGroupWsDTO17Model from './UserGroupWsDTO17Model';

/**
* The UserGroupListWsDTOModel model module.
* @module models/UserGroupListWsDTOModel
* @version v2
*/
export default class UserGroupListWsDTOModel {
    /**
    * Constructs a new <code>UserGroupListWsDTOModel</code>.
    * @alias module:models/UserGroupListWsDTOModel
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>UserGroupListWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/UserGroupListWsDTOModel} obj Optional instance to populate.
    * @return {module:models/UserGroupListWsDTOModel} The populated <code>UserGroupListWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserGroupListWsDTOModel();

            if (data.hasOwnProperty('userGroups')) {
                obj['userGroups'] = ApiClient.convertToType(data['userGroups'], [UserGroupWsDTO17Model]);
            }
            if (data.hasOwnProperty('totalNumber')) {
                obj['totalNumber'] = ApiClient.convertToType(data['totalNumber'], 'Number');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
            if (data.hasOwnProperty('numberOfPages')) {
                obj['numberOfPages'] = ApiClient.convertToType(data['numberOfPages'], 'Number');
            }
            if (data.hasOwnProperty('currentPage')) {
                obj['currentPage'] = ApiClient.convertToType(data['currentPage'], 'Number');
            }
        }
        return obj;
    }

    /**
    * 
    * @member {Array.<module:models/UserGroupWsDTO17Model>} userGroups
    */
    userGroups = undefined;
    /**
    * 
    * @member {Number} totalNumber
    */
    totalNumber = undefined;
    /**
    * 
    * @member {Number} pageSize
    */
    pageSize = undefined;
    /**
    * 
    * @member {Number} numberOfPages
    */
    numberOfPages = undefined;
    /**
    * 
    * @member {Number} currentPage
    */
    currentPage = undefined;

}
