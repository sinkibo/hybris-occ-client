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
import BaseOptionWsDTOModel from './BaseOptionWsDTOModel';
import CategoryWsDTOModel from './CategoryWsDTOModel';
import ClassificationWsDTOModel from './ClassificationWsDTOModel';
import FutureStockWsDTOModel from './FutureStockWsDTOModel';
import ImageWsDTOModel from './ImageWsDTOModel';
import PriceWsDTOModel from './PriceWsDTOModel';
import PromotionWsDTOModel from './PromotionWsDTOModel';
import ReviewWsDTOModel from './ReviewWsDTOModel';
import StockWsDTOModel from './StockWsDTOModel';
import VariantOptionWsDTOModel from './VariantOptionWsDTOModel';

/**
* The ProductWsDTOModel model module.
* @module models/ProductWsDTOModel
* @version v2
*/
export default class ProductWsDTOModel {
    /**
    * Constructs a new <code>ProductWsDTOModel</code>.
    * @alias module:models/ProductWsDTOModel
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>ProductWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ProductWsDTOModel} obj Optional instance to populate.
    * @return {module:models/ProductWsDTOModel} The populated <code>ProductWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductWsDTOModel();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('purchasable')) {
                obj['purchasable'] = ApiClient.convertToType(data['purchasable'], 'Boolean');
            }
            if (data.hasOwnProperty('stock')) {
                obj['stock'] = StockWsDTOModel.constructFromObject(data['stock']);
            }
            if (data.hasOwnProperty('futureStocks')) {
                obj['futureStocks'] = ApiClient.convertToType(data['futureStocks'], [FutureStockWsDTOModel]);
            }
            if (data.hasOwnProperty('availableForPickup')) {
                obj['availableForPickup'] = ApiClient.convertToType(data['availableForPickup'], 'Boolean');
            }
            if (data.hasOwnProperty('averageRating')) {
                obj['averageRating'] = ApiClient.convertToType(data['averageRating'], 'Number');
            }
            if (data.hasOwnProperty('numberOfReviews')) {
                obj['numberOfReviews'] = ApiClient.convertToType(data['numberOfReviews'], 'Number');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('manufacturer')) {
                obj['manufacturer'] = ApiClient.convertToType(data['manufacturer'], 'String');
            }
            if (data.hasOwnProperty('variantType')) {
                obj['variantType'] = ApiClient.convertToType(data['variantType'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = PriceWsDTOModel.constructFromObject(data['price']);
            }
            if (data.hasOwnProperty('baseProduct')) {
                obj['baseProduct'] = ApiClient.convertToType(data['baseProduct'], 'String');
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], [ImageWsDTOModel]);
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], [CategoryWsDTOModel]);
            }
            if (data.hasOwnProperty('reviews')) {
                obj['reviews'] = ApiClient.convertToType(data['reviews'], [ReviewWsDTOModel]);
            }
            if (data.hasOwnProperty('classifications')) {
                obj['classifications'] = ApiClient.convertToType(data['classifications'], [ClassificationWsDTOModel]);
            }
            if (data.hasOwnProperty('potentialPromotions')) {
                obj['potentialPromotions'] = ApiClient.convertToType(data['potentialPromotions'], [PromotionWsDTOModel]);
            }
            if (data.hasOwnProperty('variantOptions')) {
                obj['variantOptions'] = ApiClient.convertToType(data['variantOptions'], [VariantOptionWsDTOModel]);
            }
            if (data.hasOwnProperty('baseOptions')) {
                obj['baseOptions'] = ApiClient.convertToType(data['baseOptions'], [BaseOptionWsDTOModel]);
            }
            if (data.hasOwnProperty('volumePricesFlag')) {
                obj['volumePricesFlag'] = ApiClient.convertToType(data['volumePricesFlag'], 'Boolean');
            }
            if (data.hasOwnProperty('volumePrices')) {
                obj['volumePrices'] = ApiClient.convertToType(data['volumePrices'], [PriceWsDTOModel]);
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
    * @member {String} name
    */
    name = undefined;
    /**
    * 
    * @member {String} url
    */
    url = undefined;
    /**
    * 
    * @member {String} description
    */
    description = undefined;
    /**
    * 
    * @member {Boolean} purchasable
    */
    purchasable = undefined;
    /**
    * @member {module:models/StockWsDTOModel} stock
    */
    stock = undefined;
    /**
    * 
    * @member {Array.<module:models/FutureStockWsDTOModel>} futureStocks
    */
    futureStocks = undefined;
    /**
    * 
    * @member {Boolean} availableForPickup
    */
    availableForPickup = undefined;
    /**
    * 
    * @member {Number} averageRating
    */
    averageRating = undefined;
    /**
    * 
    * @member {Number} numberOfReviews
    */
    numberOfReviews = undefined;
    /**
    * 
    * @member {String} summary
    */
    summary = undefined;
    /**
    * 
    * @member {String} manufacturer
    */
    manufacturer = undefined;
    /**
    * 
    * @member {String} variantType
    */
    variantType = undefined;
    /**
    * @member {module:models/PriceWsDTOModel} price
    */
    price = undefined;
    /**
    * 
    * @member {String} baseProduct
    */
    baseProduct = undefined;
    /**
    * 
    * @member {Array.<module:models/ImageWsDTOModel>} images
    */
    images = undefined;
    /**
    * 
    * @member {Array.<module:models/CategoryWsDTOModel>} categories
    */
    categories = undefined;
    /**
    * 
    * @member {Array.<module:models/ReviewWsDTOModel>} reviews
    */
    reviews = undefined;
    /**
    * 
    * @member {Array.<module:models/ClassificationWsDTOModel>} classifications
    */
    classifications = undefined;
    /**
    * 
    * @member {Array.<module:models/PromotionWsDTOModel>} potentialPromotions
    */
    potentialPromotions = undefined;
    /**
    * 
    * @member {Array.<module:models/VariantOptionWsDTOModel>} variantOptions
    */
    variantOptions = undefined;
    /**
    * 
    * @member {Array.<module:models/BaseOptionWsDTOModel>} baseOptions
    */
    baseOptions = undefined;
    /**
    * 
    * @member {Boolean} volumePricesFlag
    */
    volumePricesFlag = undefined;
    /**
    * 
    * @member {Array.<module:models/PriceWsDTOModel>} volumePrices
    */
    volumePrices = undefined;

}
