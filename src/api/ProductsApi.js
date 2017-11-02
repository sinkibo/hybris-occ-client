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
import ProductExpressUpdateElementListWsDTO from '../models/ProductExpressUpdateElementListWsDTO'
import ProductReferenceListWsDTO from '../models/ProductReferenceListWsDTO'
import ProductSearchPageWsDTO from '../models/ProductSearchPageWsDTO'
import ProductWsDTO from '../models/ProductWsDTO'
import ReviewListWsDTO from '../models/ReviewListWsDTO'
import ReviewWsDTO208 from '../models/ReviewWsDTO208'
import StockWsDTO from '../models/StockWsDTO'
import StoreFinderStockSearchPageWsDTO from '../models/StoreFinderStockSearchPageWsDTO'
import SuggestionListWsDTO from '../models/SuggestionListWsDTO'

/**
* Products service.
* @module api/ProductsApi
* @version v2
*/
export default class ProductsApi {

    /**
    * Constructs a new ProductsApi.
    * @alias module:api/ProductsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to
    * use, default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }

    /**
     * getProduct Returns details of a single product according to a product
     * code.
     * @param {String} productCode Product identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an
     * object containing data of type {@link module:models/ProductWsDTO} and
     * HTTP response
     */
    productsByProductCodeWithHttpInfo(productCode, opts) {
        opts = opts || {}
        const postBody = null

        // verify the required parameter 'productCode' is set
        if (productCode === undefined || productCode === null) {
            throw new Error('Missing the required parameter \'productCode\' when calling getProduct')
        }

        const pathParams = {
            productCode
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
        const returnType = ProductWsDTO

        return this.apiClient.callApi(
            '/products/{productCode}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * getProduct Returns details of a single product according to a product
     * code.
     * @param {String} productCode Product identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data
     * of type {@link module:models/ProductWsDTO}
     */
    getProduct(productCode, opts) {
        return this.productsByProductCodeWithHttpInfo(productCode, opts)
            .then((response) => {
                return response.data
            })
    }

    /**
     * getProductExpressupdate Returns products added to the express update
     * feed. Returns only elements updated after the provided timestamp.The
     * queue is cleared using a defined cronjob.  Security: Permitted only for
     * trusted client
     * @param {Object} opts Optional parameters
     * @param {String} opts.catalog Only products from this catalog are
     * returned. Format: &lt;b&gt;catalogId:catalogVersion&lt;/b&gt;
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @param {String} opts.timestamp Only items newer than the given parameter
     * are retrieved from the queue. This parameter should be in RFC-8601
     * format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an
     * object containing data of type
     * {@link module:models/ProductExpressUpdateElementListWsDTO} and HTTP
     * response
     */
    productsExpressupdateWithHttpInfo(opts) {
        opts = opts || {}
        const postBody = null

        const pathParams = {
        }
        const queryParams = {
            catalog: opts.catalog,
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
        const returnType = ProductExpressUpdateElementListWsDTO

        return this.apiClient.callApi(
            '/products/expressupdate', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * getProductExpressupdate Returns products added to the express update
     * feed. Returns only elements updated after the provided timestamp.The
     * queue is cleared using a defined cronjob.  Security: Permitted only for
     * trusted client
     * @param {Object} opts Optional parameters
     * @param {String} opts.catalog Only products from this catalog are
     * returned. Format: &lt;b&gt;catalogId:catalogVersion&lt;/b&gt;
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @param {String} opts.timestamp Only items newer than the given parameter
     * are retrieved from the queue. This parameter should be in RFC-8601
     * format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data
     * of type {@link module:models/ProductExpressUpdateElementListWsDTO}
     */
    getProductExpressupdate(opts) {
        return this.productsExpressupdateWithHttpInfo(opts)
            .then((response) => {
                return response.data
            })
    }

    /**
     * getProductReferences Returns references for a product with a given
     * product code. Reference type specifies which references to return.
     * Security: Permitted only for trusted client
     * @param {String} productCode Product identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.pageSize Maximum size of returned results.
     * @param {String} opts.referenceType Reference type according to enum
     * ProductReferenceTypeEnum
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an
     * object containing data of type
     * {@link module:models/ProductReferenceListWsDTO} and HTTP response
     */
    productsReferencesByProductCodeWithHttpInfo(productCode, opts) {
        opts = opts || {}
        const postBody = null

        // verify the required parameter 'productCode' is set
        if (productCode === undefined || productCode === null) {
            throw new Error('Missing the required parameter \'productCode\' when calling getProductReferences')
        }

        const pathParams = {
            productCode
        }
        const queryParams = {
            pageSize: opts.pageSize,
            referenceType: opts.referenceType,
            fields: opts.fields
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['auth']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = ProductReferenceListWsDTO

        return this.apiClient.callApi(
            '/products/{productCode}/references', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * getProductReferences Returns references for a product with a given
     * product code. Reference type specifies which references to return.
     * Security: Permitted only for trusted client
     * @param {String} productCode Product identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.pageSize Maximum size of returned results.
     * @param {String} opts.referenceType Reference type according to enum
     * ProductReferenceTypeEnum
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data
     * of type {@link module:models/ProductReferenceListWsDTO}
     */
    getProductReferences(productCode, opts) {
        return this.productsReferencesByProductCodeWithHttpInfo(productCode, opts)
            .then((response) => {
                return response.data
            })
    }

    /**
     * getProductReviews Returns the reviews for a product with a given product
     * code.
     * @param {String} productCode Product identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an
     * object containing data of type {@link module:models/ReviewListWsDTO} and
     * HTTP response
     */
    productsReviewsByProductCodeWithHttpInfo(productCode) {
        const postBody = null

        // verify the required parameter 'productCode' is set
        if (productCode === undefined || productCode === null) {
            throw new Error('Missing the required parameter \'productCode\' when calling getProductReviews')
        }

        const pathParams = {
            productCode
        }
        const queryParams = {
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['auth']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = ReviewListWsDTO

        return this.apiClient.callApi(
            '/products/{productCode}/reviews', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * getProductReviews Returns the reviews for a product with a given product
     * code.
     * @param {String} productCode Product identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data
     * of type {@link module:models/ReviewListWsDTO}
     */
    getProductReviews(productCode) {
        return this.productsReviewsByProductCodeWithHttpInfo(productCode)
            .then((response) => {
                return response.data
            })
    }

    /**
     * postProductReview Creates a new customer review as an anonymous user.
     * @param {String} productCode Product identifier
     * @param {module:models/ReviewWsDTO208} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an
     * object containing data of type {@link module:models/ReviewWsDTO208} and
     * HTTP response
     */
    productsReviewsByProductCode1WithHttpInfo(productCode, body, opts) {
        opts = opts || {}
        const postBody = body

        // verify the required parameter 'productCode' is set
        if (productCode === undefined || productCode === null) {
            throw new Error('Missing the required parameter \'productCode\' when calling postProductReview')
        }

        // verify the required parameter 'body' is set
        if (body === undefined || body === null) {
            throw new Error('Missing the required parameter \'body\' when calling postProductReview')
        }

        const pathParams = {
            productCode
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
        const returnType = ReviewWsDTO208

        return this.apiClient.callApi(
            '/products/{productCode}/reviews', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * postProductReview Creates a new customer review as an anonymous user.
     * @param {String} productCode Product identifier
     * @param {module:models/ReviewWsDTO208} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data
     * of type {@link module:models/ReviewWsDTO208}
     */
    postProductReview(productCode, body, opts) {
        return this.productsReviewsByProductCode1WithHttpInfo(productCode, body, opts)
            .then((response) => {
                return response.data
            })
    }

    /**
     * ProductsSearch Returns a list of products and additional data such as:
     * available facets, available sorting and pagination options. It can
     * include spelling suggestions.To make spelling suggestions work you need
     * to: &lt;ul&gt; &lt;li&gt;Make sure enableSpellCheck on the SearchQuery is
     * set to true. By default it should be already set to true. &lt;/li&gt;
     * &lt;li&gt;Have indexed properties configured to be used for
     * spellchecking.&lt;/li&gt; &lt;/ul&gt;
     * @param {Object} opts Optional parameters
     * @param {String} opts.query Serialized query, free text search,
     * facets.&lt;br&gt; The format of a serialized query:
     * &lt;b&gt;freeTextSearch:sort:facetKey1:facetValue1:facetKey2:facetValue2&lt;/b&gt;
     * @param {String} opts.pageSize The number of results returned per page.
     * @param {String} opts.sort Sorting method applied to the display search
     * results.
     * @param {String} opts.currentPage The current result page requested.
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an
     * object containing data of type
     * {@link module:models/ProductSearchPageWsDTO} and HTTP response
     */
    productsSearch1WithHttpInfo(opts) {
        opts = opts || {}
        const postBody = null

        const pathParams = {
        }
        const queryParams = {
            query: opts.query,
            pageSize: opts.pageSize,
            sort: opts.sort,
            currentPage: opts.currentPage,
            fields: opts.fields
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['auth']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = ProductSearchPageWsDTO

        return this.apiClient.callApi(
            '/products/search', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * ProductsSearch Returns a list of products and additional data such as:
     * available facets, available sorting and pagination options. It can
     * include spelling suggestions.To make spelling suggestions work you need
     * to: &lt;ul&gt; &lt;li&gt;Make sure enableSpellCheck on the SearchQuery is
     * set to true. By default it should be already set to true. &lt;/li&gt;
     * &lt;li&gt;Have indexed properties configured to be used for
     * spellchecking.&lt;/li&gt; &lt;/ul&gt;
     * @param {Object} opts Optional parameters
     * @param {String} opts.query Serialized query, free text search,
     * facets.&lt;br&gt; The format of a serialized query:
     * &lt;b&gt;freeTextSearch:sort:facetKey1:facetValue1:facetKey2:facetValue2&lt;/b&gt;
     * @param {String} opts.pageSize The number of results returned per page.
     * @param {String} opts.sort Sorting method applied to the display search
     * results.
     * @param {String} opts.currentPage The current result page requested.
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data
     * of type {@link module:models/ProductSearchPageWsDTO}
     */
    getProductSearch(opts) {
        return this.productsSearch1WithHttpInfo(opts)
            .then((response) => {
                return response.data
            })
    }

    /**
     * ProductsStockByProductCode Returns product&#39;s stock levels sorted by
     * distance from specific location passed by free-text parameter or
     * longitude and latitude parameters. The following two sets of parameters
     * are available: &lt;ul&gt; &lt;li&gt;location (required), currentPage
     * (optional), pageSize (optional) or&lt;/li&gt;&gt; &lt;li&gt;longitude
     * (required), latitude (required), currentPage (optional),
     * pageSize(optional).&lt;/li&gt; &lt;/ul&gt;
     * @param {String} productCode Product identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.latitude Longitude location parameter.
     * @param {String} opts.pageSize The number of results returned per page.
     * @param {String} opts.location Free-text location
     * @param {String} opts.currentPage The current result page requested.
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @param {String} opts.longitude Latitude location parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an
     * object containing data of type
     * {@link module:models/StoreFinderStockSearchPageWsDTO} and HTTP response
     */
    productsStockByProductCode1WithHttpInfo(productCode, opts) {
        opts = opts || {}
        const postBody = null

        // verify the required parameter 'productCode' is set
        if (productCode === undefined || productCode === null) {
            throw new Error('Missing the required parameter \'productCode\' when calling getProductStock')
        }

        const pathParams = {
            productCode
        }
        const queryParams = {
            latitude: opts.latitude,
            pageSize: opts.pageSize,
            location: opts.location,
            currentPage: opts.currentPage,
            fields: opts.fields,
            longitude: opts.longitude
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['auth']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = StoreFinderStockSearchPageWsDTO

        return this.apiClient.callApi(
            '/products/{productCode}/stock', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * ProductsStockByProductCode Returns product&#39;s stock levels sorted by
     * distance from specific location passed by free-text parameter or
     * longitude and latitude parameters. The following two sets of parameters
     * are available: &lt;ul&gt; &lt;li&gt;location (required), currentPage
     * (optional), pageSize (optional) or&lt;/li&gt;&gt; &lt;li&gt;longitude
     * (required), latitude (required), currentPage (optional),
     * pageSize(optional).&lt;/li&gt; &lt;/ul&gt;
     * @param {String} productCode Product identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.latitude Longitude location parameter.
     * @param {String} opts.pageSize The number of results returned per page.
     * @param {String} opts.location Free-text location
     * @param {String} opts.currentPage The current result page requested.
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @param {String} opts.longitude Latitude location parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data
     * of type {@link module:models/StoreFinderStockSearchPageWsDTO}
     */
    getProductStock(productCode, opts) {
        return this.productsStockByProductCode1WithHttpInfo(productCode, opts)
            .then((response) => {
                return response.data
            })
    }

    /**
     * getProductsStockByProductCodeAndStoreName Returns product&#39;s stock
     * level for a particular store (POS).
     * @param {String} productCode Product identifier
     * @param {String} storeName Store identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an
     * object containing data of type {@link module:models/StockWsDTO} and HTTP
     * response
     */
    productsStockByProductCodeAndStoreNameWithHttpInfo(productCode, storeName, opts) {
        opts = opts || {}
        const postBody = null

        // verify the required parameter 'productCode' is set
        if (productCode === undefined || productCode === null) {
            throw new Error('Missing the required parameter \'productCode\' when calling getProductsStockByProductCodeAndStoreName')
        }

        // verify the required parameter 'storeName' is set
        if (storeName === undefined || storeName === null) {
            throw new Error('Missing the required parameter \'storeName\' when calling getProductsStockByProductCodeAndStoreName')
        }

        const pathParams = {
            productCode,
            storeName
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
        const returnType = StockWsDTO

        return this.apiClient.callApi(
            '/products/{productCode}/stock/{storeName}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * getProductsStockByProductCodeAndStoreName Returns product&#39;s stock
     * level for a particular store (POS).
     * @param {String} productCode Product identifier
     * @param {String} storeName Store identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data
     * of type {@link module:models/StockWsDTO}
     */
    getProductsStockByProductCodeAndStoreName(productCode, storeName, opts) {
        return this.productsStockByProductCodeAndStoreNameWithHttpInfo(productCode, storeName, opts)
            .then((response) => {
                return response.data
            })
    }

    /**
     * getProductSuggestions Returns a list of all available suggestions related
     * to a given term and limits the results to a specific value of the max
     * parameter.
     * @param {String} max Specifies the limit of results.
     * @param {String} term Specified term
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an
     * object containing data of type {@link module:models/SuggestionListWsDTO}
     * and HTTP response
     */
    productsSuggestionsWithHttpInfo(max, term, opts) {
        opts = opts || {}
        const postBody = null

        // verify the required parameter 'max' is set
        if (max === undefined || max === null) {
            throw new Error('Missing the required parameter \'max\' when calling getProductSuggestions')
        }

        // verify the required parameter 'term' is set
        if (term === undefined || term === null) {
            throw new Error('Missing the required parameter \'term\' when calling getProductSuggestions')
        }

        const pathParams = {
        }
        const queryParams = {
            max,
            term,
            fields: opts.fields
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['auth']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = SuggestionListWsDTO

        return this.apiClient.callApi(
            '/products/suggestions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * getProductSuggestions Returns a list of all available suggestions related
     * to a given term and limits the results to a specific value of the max
     * parameter.
     * @param {String} max Specifies the limit of results.
     * @param {String} term Specified term
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data
     * of type {@link module:models/SuggestionListWsDTO}
     */
    getProductSuggestions(max, term, opts) {
        return this.productsSuggestionsWithHttpInfo(max, term, opts)
            .then((response) => {
                return response.data
            })
    }

}
