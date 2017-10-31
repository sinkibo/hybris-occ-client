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
import TimeWsDTOModel from './TimeWsDTOModel';

/**
* The WeekdayOpeningDayWsDTOModel model module.
* @module models/WeekdayOpeningDayWsDTOModel
* @version v2
*/
export default class WeekdayOpeningDayWsDTOModel {
    /**
    * Constructs a new <code>WeekdayOpeningDayWsDTOModel</code>.
    * @alias module:models/WeekdayOpeningDayWsDTOModel
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>WeekdayOpeningDayWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/WeekdayOpeningDayWsDTOModel} obj Optional instance to populate.
    * @return {module:models/WeekdayOpeningDayWsDTOModel} The populated <code>WeekdayOpeningDayWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WeekdayOpeningDayWsDTOModel();

            if (data.hasOwnProperty('weekDay')) {
                obj['weekDay'] = ApiClient.convertToType(data['weekDay'], 'String');
            }
            if (data.hasOwnProperty('closed')) {
                obj['closed'] = ApiClient.convertToType(data['closed'], 'Boolean');
            }
            if (data.hasOwnProperty('openingTime')) {
                obj['openingTime'] = TimeWsDTOModel.constructFromObject(data['openingTime']);
            }
            if (data.hasOwnProperty('closingTime')) {
                obj['closingTime'] = TimeWsDTOModel.constructFromObject(data['closingTime']);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} weekDay
    */
    weekDay = undefined;
    /**
    * 
    * @member {Boolean} closed
    */
    closed = undefined;
    /**
    * @member {module:models/TimeWsDTOModel} openingTime
    */
    openingTime = undefined;
    /**
    * @member {module:models/TimeWsDTOModel} closingTime
    */
    closingTime = undefined;

}
