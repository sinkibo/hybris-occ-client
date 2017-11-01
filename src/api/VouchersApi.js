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
import VoucherWsDTOModel from '../models/VoucherWsDTOModel';

/**
* Vouchers service.
* @module api/VouchersApi
* @version v2
*/
export default class VouchersApi {

    /**
    * Constructs a new VouchersApi. 
    * @alias module:api/VouchersApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * getVoucher
     * Returns details of a single voucher according to a voucher code.  Security: Permitted only for trusted client 
     * @param {String} code Voucher identifier (code)
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/VoucherWsDTOModel} and HTTP response
     */
    vouchersByCodeWithHttpInfo(code, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling getVoucher");
      }


      let pathParams = {
        'code': code
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
      let returnType = VoucherWsDTOModel;

      return this.apiClient.callApi(
        '/vouchers/{code}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * getVoucher
     * Returns details of a single voucher according to a voucher code.  Security: Permitted only for trusted client 
     * @param {String} code Voucher identifier (code)
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/VoucherWsDTOModel}
     */
    getVoucher(code, opts) {
      return this.vouchersByCodeWithHttpInfo(code, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
