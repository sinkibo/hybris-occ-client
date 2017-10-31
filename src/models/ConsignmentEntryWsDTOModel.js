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
import OrderEntryWsDTOModel from './OrderEntryWsDTOModel';

/**
* The ConsignmentEntryWsDTOModel model module.
* @module models/ConsignmentEntryWsDTOModel
* @version v2
*/
export default class ConsignmentEntryWsDTOModel {
    /**
    * Constructs a new <code>ConsignmentEntryWsDTOModel</code>.
    * @alias module:models/ConsignmentEntryWsDTOModel
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>ConsignmentEntryWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ConsignmentEntryWsDTOModel} obj Optional instance to populate.
    * @return {module:models/ConsignmentEntryWsDTOModel} The populated <code>ConsignmentEntryWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConsignmentEntryWsDTOModel();

            if (data.hasOwnProperty('orderEntry')) {
                obj['orderEntry'] = OrderEntryWsDTOModel.constructFromObject(data['orderEntry']);
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('shippedQuantity')) {
                obj['shippedQuantity'] = ApiClient.convertToType(data['shippedQuantity'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {module:models/OrderEntryWsDTOModel} orderEntry
    */
    orderEntry = undefined;
    /**
    * 
    * @member {Number} quantity
    */
    quantity = undefined;
    /**
    * 
    * @member {Number} shippedQuantity
    */
    shippedQuantity = undefined;

}
