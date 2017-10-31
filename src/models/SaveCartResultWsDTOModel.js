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
import CartWsDTOModel from './CartWsDTOModel';

/**
* The SaveCartResultWsDTOModel model module.
* @module models/SaveCartResultWsDTOModel
* @version v2
*/
export default class SaveCartResultWsDTOModel {
    /**
    * Constructs a new <code>SaveCartResultWsDTOModel</code>.
    * @alias module:models/SaveCartResultWsDTOModel
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>SaveCartResultWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/SaveCartResultWsDTOModel} obj Optional instance to populate.
    * @return {module:models/SaveCartResultWsDTOModel} The populated <code>SaveCartResultWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SaveCartResultWsDTOModel();

            if (data.hasOwnProperty('savedCartData')) {
                obj['savedCartData'] = CartWsDTOModel.constructFromObject(data['savedCartData']);
            }
        }
        return obj;
    }

    /**
    * @member {module:models/CartWsDTOModel} savedCartData
    */
    savedCartData = undefined;

}
