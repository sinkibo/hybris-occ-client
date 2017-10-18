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
import VariantOptionWsDTOModel from './VariantOptionWsDTOModel';





/**
* The BaseOptionWsDTOModel model module.
* @module models/BaseOptionWsDTOModel
* @version v2
*/
export default class BaseOptionWsDTOModel {
    /**
    * Constructs a new <code>BaseOptionWsDTOModel</code>.
    * @alias module:models/BaseOptionWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>BaseOptionWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/BaseOptionWsDTOModel} obj Optional instance to populate.
    * @return {module:models/BaseOptionWsDTOModel} The populated <code>BaseOptionWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseOptionWsDTOModel();

            
            
            

            if (data.hasOwnProperty('variantType')) {
                obj['variantType'] = ApiClient.convertToType(data['variantType'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [VariantOptionWsDTOModel]);
            }
            if (data.hasOwnProperty('selected')) {
                obj['selected'] = VariantOptionWsDTOModel.constructFromObject(data['selected']);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} variantType
    */
    variantType = undefined;
    /**
    * 
    * @member {Array.<module:models/VariantOptionWsDTOModel>} options
    */
    options = undefined;
    /**
    * @member {module:models/VariantOptionWsDTOModel} selected
    */
    selected = undefined;








}

