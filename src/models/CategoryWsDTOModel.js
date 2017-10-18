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
import ImageWsDTOModel from './ImageWsDTOModel';





/**
* The CategoryWsDTOModel model module.
* @module models/CategoryWsDTOModel
* @version v2
*/
export default class CategoryWsDTOModel {
    /**
    * Constructs a new <code>CategoryWsDTOModel</code>.
    * @alias module:models/CategoryWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>CategoryWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/CategoryWsDTOModel} obj Optional instance to populate.
    * @return {module:models/CategoryWsDTOModel} The populated <code>CategoryWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CategoryWsDTOModel();

            
            
            

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ImageWsDTOModel.constructFromObject(data['image']);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} code
    */
    code = undefined;
    /**
    * 
    * @member {String} url
    */
    url = undefined;
    /**
    * @member {module:models/ImageWsDTOModel} image
    */
    image = undefined;








}

