/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/**
 * OCC No description provided (generated by Swagger Codegen
 * https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git Do not edit the class
 * manually.
 *
 */

import ApiClient from '../ApiClient'
import Order from '../models/Order'

/**
* Orders service.
* @module api/OrdersApi
* @version v2
*/
export default class OrdersApi {

    /**
    * Constructs a new OrdersApi.
    * @alias module:api/OrdersApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to
    * use, default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }

    /**
     * getOrder Returns details of a specific order based on order GUID
     * (Globally Unique Identifier) or order CODE. The response contains a
     * detailed order information.  Security: Allowed only for trusted client
     * @param {String} code Order GUID (Globally Unique Identifier) or order
     * CODE
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an
     * object containing data of type {@link module:models/Order} and HTTP
     * response
     */
    ordersByCodeWithHttpInfo(code, opts) {
        opts = opts || {}
        const postBody = null

        // verify the required parameter 'code' is set
        if (code === undefined || code === null) {
            throw new Error('Missing the required parameter \'code\' when calling getOrder')
        }

        const pathParams = {
            code
        }
        const queryParams = {
            fields: opts.fields
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['auth']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = Order

        return this.apiClient.callApi(
            '/orders/{code}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * getOrder Returns details of a specific order based on order GUID
     * (Globally Unique Identifier) or order CODE. The response contains a
     * detailed order information.  Security: Allowed only for trusted client
     * @param {String} code Order GUID (Globally Unique Identifier) or order
     * CODE
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data
     * of type {@link module:models/Order}
     */
    getOrder(code, opts) {
        return this.ordersByCodeWithHttpInfo(code, opts)
            .then((response) => {
                return response.data
            })
    }

}
