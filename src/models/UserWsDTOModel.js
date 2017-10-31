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
import AddressWsDTOModel from './AddressWsDTOModel';
import CurrencyWsDTOModel from './CurrencyWsDTOModel';
import LanguageWsDTOModel from './LanguageWsDTOModel';

/**
* The UserWsDTOModel model module.
* @module models/UserWsDTOModel
* @version v2
*/
export default class UserWsDTOModel {
    /**
    * Constructs a new <code>UserWsDTOModel</code>.
    * @alias module:models/UserWsDTOModel
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>UserWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/UserWsDTOModel} obj Optional instance to populate.
    * @return {module:models/UserWsDTOModel} The populated <code>UserWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserWsDTOModel();

            if (data.hasOwnProperty('defaultAddress')) {
                obj['defaultAddress'] = AddressWsDTOModel.constructFromObject(data['defaultAddress']);
            }
            if (data.hasOwnProperty('titleCode')) {
                obj['titleCode'] = ApiClient.convertToType(data['titleCode'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = CurrencyWsDTOModel.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = LanguageWsDTOModel.constructFromObject(data['language']);
            }
            if (data.hasOwnProperty('displayUid')) {
                obj['displayUid'] = ApiClient.convertToType(data['displayUid'], 'String');
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:models/AddressWsDTOModel} defaultAddress
    */
    defaultAddress = undefined;
    /**
    * 
    * @member {String} titleCode
    */
    titleCode = undefined;
    /**
    * 
    * @member {String} title
    */
    title = undefined;
    /**
    * 
    * @member {String} firstName
    */
    firstName = undefined;
    /**
    * 
    * @member {String} lastName
    */
    lastName = undefined;
    /**
    * @member {module:models/CurrencyWsDTOModel} currency
    */
    currency = undefined;
    /**
    * @member {module:models/LanguageWsDTOModel} language
    */
    language = undefined;
    /**
    * 
    * @member {String} displayUid
    */
    displayUid = undefined;
    /**
    * 
    * @member {String} uid
    */
    uid = undefined;
    /**
    * 
    * @member {String} name
    */
    name = undefined;

}
