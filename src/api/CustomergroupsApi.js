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
import MemberListWsDTOModel from '../models/MemberListWsDTOModel';
import UserGroupListWsDTOModel from '../models/UserGroupListWsDTOModel';
import UserGroupWsDTO17Model from '../models/UserGroupWsDTO17Model';
import UserGroupWsDTOModel from '../models/UserGroupWsDTOModel';

/**
* Customergroups service.
* @module api/CustomergroupsApi
* @version v2
*/
export default class CustomergroupsApi {

    /**
    * Constructs a new CustomergroupsApi. 
    * @alias module:api/CustomergroupsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * getCustomergroups
     * Returns all customer groups that are direct subgroups of a customergroup.  Security: Permitted only for customer managers 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pageSize Number of customer group returned in one page
     * @param {String} opts.currentPage Current page number (starts with 0)
     * @param {String} opts.fields Response configuration (list of fields, which should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/UserGroupListWsDTOModel} and HTTP response
     */
    customergroupsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'pageSize': opts['pageSize'],
        'currentPage': opts['currentPage'],
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserGroupListWsDTOModel;

      return this.apiClient.callApi(
        '/customergroups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * getCustomergroups
     * Returns all customer groups that are direct subgroups of a customergroup.  Security: Permitted only for customer managers 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pageSize Number of customer group returned in one page
     * @param {String} opts.currentPage Current page number (starts with 0)
     * @param {String} opts.fields Response configuration (list of fields, which should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/UserGroupListWsDTOModel}
     */
    getCustomergroups(opts) {
      return this.customergroupsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Customergroups
     * Creates a new customer group that is a direct subgroup of a customergroup.  Security: Permitted only for customer managers 
     * @param {module:models/UserGroupWsDTOModel} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    customergroups1WithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postCustomergroup");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/customergroups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Customergroups
     * Creates a new customer group that is a direct subgroup of a customergroup.  Security: Permitted only for customer managers 
     * @param {module:models/UserGroupWsDTOModel} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    postCustomergroup(body) {
      return this.customergroups1WithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * getCustomergroup
     * Returns a customer group with a specific groupId.  Security: Permitted only for customer managers 
     * @param {String} groupId Group identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/UserGroupWsDTO17Model} and HTTP response
     */
    customergroupsByGroupIdWithHttpInfo(groupId, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getCustomergroup");
      }


      let pathParams = {
        'groupId': groupId
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
      let returnType = UserGroupWsDTO17Model;

      return this.apiClient.callApi(
        '/customergroups/{groupId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * getCustomergroup
     * Returns a customer group with a specific groupId.  Security: Permitted only for customer managers 
     * @param {String} groupId Group identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/UserGroupWsDTO17Model}
     */
    getCustomergroup(groupId, opts) {
      return this.customergroupsByGroupIdWithHttpInfo(groupId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * putCustomergroupsMembers
     * Sets members for a user group. The list of existing members is overwritten with a new one.  Security: Permitted only for customer managers 
     * @param {String} groupId Group identifier
     * @param {module:models/MemberListWsDTOModel} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    customergroupsMembersByGroupIdWithHttpInfo(groupId, body) {
      let postBody = body;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling putCustomergroupsMembers");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putCustomergroupsMembers");
      }


      let pathParams = {
        'groupId': groupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/customergroups/{groupId}/members', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * putCustomergroupsMembers
     * Sets members for a user group. The list of existing members is overwritten with a new one.  Security: Permitted only for customer managers 
     * @param {String} groupId Group identifier
     * @param {module:models/MemberListWsDTOModel} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    putCustomergroupsMembers(groupId, body) {
      return this.customergroupsMembersByGroupIdWithHttpInfo(groupId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * patchCustomergroupsMembers
     * Assigns user(s) to a customer group.  Security: Permitted only for customer managers 
     * @param {String} groupId Group identifier
     * @param {module:models/MemberListWsDTOModel} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    customergroupsMembersByGroupId1WithHttpInfo(groupId, body) {
      let postBody = body;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling patchCustomergroupsMembers");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchCustomergroupsMembers");
      }


      let pathParams = {
        'groupId': groupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/customergroups/{groupId}/members', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * patchCustomergroupsMembers
     * Assigns user(s) to a customer group.  Security: Permitted only for customer managers 
     * @param {String} groupId Group identifier
     * @param {module:models/MemberListWsDTOModel} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    patchCustomergroupsMembers(groupId, body) {
      return this.customergroupsMembersByGroupId1WithHttpInfo(groupId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * deleteCustomergroupsMember
     * Removes user from a customer group.  Security: Permitted only for customer managers 
     * @param {String} groupId Group identifier
     * @param {String} userId User identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    customergroupsMembersByGroupIdAndUserIdWithHttpInfo(groupId, userId) {
      let postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling deleteCustomergroupsMember");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteCustomergroupsMember");
      }


      let pathParams = {
        'groupId': groupId,
        'userId': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/customergroups/{groupId}/members/{userId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * deleteCustomergroupsMember
     * Removes user from a customer group.  Security: Permitted only for customer managers 
     * @param {String} groupId Group identifier
     * @param {String} userId User identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCustomergroupsMember(groupId, userId) {
      return this.customergroupsMembersByGroupIdAndUserIdWithHttpInfo(groupId, userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
