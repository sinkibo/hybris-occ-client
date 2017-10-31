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

/**
* The AddressListWsDTOModel model module.
* @module models/AddressListWsDTOModel
* @version v2
*/
export default class AddressListWsDTOModel {
    /**
    * Constructs a new <code>AddressListWsDTOModel</code>.
    * @alias module:models/AddressListWsDTOModel
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>AddressListWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/AddressListWsDTOModel} obj Optional instance to populate.
    * @return {module:models/AddressListWsDTOModel} The populated <code>AddressListWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddressListWsDTOModel();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], [AddressWsDTOModel]);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {Array.<module:models/AddressWsDTOModel>} addresses
    */
    addresses = undefined;

}
