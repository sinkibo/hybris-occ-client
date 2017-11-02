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
import OrderStatusUpdateElementListWsDTO from '../models/OrderStatusUpdateElementListWsDTO'

/**
* Feeds service.
* @module api/FeedsApi
* @version v2
*/
export default class FeedsApi {

    /**
    * Constructs a new FeedsApi.
    * @alias module:api/FeedsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to
    * use, default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }

    /**
     * getOrdersStatusfeed Returns the orders the status has changed for.
     * Returns only the elements from the current baseSite, updated after the
     * provided timestamp.  Security: Allowed only for trusted client
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @param {String} opts.timestamp Only items newer than the given parameter
     * are retrieved. This parameter should be in RFC-8601 format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an
     * object containing data of type
     * {@link module:models/OrderStatusUpdateElementListWsDTO} and HTTP response
     */
    feedsOrdersStatusfeedWithHttpInfo(opts) {
        opts = opts || {}
        const postBody = null

        const pathParams = {
        }
        const queryParams = {
            fields: opts.fields,
            timestamp: opts.timestamp
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['auth']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = OrderStatusUpdateElementListWsDTO

        return this.apiClient.callApi(
            '/feeds/orders/statusfeed', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * getOrdersStatusfeed Returns the orders the status has changed for.
     * Returns only the elements from the current baseSite, updated after the
     * provided timestamp.  Security: Allowed only for trusted client
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @param {String} opts.timestamp Only items newer than the given parameter
     * are retrieved. This parameter should be in RFC-8601 format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data
     * of type {@link module:models/OrderStatusUpdateElementListWsDTO}
     */
    getOrdersStatusfeed(opts) {
        return this.feedsOrdersStatusfeedWithHttpInfo(opts)
            .then((response) => {
                return response.data
            })
    }

}
