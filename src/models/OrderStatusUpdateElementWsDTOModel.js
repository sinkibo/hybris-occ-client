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
* The OrderStatusUpdateElementWsDTOModel model module.
* @module models/OrderStatusUpdateElementWsDTOModel
* @version v2
*/
export default class OrderStatusUpdateElementWsDTOModel {
    /**
    * Constructs a new <code>OrderStatusUpdateElementWsDTOModel</code>.
    * @alias module:models/OrderStatusUpdateElementWsDTOModel
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>OrderStatusUpdateElementWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/OrderStatusUpdateElementWsDTOModel} obj Optional instance to populate.
    * @return {module:models/OrderStatusUpdateElementWsDTOModel} The populated <code>OrderStatusUpdateElementWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderStatusUpdateElementWsDTOModel();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('baseSiteId')) {
                obj['baseSiteId'] = ApiClient.convertToType(data['baseSiteId'], 'String');
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
    * @member {String} status
    */
    status = undefined;
    /**
    * 
    * @member {String} baseSiteId
    */
    baseSiteId = undefined;

}
