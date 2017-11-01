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


import ApiClient from "../ApiClient";
import CountryListWsDTOModel from '../models/CountryListWsDTOModel';

/**
* Deliverycountries service.
* @module api/DeliverycountriesApi
* @version v2
*/
export default class DeliverycountriesApi {

    /**
    * Constructs a new DeliverycountriesApi. 
    * @alias module:api/DeliverycountriesApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * getDeliveryCountries
     * Lists all supported delivery countries for the current store. The list is sorted alphabetically. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/CountryListWsDTOModel} and HTTP response
     */
    deliverycountriesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CountryListWsDTOModel;

      return this.apiClient.callApi(
        '/deliverycountries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * getDeliveryCountries
     * Lists all supported delivery countries for the current store. The list is sorted alphabetically. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/CountryListWsDTOModel}
     */
    getDeliveryCountries(opts) {
      return this.deliverycountriesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
