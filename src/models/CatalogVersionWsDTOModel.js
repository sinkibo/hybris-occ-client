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
import CategoryHierarchyWsDTOModel from './CategoryHierarchyWsDTOModel';





/**
* The CatalogVersionWsDTOModel model module.
* @module models/CatalogVersionWsDTOModel
* @version v2
*/
export default class CatalogVersionWsDTOModel {
    /**
    * Constructs a new <code>CatalogVersionWsDTOModel</code>.
    * @alias module:models/CatalogVersionWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>CatalogVersionWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/CatalogVersionWsDTOModel} obj Optional instance to populate.
    * @return {module:models/CatalogVersionWsDTOModel} The populated <code>CatalogVersionWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CatalogVersionWsDTOModel();

            
            
            

            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], [CategoryHierarchyWsDTOModel]);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('lastModified')) {
                obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
    * 
    * @member {Array.<module:models/CategoryHierarchyWsDTOModel>} categories
    */
    categories = undefined;
    /**
    * 
    * @member {String} id
    */
    id = undefined;
    /**
    * 
    * @member {String} lastModified
    */
    lastModified = undefined;
    /**
    * 
    * @member {String} name
    */
    name = undefined;
    /**
    * 
    * @member {String} url
    */
    url = undefined;








}

