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
import SpecialOpeningDayWsDTOModel from './SpecialOpeningDayWsDTOModel';
import WeekdayOpeningDayWsDTOModel from './WeekdayOpeningDayWsDTOModel';





/**
* The OpeningScheduleWsDTOModel model module.
* @module models/OpeningScheduleWsDTOModel
* @version v2
*/
export default class OpeningScheduleWsDTOModel {
    /**
    * Constructs a new <code>OpeningScheduleWsDTOModel</code>.
    * @alias module:models/OpeningScheduleWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>OpeningScheduleWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/OpeningScheduleWsDTOModel} obj Optional instance to populate.
    * @return {module:models/OpeningScheduleWsDTOModel} The populated <code>OpeningScheduleWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OpeningScheduleWsDTOModel();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('weekDayOpeningList')) {
                obj['weekDayOpeningList'] = ApiClient.convertToType(data['weekDayOpeningList'], [WeekdayOpeningDayWsDTOModel]);
            }
            if (data.hasOwnProperty('specialDayOpeningList')) {
                obj['specialDayOpeningList'] = ApiClient.convertToType(data['specialDayOpeningList'], [SpecialOpeningDayWsDTOModel]);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} name
    */
    name = undefined;
    /**
    * 
    * @member {String} code
    */
    code = undefined;
    /**
    * 
    * @member {Array.<module:models/WeekdayOpeningDayWsDTOModel>} weekDayOpeningList
    */
    weekDayOpeningList = undefined;
    /**
    * 
    * @member {Array.<module:models/SpecialOpeningDayWsDTOModel>} specialDayOpeningList
    */
    specialDayOpeningList = undefined;








}

