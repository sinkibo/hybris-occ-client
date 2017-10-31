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

/**
* The FeatureUnitWsDTOModel model module.
* @module models/FeatureUnitWsDTOModel
* @version v2
*/
export default class FeatureUnitWsDTOModel {
    /**
    * Constructs a new <code>FeatureUnitWsDTOModel</code>.
    * @alias module:models/FeatureUnitWsDTOModel
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>FeatureUnitWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/FeatureUnitWsDTOModel} obj Optional instance to populate.
    * @return {module:models/FeatureUnitWsDTOModel} The populated <code>FeatureUnitWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FeatureUnitWsDTOModel();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('unitType')) {
                obj['unitType'] = ApiClient.convertToType(data['unitType'], 'String');
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} symbol
    */
    symbol = undefined;
    /**
    * 
    * @member {String} name
    */
    name = undefined;
    /**
    * 
    * @member {String} unitType
    */
    unitType = undefined;

}
