# occ

Occ - JavaScript client for occ
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v2
- Package version: v2
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install occ --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Occ = require('occ');

var defaultClient = Occ.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = "YOUR ACCESS TOKEN"

var api = new Occ.CardtypesApi()

var opts = { 
  'fields': "fields_example" // {String} Response configuration (list of fields, which should be returned in response)
};
api.cardtypes(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://api-example.hybris.com/rest/v2/DefaultParameterValue/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Occ.CardtypesApi* | [**getCardtypes**](docs/CardtypesApi.md#getCardtypes) | **GET** /cardtypes | getCardtypes
*Occ.CatalogsApi* | [**getCatalogs**](docs/CatalogsApi.md#getCatalogs) | **GET** /catalogs | getCatalogs
*Occ.CatalogsApi* | [**getCatalog**](docs/CatalogsApi.md#getCatalog) | **GET** /catalogs/{catalogId} | getCatalog
*Occ.CatalogsApi* | [**getCatalogsByCatalogIdAndCatalogVersionId**](docs/CatalogsApi.md#getCatalogsByCatalogIdAndCatalogVersionId) | **GET** /catalogs/{catalogId}/{catalogVersionId} | CatalogsByCatalogIdAndCatalogVersionId
*Occ.CatalogsApi* | [**getCategory**](docs/CatalogsApi.md#getCategory) | **GET** /catalogs/{catalogId}/{catalogVersionId}/categories/{categoryId} | getCategory
*Occ.CurrenciesApi* | [**getCurrencies**](docs/CurrenciesApi.md#currencies) | **GET** /currencies | getCurrencies
*Occ.CustomergroupsApi* | [**getCustomergroups**](docs/CustomergroupsApi.md#getCustomergroups) | **GET** /customergroups | getCustomergroups
*Occ.CustomergroupsApi* | [**postCustomergroup**](docs/CustomergroupsApi.md#postCustomergroup) | **POST** /customergroups | Customergroups
*Occ.CustomergroupsApi* | [**getCustomergroup**](docs/CustomergroupsApi.md#getCustomergroup) | **GET** /customergroups/{groupId} | getCustomergroup
*Occ.CustomergroupsApi* | [**putCustomergroupsMembers**](docs/CustomergroupsApi.md#putCustomergroupsMembers) | **PUT** /customergroups/{groupId}/members | putCustomergroupsMembers
*Occ.CustomergroupsApi* | [**patchCustomergroupsMembers**](docs/CustomergroupsApi.md#patchCustomergroupsMembers) | **PATCH** /customergroups/{groupId}/members | patchCustomergroupsMembers
*Occ.CustomergroupsApi* | [**deleteCustomergroupsMember**](docs/CustomergroupsApi.md#deleteCustomergroupsMember) | **DELETE** /customergroups/{groupId}/members/{userId} | deleteCustomergroupsMember
*Occ.DeliverycountriesApi* | [**getDeliverycountries**](docs/DeliverycountriesApi.md#getDeliverycountries) | **GET** /deliverycountries | getDeliverycountries
*Occ.ExportApi* | [**exportProducts**](docs/ExportApi.md#exportProducts) | **GET** /export/products | ExportProducts
*Occ.FeedsApi* | [**getOrdersStatusfeed**](docs/FeedsApi.md#getOrdersStatusfeed) | **GET** /feeds/orders/statusfeed | getOrdersStatusfeed
*Occ.ForgottenpasswordtokensApi* | [**postForgottenPasswordToken**](docs/ForgottenpasswordtokensApi.md#postForgottenPasswordToken) | **POST** /forgottenpasswordtokens | postForgottenPasswordToken
*Occ.LanguagesApi* | [**getLanguages**](docs/LanguagesApi.md#getLanguages) | **GET** /languages | getLanguages
*Occ.OrdersApi* | [**getOrder**](docs/OrdersApi.md#getOrder) | **GET** /orders/{code} | getOrder
*Occ.ProductsApi* | [**getProduct**](docs/ProductsApi.md#getProduct) | **GET** /products/{productCode} | getProduct
*Occ.ProductsApi* | [**getProductExpressupdate**](docs/ProductsApi.md#getProductExpressupdate) | **GET** /products/expressupdate | getProductExpressupdate
*Occ.ProductsApi* | [**getProductReferences**](docs/ProductsApi.md#getProductReferences) | **GET** /products/{productCode}/references | getProductReferences
*Occ.ProductsApi* | [**getProductReviews**](docs/ProductsApi.md#getProductReviews) | **GET** /products/{productCode}/reviews | getProductReviews
*Occ.ProductsApi* | [**postProductReview**](docs/ProductsApi.md#postProductReview) | **POST** /products/{productCode}/reviews | postProductReview
*Occ.ProductsApi* | [**getProductSearch**](docs/ProductsApi.md#getProductSearch) | **GET** /products/search | ProductsSearch
*Occ.ProductsApi* | [**getProductStock**](docs/ProductsApi.md#getProductStock) | **GET** /products/{productCode}/stock | getProductStock
*Occ.ProductsApi* | [**getProductsStockByProductCodeAndStoreName**](docs/ProductsApi.md#getProductsStockByProductCodeAndStoreName) | **GET** /products/{productCode}/stock/{storeName} | getProductsStockByProductCodeAndStoreName
*Occ.ProductsApi* | [**getProductSuggestions**](docs/ProductsApi.md#getProductSuggestions) | **GET** /products/suggestions | getProductSuggestions
*Occ.PromotionsApi* | [**getPromotions**](docs/PromotionsApi.md#promotions) | **GET** /promotions | getPromotions
*Occ.PromotionsApi* | [**getPromotion**](docs/PromotionsApi.md#getPromotion) | **GET** /promotions/{code} | getPromotion
*Occ.StoresApi* | [**getStores**](docs/StoresApi.md#getStores) | **GET** /stores | Stores
*Occ.StoresApi* | [**getStore**](docs/StoresApi.md#getStore) | **GET** /stores/{storeId} | getStore
*Occ.TitlesApi* | [**getTitles**](docs/TitlesApi.md#getTitles) | **GET** /titles | getTitles
*Occ.UsersApi* | [**postUsers**](docs/UsersApi.md#postUsers) | **POST** /users | postUsers
*Occ.UsersApi* | [**getUserAddresses**](docs/UsersApi.md#getUserAddresses) | **GET** /users/{userId}/addresses | getUserAddresses
*Occ.UsersApi* | [**postUserAddress**](docs/UsersApi.md#postUserAddress) | **POST** /users/{userId}/addresses | getUserAddresses
*Occ.UsersApi* | [**getUserAddress**](docs/UsersApi.md#getUserAddress) | **GET** /users/{userId}/addresses/{addressId} | getUserAddress
*Occ.UsersApi* | [**putUserAddress**](docs/UsersApi.md#putUserAddress) | **PUT** /users/{userId}/addresses/{addressId} | getUserAddress
*Occ.UsersApi* | [**patchUserAddress**](docs/UsersApi.md#patchUserAddress) | **PATCH** /users/{userId}/addresses/{addressId} | getUserAddress
*Occ.UsersApi* | [**deleteUserAddress**](docs/UsersApi.md#deleteUserAddress) | **DELETE** /users/{userId}/addresses/{addressId} | getUserAddress
*Occ.UsersApi* | [**postUserAddressesVerification**](docs/UsersApi.md#postUserAddressesVerification) | **POST** /users/{userId}/addresses/verification | postUserAddressesVerification
*Occ.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /users/{userId} | getUser
*Occ.UsersApi* | [**putUser**](docs/UsersApi.md#putUser) | **PUT** /users/{userId} | getUser
*Occ.UsersApi* | [**patchUser**](docs/UsersApi.md#patchUser) | **PATCH** /users/{userId} | getUser
*Occ.UsersApi* | [**deleteUser**](docs/UsersApi.md#deleteUser) | **DELETE** /users/{userId} | getUser
*Occ.UsersApi* | [**postCartDeliveryAddress**](docs/UsersApi.md#postCartDeliveryAddress) | **POST** /users/{userId}/carts/{cartId}/addresses/delivery | postCartDeliveryAddress
*Occ.UsersApi* | [**putCartDeliveryAddress**](docs/UsersApi.md#putCartDeliveryAddress) | **PUT** /users/{userId}/carts/{cartId}/addresses/delivery | postCartDeliveryAddress
*Occ.UsersApi* | [**deleteCartDeliveryAddress**](docs/UsersApi.md#deleteCartDeliveryAddress) | **DELETE** /users/{userId}/carts/{cartId}/addresses/delivery | postCartDeliveryAddress
*Occ.UsersApi* | [**getCarts**](docs/UsersApi.md#getCarts) | **GET** /users/{userId}/carts | getCarts
*Occ.UsersApi* | [**postCart**](docs/UsersApi.md#postCart) | **POST** /users/{userId}/carts | getCarts
*Occ.UsersApi* | [**getCart**](docs/UsersApi.md#getCart) | **GET** /users/{userId}/carts/{cartId} | getCart
*Occ.UsersApi* | [**deleteCart**](docs/UsersApi.md#deleteCart) | **DELETE** /users/{userId}/carts/{cartId} | getCart
*Occ.UsersApi* | [**postCartClonesavedcart**](docs/UsersApi.md#postCartClonesavedcart) | **POST** /users/{userId}/carts/{cartId}/clonesavedcart | postCartClonesavedcart
*Occ.UsersApi* | [**getCartDeliverymode**](docs/UsersApi.md#getCartDeliverymode) | **GET** /users/{userId}/carts/{cartId}/deliverymode | getCartDeliverymode
*Occ.UsersApi* | [**putCartDeliverymode**](docs/UsersApi.md#putCartDeliverymode) | **PUT** /users/{userId}/carts/{cartId}/deliverymode | getCartDeliverymode
*Occ.UsersApi* | [**deleteCartDeliverymode**](docs/UsersApi.md#deleteCartDeliverymode) | **DELETE** /users/{userId}/carts/{cartId}/deliverymode | getCartDeliverymode
*Occ.UsersApi* | [**getCartDeliverymodes**](docs/UsersApi.md#getCartDeliverymodes) | **GET** /users/{userId}/carts/{cartId}/deliverymodes | getCartDeliverymodes
*Occ.UsersApi* | [**putCartEmail**](docs/UsersApi.md#putCartEmail) | **PUT** /users/{userId}/carts/{cartId}/email | putCartEmail
*Occ.UsersApi* | [**getCartEntries**](docs/UsersApi.md#getCartEntries) | **GET** /users/{userId}/carts/{cartId}/entries | getCartEntries
*Occ.UsersApi* | [**postCartEntries**](docs/UsersApi.md#postCartEntries) | **POST** /users/{userId}/carts/{cartId}/entries | getCartEntries
*Occ.UsersApi* | [**getCartEntry**](docs/UsersApi.md#getCartEntry) | **GET** /users/{userId}/carts/{cartId}/entries/{entryNumber} | getCartEntry
*Occ.UsersApi* | [**putCartEntry**](docs/UsersApi.md#putCartEntry) | **PUT** /users/{userId}/carts/{cartId}/entries/{entryNumber} | getCartEntry
*Occ.UsersApi* | [**patchCartEntry**](docs/UsersApi.md#patchCartEntry) | **PATCH** /users/{userId}/carts/{cartId}/entries/{entryNumber} | getCartEntry
*Occ.UsersApi* | [**deleteCartEntry**](docs/UsersApi.md#deleteCartEntry) | **DELETE** /users/{userId}/carts/{cartId}/entries/{entryNumber} | getCartEntry
*Occ.UsersApi* | [**patchCartFlagForDeletion**](docs/UsersApi.md#patchCartFlagForDeletion) | **PATCH** /users/{userId}/carts/{cartId}/flagForDeletion | patchCartFlagForDeletion
*Occ.UsersApi* | [**postCartPaymentdetail**](docs/UsersApi.md#postCartPaymentdetail) | **POST** /users/{userId}/carts/{cartId}/paymentdetails | postCartPaymentdetail
*Occ.UsersApi* | [**putCartPaymentdetail**](docs/UsersApi.md#putCartPaymentdetail) | **PUT** /users/{userId}/carts/{cartId}/paymentdetails | postCartPaymentdetail
*Occ.UsersApi* | [**getCartPromotions**](docs/UsersApi.md#usersCartsPromotionsByUserIdAndCartId) | **GET** /users/{userId}/carts/{cartId}/promotions | UsersCartsPromotionsByUserIdAndCartId
*Occ.UsersApi* | [**postCartPromotion**](docs/UsersApi.md#usersCartsPromotionsByUserIdAndCartId1) | **POST** /users/{userId}/carts/{cartId}/promotions | UsersCartsPromotionsByUserIdAndCartId
*Occ.UsersApi* | [**getCartPromotion**](docs/UsersApi.md#usersCartsPromotionsPromotionIdByUserId) | **GET** /users/{userId}/carts/{cartId}/promotions/{promotionId} | UsersCartsPromotionsPromotionIdByUserId
*Occ.UsersApi* | [**deleteCartPromotion**](docs/UsersApi.md#usersCartsPromotionsPromotionIdByUserId1) | **DELETE** /users/{userId}/carts/{cartId}/promotions/{promotionId} | UsersCartsPromotionsPromotionIdByUserId
*Occ.UsersApi* | [**patchCartRestoresavedcart**](docs/UsersApi.md#usersCartsRestoresavedcartByUserId) | **PATCH** /users/{userId}/carts/{cartId}/restoresavedcart | UsersCartsRestoresavedcartByUserId
*Occ.UsersApi* | [**patchSavedCart**](docs/UsersApi.md#usersCartsSaveByUserIdAndCartId) | **PATCH** /users/{userId}/carts/{cartId}/save | UsersCartsSaveByUserIdAndCartId
*Occ.UsersApi* | [**getSavedCart**](docs/UsersApi.md#usersCartsSavedcartByUserIdAndCartId) | **GET** /users/{userId}/carts/{cartId}/savedcart | UsersCartsSavedcartByUserIdAndCartId
*Occ.UsersApi* | [**getCartVouchers**](docs/UsersApi.md#usersCartsVouchersByUserIdAndCartId) | **GET** /users/{userId}/carts/{cartId}/vouchers | UsersCartsVouchersByUserIdAndCartId
*Occ.UsersApi* | [**postCartVoucher**](docs/UsersApi.md#usersCartsVouchersByUserIdAndCartId1) | **POST** /users/{userId}/carts/{cartId}/vouchers | UsersCartsVouchersByUserIdAndCartId
*Occ.UsersApi* | [**deleteCartVouchers**](docs/UsersApi.md#usersCartsVouchersVoucherIdByUserId) | **DELETE** /users/{userId}/carts/{cartId}/vouchers/{voucherId} | UsersCartsVouchersVoucherIdByUserId
*Occ.UsersApi* | [**getCustomergroups*](docs/UsersApi.md#usersCustomergroupsByUserId) | **GET** /users/{userId}/customergroups | UsersCustomergroupsByUserId
*Occ.UsersApi* | [**putLogin**](docs/UsersApi.md#usersLoginByUserId) | **PUT** /users/{userId}/login | UsersLoginByUserId
*Occ.UsersApi* | [**getOrders**](docs/UsersApi.md#usersOrdersByUserId1) | **GET** /users/{userId}/orders | UsersOrdersByUserId
*Occ.UsersApi* | [**postOrder**](docs/UsersApi.md#usersOrdersByUserId2) | **POST** /users/{userId}/orders | UsersOrdersByUserId
*Occ.UsersApi* | [**getOrder**](docs/UsersApi.md#usersOrdersByUserIdAndCode) | **GET** /users/{userId}/orders/{code} | UsersOrdersByUserIdAndCode
*Occ.UsersApi* | [**putPassword**](docs/UsersApi.md#usersPasswordByUserId) | **PUT** /users/{userId}/password | UsersPasswordByUserId
*Occ.UsersApi* | [**getPaymentdetail**](docs/UsersApi.md#usersPaymentdetailsByUserId) | **GET** /users/{userId}/paymentdetails/{paymentDetailsId} | UsersPaymentdetailsByUserId
*Occ.UsersApi* | [**putPaymentdetail**](docs/UsersApi.md#usersPaymentdetailsByUserId1) | **PUT** /users/{userId}/paymentdetails/{paymentDetailsId} | UsersPaymentdetailsByUserId
*Occ.UsersApi* | [**patchPaymentdetail**](docs/UsersApi.md#usersPaymentdetailsByUserId2) | **PATCH** /users/{userId}/paymentdetails/{paymentDetailsId} | UsersPaymentdetailsByUserId
*Occ.UsersApi* | [**deletePaymentdetail**](docs/UsersApi.md#usersPaymentdetailsByUserId3) | **DELETE** /users/{userId}/paymentdetails/{paymentDetailsId} | UsersPaymentdetailsByUserId
*Occ.UsersApi* | [**getPaymentdetails**](docs/UsersApi.md#usersPaymentdetailsByUserId4) | **GET** /users/{userId}/paymentdetails | UsersPaymentdetailsByUserId
*Occ.VouchersApi* | [**getVoucher**](docs/VouchersApi.md#vouchersByCode) | **GET** /vouchers/{code} | VouchersByCode


## Documentation for Models

 - [Occ.AddressListWsDTOModel](docs/AddressListWsDTOModel.md)
 - [Occ.AddressWsDTO296Model](docs/AddressWsDTO296Model.md)
 - [Occ.AddressWsDTOModel](docs/AddressWsDTOModel.md)
 - [Occ.BaseOptionWsDTOModel](docs/BaseOptionWsDTOModel.md)
 - [Occ.BillingAddressModel](docs/BillingAddressModel.md)
 - [Occ.BreadcrumbWsDTOModel](docs/BreadcrumbWsDTOModel.md)
 - [Occ.CardTypeListWsDTOModel](docs/CardTypeListWsDTOModel.md)
 - [Occ.CardTypeWsDTOModel](docs/CardTypeWsDTOModel.md)
 - [Occ.CartListWsDTOModel](docs/CartListWsDTOModel.md)
 - [Occ.CartWsDTOModel](docs/CartWsDTOModel.md)
 - [Occ.CatalogListWsDTOModel](docs/CatalogListWsDTOModel.md)
 - [Occ.CatalogVersionWsDTOModel](docs/CatalogVersionWsDTOModel.md)
 - [Occ.CatalogWsDTOModel](docs/CatalogWsDTOModel.md)
 - [Occ.CategoryHierarchyWsDTOModel](docs/CategoryHierarchyWsDTOModel.md)
 - [Occ.CategoryWsDTOModel](docs/CategoryWsDTOModel.md)
 - [Occ.ClassificationWsDTOModel](docs/ClassificationWsDTOModel.md)
 - [Occ.ConsignmentEntryWsDTOModel](docs/ConsignmentEntryWsDTOModel.md)
 - [Occ.ConsignmentWsDTOModel](docs/ConsignmentWsDTOModel.md)
 - [Occ.CountryListWsDTOModel](docs/CountryListWsDTOModel.md)
 - [Occ.CountryModel](docs/CountryModel.md)
 - [Occ.CountryWsDTOModel](docs/CountryWsDTOModel.md)
 - [Occ.CurrencyListWsDTOModel](docs/CurrencyListWsDTOModel.md)
 - [Occ.CurrencyModel](docs/CurrencyModel.md)
 - [Occ.CurrencyWsDTOModel](docs/CurrencyWsDTOModel.md)
 - [Occ.DeliveryModeListWsDTOModel](docs/DeliveryModeListWsDTOModel.md)
 - [Occ.DeliveryModeWsDTOModel](docs/DeliveryModeWsDTOModel.md)
 - [Occ.DeliveryOrderEntryGroupWsDTOModel](docs/DeliveryOrderEntryGroupWsDTOModel.md)
 - [Occ.DeliveryPointOfServiceModel](docs/DeliveryPointOfServiceModel.md)
 - [Occ.FacetValueWsDTOModel](docs/FacetValueWsDTOModel.md)
 - [Occ.FacetWsDTOModel](docs/FacetWsDTOModel.md)
 - [Occ.FeatureUnitWsDTOModel](docs/FeatureUnitWsDTOModel.md)
 - [Occ.FeatureValueWsDTOModel](docs/FeatureValueWsDTOModel.md)
 - [Occ.FeatureWsDTOModel](docs/FeatureWsDTOModel.md)
 - [Occ.FutureStockWsDTOModel](docs/FutureStockWsDTOModel.md)
 - [Occ.GeoPointWsDTOModel](docs/GeoPointWsDTOModel.md)
 - [Occ.ImageWsDTOModel](docs/ImageWsDTOModel.md)
 - [Occ.LanguageListWsDTOModel](docs/LanguageListWsDTOModel.md)
 - [Occ.LanguageModel](docs/LanguageModel.md)
 - [Occ.LanguageWsDTOModel](docs/LanguageWsDTOModel.md)
 - [Occ.MemberListWsDTOModel](docs/MemberListWsDTOModel.md)
 - [Occ.MemberModel](docs/MemberModel.md)
 - [Occ.OpeningScheduleWsDTOModel](docs/OpeningScheduleWsDTOModel.md)
 - [Occ.OrderEntryListWsDTOModel](docs/OrderEntryListWsDTOModel.md)
 - [Occ.OrderEntryWsDTO542Model](docs/OrderEntryWsDTO542Model.md)
 - [Occ.OrderEntryWsDTOModel](docs/OrderEntryWsDTOModel.md)
 - [Occ.OrderHistoryListWsDTOModel](docs/OrderHistoryListWsDTOModel.md)
 - [Occ.OrderHistoryWsDTOModel](docs/OrderHistoryWsDTOModel.md)
 - [Occ.OrderStatusUpdateElementListWsDTOModel](docs/OrderStatusUpdateElementListWsDTOModel.md)
 - [Occ.OrderStatusUpdateElementWsDTOModel](docs/OrderStatusUpdateElementWsDTOModel.md)
 - [Occ.OrderWsDTOModel](docs/OrderWsDTOModel.md)
 - [Occ.PaginationWsDTOModel](docs/PaginationWsDTOModel.md)
 - [Occ.PaymentDetailsListWsDTOModel](docs/PaymentDetailsListWsDTOModel.md)
 - [Occ.PaymentDetailsWsDTO640Model](docs/PaymentDetailsWsDTO640Model.md)
 - [Occ.PaymentDetailsWsDTOModel](docs/PaymentDetailsWsDTOModel.md)
 - [Occ.PickupOrderEntryGroupWsDTOModel](docs/PickupOrderEntryGroupWsDTOModel.md)
 - [Occ.PointOfServiceStockWsDTOModel](docs/PointOfServiceStockWsDTOModel.md)
 - [Occ.PointOfServiceWsDTOModel](docs/PointOfServiceWsDTOModel.md)
 - [Occ.PriceRangeWsDTOModel](docs/PriceRangeWsDTOModel.md)
 - [Occ.PriceWsDTOModel](docs/PriceWsDTOModel.md)
 - [Occ.PrincipalWsDTOModel](docs/PrincipalWsDTOModel.md)
 - [Occ.ProductExpressUpdateElementListWsDTOModel](docs/ProductExpressUpdateElementListWsDTOModel.md)
 - [Occ.ProductExpressUpdateElementWsDTOModel](docs/ProductExpressUpdateElementWsDTOModel.md)
 - [Occ.ProductListWsDTOModel](docs/ProductListWsDTOModel.md)
 - [Occ.ProductModel](docs/ProductModel.md)
 - [Occ.ProductReferenceListWsDTOModel](docs/ProductReferenceListWsDTOModel.md)
 - [Occ.ProductReferenceWsDTO173Model](docs/ProductReferenceWsDTO173Model.md)
 - [Occ.ProductReferenceWsDTOModel](docs/ProductReferenceWsDTOModel.md)
 - [Occ.ProductSearchPageWsDTOModel](docs/ProductSearchPageWsDTOModel.md)
 - [Occ.ProductWsDTO174Model](docs/ProductWsDTO174Model.md)
 - [Occ.ProductWsDTOModel](docs/ProductWsDTOModel.md)
 - [Occ.PromotionListWsDTOModel](docs/PromotionListWsDTOModel.md)
 - [Occ.PromotionOrderEntryConsumedWsDTOModel](docs/PromotionOrderEntryConsumedWsDTOModel.md)
 - [Occ.PromotionRestrictionWsDTOModel](docs/PromotionRestrictionWsDTOModel.md)
 - [Occ.PromotionResultListWsDTOModel](docs/PromotionResultListWsDTOModel.md)
 - [Occ.PromotionResultWsDTOModel](docs/PromotionResultWsDTOModel.md)
 - [Occ.PromotionWsDTOModel](docs/PromotionWsDTOModel.md)
 - [Occ.RegionModel](docs/RegionModel.md)
 - [Occ.RegionWsDTOModel](docs/RegionWsDTOModel.md)
 - [Occ.ReviewListWsDTOModel](docs/ReviewListWsDTOModel.md)
 - [Occ.ReviewWsDTO208Model](docs/ReviewWsDTO208Model.md)
 - [Occ.ReviewWsDTOModel](docs/ReviewWsDTOModel.md)
 - [Occ.SaveCartResultWsDTOModel](docs/SaveCartResultWsDTOModel.md)
 - [Occ.SearchQueryWsDTOModel](docs/SearchQueryWsDTOModel.md)
 - [Occ.SearchStateWsDTOModel](docs/SearchStateWsDTOModel.md)
 - [Occ.SortWsDTOModel](docs/SortWsDTOModel.md)
 - [Occ.SpecialOpeningDayWsDTOModel](docs/SpecialOpeningDayWsDTOModel.md)
 - [Occ.SpellingSuggestionWsDTOModel](docs/SpellingSuggestionWsDTOModel.md)
 - [Occ.StockWsDTOModel](docs/StockWsDTOModel.md)
 - [Occ.StoreFinderSearchPageWsDTOModel](docs/StoreFinderSearchPageWsDTOModel.md)
 - [Occ.StoreFinderStockSearchPageWsDTOModel](docs/StoreFinderStockSearchPageWsDTOModel.md)
 - [Occ.SuggestionListWsDTOModel](docs/SuggestionListWsDTOModel.md)
 - [Occ.SuggestionWsDTOModel](docs/SuggestionWsDTOModel.md)
 - [Occ.TimeWsDTOModel](docs/TimeWsDTOModel.md)
 - [Occ.TitleListWsDTOModel](docs/TitleListWsDTOModel.md)
 - [Occ.TitleWsDTOModel](docs/TitleWsDTOModel.md)
 - [Occ.UserGroupListWsDTOModel](docs/UserGroupListWsDTOModel.md)
 - [Occ.UserGroupWsDTO17Model](docs/UserGroupWsDTO17Model.md)
 - [Occ.UserGroupWsDTOModel](docs/UserGroupWsDTOModel.md)
 - [Occ.UserSignUpWsDTOModel](docs/UserSignUpWsDTOModel.md)
 - [Occ.UserWsDTO286Model](docs/UserWsDTO286Model.md)
 - [Occ.UserWsDTOModel](docs/UserWsDTOModel.md)
 - [Occ.VariantCategoryWsDTOModel](docs/VariantCategoryWsDTOModel.md)
 - [Occ.VariantMatrixElementWsDTOModel](docs/VariantMatrixElementWsDTOModel.md)
 - [Occ.VariantOptionQualifierWsDTOModel](docs/VariantOptionQualifierWsDTOModel.md)
 - [Occ.VariantOptionWsDTOModel](docs/VariantOptionWsDTOModel.md)
 - [Occ.VariantValueCategoryWsDTOModel](docs/VariantValueCategoryWsDTOModel.md)
 - [Occ.VoucherListWsDTOModel](docs/VoucherListWsDTOModel.md)
 - [Occ.VoucherWsDTOModel](docs/VoucherWsDTOModel.md)
 - [Occ.WeekdayOpeningDayWsDTOModel](docs/WeekdayOpeningDayWsDTOModel.md)


## Documentation for Authorization


### auth

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: http://api-example.hybris.com/rest/authorizationserver/authorize
- **Scopes**: N/A

