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
import PaginationWsDTOModel from './PaginationWsDTOModel';
import PointOfServiceStockWsDTOModel from './PointOfServiceStockWsDTOModel';
import ProductWsDTOModel from './ProductWsDTOModel';
import SortWsDTOModel from './SortWsDTOModel';

/**
* The StoreFinderStockSearchPageWsDTOModel model module.
* @module models/StoreFinderStockSearchPageWsDTOModel
* @version v2
*/
export default class StoreFinderStockSearchPageWsDTOModel {
    /**
    * Constructs a new <code>StoreFinderStockSearchPageWsDTOModel</code>.
    * @alias module:models/StoreFinderStockSearchPageWsDTOModel
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>StoreFinderStockSearchPageWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/StoreFinderStockSearchPageWsDTOModel} obj Optional instance to populate.
    * @return {module:models/StoreFinderStockSearchPageWsDTOModel} The populated <code>StoreFinderStockSearchPageWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoreFinderStockSearchPageWsDTOModel();

            if (data.hasOwnProperty('stores')) {
                obj['stores'] = ApiClient.convertToType(data['stores'], [PointOfServiceStockWsDTOModel]);
            }
            if (data.hasOwnProperty('sorts')) {
                obj['sorts'] = ApiClient.convertToType(data['sorts'], [SortWsDTOModel]);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = PaginationWsDTOModel.constructFromObject(data['pagination']);
            }
            if (data.hasOwnProperty('locationText')) {
                obj['locationText'] = ApiClient.convertToType(data['locationText'], 'String');
            }
            if (data.hasOwnProperty('sourceLatitude')) {
                obj['sourceLatitude'] = ApiClient.convertToType(data['sourceLatitude'], 'Number');
            }
            if (data.hasOwnProperty('sourceLongitude')) {
                obj['sourceLongitude'] = ApiClient.convertToType(data['sourceLongitude'], 'Number');
            }
            if (data.hasOwnProperty('boundNorthLatitude')) {
                obj['boundNorthLatitude'] = ApiClient.convertToType(data['boundNorthLatitude'], 'Number');
            }
            if (data.hasOwnProperty('boundEastLongitude')) {
                obj['boundEastLongitude'] = ApiClient.convertToType(data['boundEastLongitude'], 'Number');
            }
            if (data.hasOwnProperty('boundSouthLatitude')) {
                obj['boundSouthLatitude'] = ApiClient.convertToType(data['boundSouthLatitude'], 'Number');
            }
            if (data.hasOwnProperty('boundWestLongitude')) {
                obj['boundWestLongitude'] = ApiClient.convertToType(data['boundWestLongitude'], 'Number');
            }
            if (data.hasOwnProperty('product')) {
                obj['product'] = ProductWsDTOModel.constructFromObject(data['product']);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {Array.<module:models/PointOfServiceStockWsDTOModel>} stores
    */
    stores = undefined;
    /**
    * 
    * @member {Array.<module:models/SortWsDTOModel>} sorts
    */
    sorts = undefined;
    /**
    * @member {module:models/PaginationWsDTOModel} pagination
    */
    pagination = undefined;
    /**
    * 
    * @member {String} locationText
    */
    locationText = undefined;
    /**
    * 
    * @member {Number} sourceLatitude
    */
    sourceLatitude = undefined;
    /**
    * 
    * @member {Number} sourceLongitude
    */
    sourceLongitude = undefined;
    /**
    * 
    * @member {Number} boundNorthLatitude
    */
    boundNorthLatitude = undefined;
    /**
    * 
    * @member {Number} boundEastLongitude
    */
    boundEastLongitude = undefined;
    /**
    * 
    * @member {Number} boundSouthLatitude
    */
    boundSouthLatitude = undefined;
    /**
    * 
    * @member {Number} boundWestLongitude
    */
    boundWestLongitude = undefined;
    /**
    * @member {module:models/ProductWsDTOModel} product
    */
    product = undefined;

}
