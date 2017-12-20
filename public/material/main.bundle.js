webpackJsonp(["main"],{

/***/ "../../../../../../impac-material/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    hmr: false,
    impac_url: 'http://localhost:4000'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/public_api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_impac_material_module__ = __webpack_require__("../../../../../../impac-material/src/lib/src/impac-material.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_impac_material_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_services_impac_config_service__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_services/impac-config.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_services_impac_config_service__["a"]; });


//# sourceMappingURL=public_api.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_helpers/app-injector.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let appInjectorRef;
const appInjector = (injector) => {
    if (injector) {
        appInjectorRef = injector;
    }
    return appInjectorRef;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = appInjector;

//# sourceMappingURL=app-injector.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_interceptors/basic-auth-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicAuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let BasicAuthInterceptor = class BasicAuthInterceptor {
    constructor() { }
    // Intercept every requests and attach headers
    intercept(request, next) {
        return next.handle(request);
    }
};
BasicAuthInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], BasicAuthInterceptor);

//# sourceMappingURL=basic-auth-interceptor.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_models/dashboard.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_jsonapi_decorators_json_api_model_config_decorator__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/decorators/json-api-model-config.decorator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_jsonapi_models_json_api_model__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/models/json-api.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_jsonapi_decorators_attribute_decorator__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/decorators/attribute.decorator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_jsonapi_decorators_has_many_decorator__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/decorators/has-many.decorator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let Dashboard = class Dashboard extends __WEBPACK_IMPORTED_MODULE_1__ngrx_jsonapi_models_json_api_model__["a" /* JsonApiModel */] {
    constructor() {
        super(...arguments);
        this.widgets = [];
        // widgets_order?: any;
        // currency?: string;
        // dashboard_type?: string;
        // hist_parameters?: any;
        // organization_ids?: Array<string>;
        // owner_id?: Number;
        // owner_type?: string;
        // published?: boolean;
        // settings?: any;
        // source_id?: any;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_jsonapi_decorators_attribute_decorator__["a" /* Attribute */])(),
    __metadata("design:type", String)
], Dashboard.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_jsonapi_decorators_attribute_decorator__["a" /* Attribute */])(),
    __metadata("design:type", String)
], Dashboard.prototype, "currency", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_jsonapi_decorators_attribute_decorator__["a" /* Attribute */])(),
    __metadata("design:type", Object)
], Dashboard.prototype, "settings", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_jsonapi_decorators_has_many_decorator__["a" /* HasMany */])(),
    __metadata("design:type", Array)
], Dashboard.prototype, "widgets", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_jsonapi_decorators_attribute_decorator__["a" /* Attribute */])('created_at'),
    __metadata("design:type", Object)
], Dashboard.prototype, "createdAt", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_jsonapi_decorators_attribute_decorator__["a" /* Attribute */])('updated_at'),
    __metadata("design:type", Object)
], Dashboard.prototype, "updatedAt", void 0);
Dashboard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_jsonapi_decorators_json_api_model_config_decorator__["a" /* JsonApiModelConfig */])({
        type: 'dashboards'
    })
], Dashboard);

//# sourceMappingURL=dashboard.model.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_models/widget.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_jsonapi_decorators_json_api_model_config_decorator__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/decorators/json-api-model-config.decorator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_jsonapi_models_json_api_model__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/models/json-api.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_jsonapi_decorators_attribute_decorator__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/decorators/attribute.decorator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_jsonapi_decorators_belongs_to_decorator__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/decorators/belongs-to.decorator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_model__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_models/dashboard.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let Widget = class Widget extends __WEBPACK_IMPORTED_MODULE_1__ngrx_jsonapi_models_json_api_model__["a" /* JsonApiModel */] {
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_jsonapi_decorators_attribute_decorator__["a" /* Attribute */])(),
    __metadata("design:type", String)
], Widget.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_jsonapi_decorators_attribute_decorator__["a" /* Attribute */])(),
    __metadata("design:type", Object)
], Widget.prototype, "layouts", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_jsonapi_decorators_attribute_decorator__["a" /* Attribute */])(),
    __metadata("design:type", String)
], Widget.prototype, "endpoint", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_jsonapi_decorators_attribute_decorator__["a" /* Attribute */])(),
    __metadata("design:type", Object)
], Widget.prototype, "metadata", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_jsonapi_decorators_attribute_decorator__["a" /* Attribute */])(),
    __metadata("design:type", Object)
], Widget.prototype, "settings", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_jsonapi_decorators_attribute_decorator__["a" /* Attribute */])(),
    __metadata("design:type", String)
], Widget.prototype, "dashboard_id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_jsonapi_decorators_belongs_to_decorator__["a" /* BelongsTo */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__dashboard_model__["a" /* Dashboard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__dashboard_model__["a" /* Dashboard */]) === "function" && _a || Object)
], Widget.prototype, "dashboard", void 0);
Widget = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_jsonapi_decorators_json_api_model_config_decorator__["a" /* JsonApiModelConfig */])({
        type: 'widgets'
    })
], Widget);

var _a;
//# sourceMappingURL=widget.model.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/decorators/attribute.decorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Attribute;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_format__ = __webpack_require__("../../../../date-fns/format/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_date_fns_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_parse__ = __webpack_require__("../../../../date-fns/parse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_parse__);


function Attribute(serializedName) {
    return function (target, propertyName) {
        let converter = function (dataType, value, forSerialisation = false) {
            if (!forSerialisation) {
                if (dataType === Date) {
                    return __WEBPACK_IMPORTED_MODULE_1_date_fns_parse__(value);
                }
            }
            else {
                if (dataType === Date) {
                    return __WEBPACK_IMPORTED_MODULE_0_date_fns_format__(value, 'YYYY-MM-DDTHH:mm:ss[Z]');
                }
            }
            return value;
        };
        let saveAnnotations = function (hasDirtyAttributes, oldValue, newValue, isNew) {
            let annotations = Reflect.getMetadata('Attribute', target) || {};
            let targetType = Reflect.getMetadata('design:type', target, propertyName);
            let mappingMetadata = Reflect.getMetadata('AttributeMapping', target) || {};
            let serializedPropertyName = serializedName !== undefined ? serializedName : propertyName;
            mappingMetadata[serializedPropertyName] = propertyName;
            Reflect.defineMetadata('AttributeMapping', mappingMetadata, target);
            hasDirtyAttributes = typeof oldValue === 'undefined' && isNew ? true : hasDirtyAttributes;
            annotations[propertyName] = {
                hasDirtyAttributes: hasDirtyAttributes,
                oldValue: oldValue,
                newValue: newValue,
                serializedName: serializedName,
                serialisationValue: converter(targetType, newValue, true)
            };
            Reflect.defineMetadata('Attribute', annotations, target);
        };
        let getter = function () {
            return this['_' + propertyName];
        };
        let setter = function (newVal) {
            let targetType = Reflect.getMetadata('design:type', target, propertyName);
            let convertedValue = converter(targetType, newVal);
            if (convertedValue !== this['_' + propertyName]) {
                saveAnnotations(true, this['_' + propertyName], newVal, !this.id);
                this['_' + propertyName] = convertedValue;
            }
        };
        if (delete target[propertyName]) {
            saveAnnotations(false, undefined, target[propertyName], target.id);
            Object.defineProperty(target, propertyName, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
        }
    };
}
//# sourceMappingURL=attribute.decorator.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/decorators/belongs-to.decorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = BelongsTo;
function BelongsTo(config = {}) {
    return function (target, propertyName) {
        let annotations = Reflect.getMetadata('BelongsTo', target) || [];
        annotations.push({
            propertyName: propertyName,
            relationship: config.key || propertyName
        });
        Reflect.defineMetadata('BelongsTo', annotations, target);
    };
}
//# sourceMappingURL=belongs-to.decorator.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/decorators/has-many.decorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = HasMany;
function HasMany(config = {}) {
    return function (target, propertyName) {
        let annotations = Reflect.getMetadata('HasMany', target) || [];
        annotations.push({
            propertyName: propertyName,
            relationship: config.key || propertyName
        });
        Reflect.defineMetadata('HasMany', annotations, target);
    };
}
//# sourceMappingURL=has-many.decorator.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/decorators/json-api-model-config.decorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = JsonApiModelConfig;
function JsonApiModelConfig(config) {
    return function (target) {
        Reflect.defineMetadata('JsonApiModelConfig', config, target);
    };
}
//# sourceMappingURL=json-api-model-config.decorator.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/decorators/json-api-service-config.decorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = JsonApiServiceConfig;
function JsonApiServiceConfig(config = {}) {
    return function (target) {
        Reflect.defineMetadata('JsonApiServiceConfig', config, target);
    };
}
//# sourceMappingURL=json-api-service-config.decorator.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/models/error-response.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ErrorResponse {
    constructor(errors) {
        this.errors = [];
        if (errors) {
            this.errors = errors;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ErrorResponse;

//# sourceMappingURL=error-response.model.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/models/json-api-query-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class JsonApiQueryData {
    constructor(jsonApiModels, metaData) {
        this.jsonApiModels = jsonApiModels;
        this.metaData = metaData;
    }
    getModels() {
        return this.jsonApiModels;
    }
    getMeta() {
        return this.metaData;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = JsonApiQueryData;

//# sourceMappingURL=json-api-query-data.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/models/json-api.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_find__ = __webpack_require__("../../../../lodash-es/find.js");

class JsonApiModel {
    constructor(data) {
        if (data) {
            this.id = data.id;
            Object.assign(this, data.attributes);
        }
    }
    // TODO: Move in JsonApiService
    syncRelationships(data, included, level, service) {
        if (data) {
            this.parseHasMany(data, included, level, service);
            this.parseBelongsTo(data, included, level, service);
        }
    }
    get modelConfig() {
        return Reflect.getMetadata('JsonApiModelConfig', this.constructor);
    }
    parseHasMany(data, included, level, service) {
        let hasMany = Reflect.getMetadata('HasMany', this);
        if (hasMany) {
            for (let metadata of hasMany) {
                let relationship = data.relationships ? data.relationships[metadata.relationship] : null;
                if (relationship && relationship.data && relationship.data.length > 0) {
                    let typeName = relationship.data[0].type;
                    let modelType = Reflect.getMetadata('JsonApiServiceConfig', service.constructor).models[typeName];
                    if (modelType) {
                        let relationshipModel = this.getHasManyRelationship(modelType, relationship.data, included, typeName, level, service);
                        if (relationshipModel.length > 0) {
                            this[metadata.propertyName] = relationshipModel;
                        }
                    }
                    else {
                        throw { message: 'parseHasMany - Model type for relationship ' + typeName + ' not found.' };
                    }
                }
            }
        }
    }
    parseBelongsTo(data, included, level, service) {
        let belongsTo = Reflect.getMetadata('BelongsTo', this);
        if (belongsTo) {
            for (let metadata of belongsTo) {
                let relationship = data.relationships ? data.relationships[metadata.relationship] : null;
                if (relationship && relationship.data) {
                    let dataRelationship = (relationship.data instanceof Array) ? relationship.data[0] : relationship.data;
                    if (dataRelationship) {
                        let typeName = dataRelationship.type;
                        let modelType = Reflect.getMetadata('JsonApiServiceConfig', service.constructor).models[typeName];
                        if (modelType) {
                            let relationshipModel = this.getBelongsToRelationship(modelType, dataRelationship, included, typeName, level, service);
                            if (relationshipModel) {
                                this[metadata.propertyName] = relationshipModel;
                            }
                        }
                        else {
                            throw { message: 'parseBelongsTo - Model type for relationship ' + typeName + ' not found.' };
                        }
                    }
                }
            }
        }
    }
    getHasManyRelationship(modelType, data, included, typeName, level, service) {
        let relationshipList = [];
        data.forEach((item) => {
            let relationshipData = Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_find__["default"])(included, { id: item.id, type: typeName });
            if (relationshipData) {
                let newObject = this.create(modelType, relationshipData);
                if (level <= 1) {
                    newObject.syncRelationships(relationshipData, included, level + 1, service);
                }
                relationshipList.push(newObject);
            }
        });
        return relationshipList;
    }
    getBelongsToRelationship(modelType, data, included, typeName, level, service) {
        let id = data.id;
        let relationshipData = Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_find__["default"])(included, { id: id, type: typeName });
        if (relationshipData) {
            let newObject = this.create(modelType, relationshipData);
            if (level <= 1) {
                newObject.syncRelationships(relationshipData, included, level + 1, service);
            }
            return newObject;
        }
        return null;
    }
    create(modelType, data) {
        let newObject = new modelType(data);
        return newObject;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = JsonApiModel;

//# sourceMappingURL=json-api.model.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/services/jsonapi-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonapiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_qs__ = __webpack_require__("../../../../qs/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_es_find__ = __webpack_require__("../../../../lodash-es/find.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_json_api_model__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/models/json-api.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_json_api_query_data__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/models/json-api-query-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_error_response_model__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/models/error-response.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












let JsonapiService = class JsonapiService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/mnoe/jpi/v2';
    }
    /**
     * Find all the records from the API
     * @param modelType Model type to fetch
     * @param params (optional) Hash of additional parameters
     * @returns observable of fetched models
     */
    findAll(modelType, params) {
        const url = this.buildUrl(modelType, params);
        return this.http.get(url)
            .map((res) => this.extractQueryData(res, modelType))
            .catch(error => this.handleError(error));
    }
    getDirtyAttributes(attributesMetadata) {
        let dirtyData = {};
        for (let propertyName in attributesMetadata) {
            if (attributesMetadata.hasOwnProperty(propertyName)) {
                let metadata = attributesMetadata[propertyName];
                if (metadata.hasDirtyAttributes) {
                    let attributeName = metadata.serializedName != null ? metadata.serializedName : propertyName;
                    dirtyData[attributeName] = metadata.serialisationValue ? metadata.serialisationValue : metadata.newValue;
                }
            }
        }
        return dirtyData;
    }
    /**
     * Save a record in the API
     * @param model Model type to delete
     * @param params (optional) Hash of additional parameters
     * @returns observable of saved record
     */
    saveRecord(model, params) {
        let attributesMetadata = Reflect.getMetadata('Attribute', model);
        let modelType = model.constructor;
        const modelConfig = model.modelConfig;
        let typeName = modelConfig.type;
        let relationships = this.getRelationships(model);
        let attributes = this.getDirtyAttributes(attributesMetadata);
        let url = this.buildUrl(modelType, params, model.id);
        // Remove readonly fields
        // TODO: readonly option to be added to @Attribute()
        delete attributes['created_at'];
        delete attributes['updated_at'];
        let httpCall;
        let body = {
            data: {
                id: model.id,
                type: typeName,
                attributes: attributes,
                relationships: relationships
            }
        };
        if (model.id) {
            httpCall = this.http.patch(url, body, { observe: 'response' });
        }
        else {
            httpCall = this.http.post(url, body, { observe: 'response' });
        }
        return httpCall
            .map((res) => (res.status === 201 ? this.extractRecordData(res, modelType, model) : model))
            .map(res => this.resetMetadataAttributes(res, attributesMetadata))
            .catch(error => this.handleError(error));
    }
    /**
     * Delete a record from the API
     * @param model Model type to delete
     * @param id Id of the record to delete
     * @returns observable of fetched models
     */
    deleteRecord(model, id) {
        let url = this.buildUrl(model, null, id);
        return this.http.delete(url).catch(error => this.handleError(error));
    }
    buildUrl(modelType, params, id) {
        const queryParams = this.toQueryString(params);
        const modelConfig = Reflect.getMetadata('JsonApiModelConfig', modelType);
        const url = [this.baseUrl, modelConfig.type, id].filter(x => x).join('/');
        return queryParams ? `${url}?${queryParams}` : url;
    }
    getRelationships(data) {
        let relationships;
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                if (data[key] instanceof __WEBPACK_IMPORTED_MODULE_9__models_json_api_model__["a" /* JsonApiModel */]) {
                    relationships = relationships || {};
                    relationships[key] = {
                        data: this.buildSingleRelationshipData(data[key])
                    };
                }
                else if (data[key] instanceof Array && data[key].length > 0 && this.isValidToManyRelation(data[key])) {
                    relationships = relationships || {};
                    relationships[key] = {
                        data: data[key].map((model) => this.buildSingleRelationshipData(model))
                    };
                }
            }
        }
        return relationships;
    }
    isValidToManyRelation(objects) {
        let isJsonApiModel = objects.every(item => item instanceof __WEBPACK_IMPORTED_MODULE_9__models_json_api_model__["a" /* JsonApiModel */]);
        let relationshipType = isJsonApiModel ? objects[0].modelConfig.type : '';
        return isJsonApiModel ? objects.every((item) => item.modelConfig.type === relationshipType) : false;
    }
    buildSingleRelationshipData(model) {
        let relationshipType = model.modelConfig.type;
        let relationShipData = { type: relationshipType };
        if (model.id) {
            relationShipData.id = model.id;
        }
        else {
            let attributesMetadata = Reflect.getMetadata('Attribute', model);
            relationShipData.attributes = this.getDirtyAttributes(attributesMetadata);
        }
        return relationShipData;
    }
    extractQueryData(res, modelType, withMeta = false) {
        const models = [];
        res.data.forEach((data) => {
            const m = this.deserializeModel(modelType, data);
            if (res.included) {
                m.syncRelationships(data, res.included, 0, this);
            }
            models.push(m);
        });
        if (withMeta && withMeta === true) {
            return new __WEBPACK_IMPORTED_MODULE_10__models_json_api_query_data__["a" /* JsonApiQueryData */](models, this.parseMeta(res, modelType));
        }
        else {
            return models;
        }
    }
    deserializeModel(modelType, data) {
        data.attributes = this.transformSerializedNamesToPropertyNames(modelType, data.attributes);
        return new modelType(data);
    }
    extractRecordData(res, modelType, model) {
        let body = res.body;
        if (!body) {
            throw new Error('no body in response');
        }
        model = this.deserializeModel(modelType, body.data);
        if (body.included) {
            model.syncRelationships(body.data, body.included, 0, this);
        }
        return model;
    }
    handleError(error) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        if (error.error && error.error.errors && error.error.errors instanceof Array) {
            let errors = new __WEBPACK_IMPORTED_MODULE_11__models_error_response_model__["a" /* ErrorResponse */](error.error.errors);
            console.error(errMsg, errors);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errors);
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    }
    parseMeta(body, modelType) {
        const metaModel = Reflect.getMetadata('JsonApiModelConfig', modelType).meta;
        const jsonApiMeta = new metaModel();
        for (let key in body) {
            if (jsonApiMeta.hasOwnProperty(key)) {
                jsonApiMeta[key] = body[key];
            }
        }
        return jsonApiMeta;
    }
    toQueryString(params) {
        return __WEBPACK_IMPORTED_MODULE_7_qs__["stringify"](params, { arrayFormat: 'brackets' });
    }
    resetMetadataAttributes(res, attributesMetadata) {
        attributesMetadata = Reflect.getMetadata('Attribute', res);
        for (let propertyName in attributesMetadata) {
            if (attributesMetadata.hasOwnProperty(propertyName)) {
                let metadata = attributesMetadata[propertyName];
                if (metadata.hasDirtyAttributes) {
                    metadata.hasDirtyAttributes = false;
                }
            }
        }
        Reflect.defineMetadata('Attribute', attributesMetadata, res);
        return res;
    }
    updateRelationships(model, relationships) {
        let modelsTypes = Reflect.getMetadata('JsonApiDatastoreConfig', this.constructor).models;
        for (let relationship in relationships) {
            if (relationships.hasOwnProperty(relationship) && model.hasOwnProperty(relationship)) {
                let relationshipModel = model[relationship];
                let hasMany = Reflect.getMetadata('HasMany', relationshipModel);
                let propertyHasMany = Object(__WEBPACK_IMPORTED_MODULE_8_lodash_es_find__["default"])(hasMany, (property) => {
                    return modelsTypes[property.relationship] === model.constructor;
                });
                if (propertyHasMany) {
                    if (relationshipModel[propertyHasMany.propertyName] !== undefined) {
                        relationshipModel[propertyHasMany.propertyName].push(model);
                    }
                }
            }
        }
        return model;
    }
    transformSerializedNamesToPropertyNames(modelType, attributes) {
        const serializedNameToPropertyName = this.getModelPropertyNames(modelType.prototype);
        const properties = {};
        Object.keys(serializedNameToPropertyName).forEach(serializedName => {
            if (attributes[serializedName]) {
                properties[serializedNameToPropertyName[serializedName]] = attributes[serializedName];
            }
        });
        return properties;
    }
    getModelPropertyNames(model) {
        return Reflect.getMetadata('AttributeMapping', model);
    }
};
JsonapiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], JsonapiService);

var _a;
//# sourceMappingURL=jsonapi-service.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_services/dashboard-events.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardEventsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let DashboardEventsService = class DashboardEventsService {
    constructor() {
        // Observable string sources
        this.widgetSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable string streams
        this.widgetRedrew$ = this.widgetSource.asObservable();
    }
    // Send a message command to all the widget to redraw themselves
    redrawWidget(widget) {
        this.widgetSource.next(widget);
    }
};
DashboardEventsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DashboardEventsService);

//# sourceMappingURL=dashboard-events.service.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_services/impac-config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImpacConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ImpacConfigService = class ImpacConfigService {
    constructor() {
        // Observable string sources
        this._currentOrganizationSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable string streams
        this.currentOrganization$ = this._currentOrganizationSource.asObservable();
    }
    set ssoSession(s) {
        this._ssoSession = s;
    }
    get ssoSession() {
        return this._ssoSession;
    }
    get impacUrl() {
        return this._impacUrl;
    }
    set impacUrl(value) {
        this._impacUrl = value;
    }
    set currentOrganization(value) {
        this._currentOrganizationSource.next(value);
    }
};
ImpacConfigService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ImpacConfigService);

//# sourceMappingURL=impac-config.service.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_services/mnohub-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MnohubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_jsonapi_services_jsonapi_service__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/services/jsonapi-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_jsonapi_decorators_json_api_service_config_decorator__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/decorators/json-api-service-config.decorator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_models/dashboard.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_widget_model__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_models/widget.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







const config = {
    baseUrl: '/api/mnoe/v2',
    models: {
        dashboards: __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__["a" /* Dashboard */],
        widgets: __WEBPACK_IMPORTED_MODULE_5__models_widget_model__["a" /* Widget */]
    }
};
let MnohubService = class MnohubService extends __WEBPACK_IMPORTED_MODULE_2__ngrx_jsonapi_services_jsonapi_service__["a" /* JsonapiService */] {
    constructor(http) {
        super(http);
        this.http = http;
    }
    // TODO: To remove and use angular2-jsonapi
    // The 'Attribute' metadata return values from another widget
    // This method override the create widget call forcing to use the right values
    createWidget(widget) {
        let body = {
            data: {
                type: 'widgets',
                attributes: {
                    name: widget.name,
                    layouts: widget.layouts,
                    endpoint: widget.endpoint,
                    metadata: widget.metadata,
                    settings: widget.settings,
                    dashboard_id: widget.dashboard_id
                }
            }
        };
        let modelType = widget.constructor;
        return this.http.post('/mnoe/jpi/v2/widgets', body, { observe: 'response' })
            .map((res) => this.extractRecordData(res, modelType));
    }
};
MnohubService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_jsonapi_decorators_json_api_service_config_decorator__["a" /* JsonApiServiceConfig */])(config),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], MnohubService);

var _a;
//# sourceMappingURL=mnohub-service.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_store/dashboard.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const INIT = '[DASHBOARD] Init';
/* harmony export (immutable) */ __webpack_exports__["j"] = INIT;

const INIT_SUCCESS = '[DASHBOARD] Init success';
/* harmony export (immutable) */ __webpack_exports__["l"] = INIT_SUCCESS;

const INIT_ERROR = '[DASHBOARD] Init error';
/* harmony export (immutable) */ __webpack_exports__["k"] = INIT_ERROR;

const CREATE = '[DASHBOARD] Create';
/* harmony export (immutable) */ __webpack_exports__["d"] = CREATE;

const CREATE_SUCCESS = '[DASHBOARD] Create success';
/* harmony export (immutable) */ __webpack_exports__["f"] = CREATE_SUCCESS;

const CREATE_ERROR = '[DASHBOARD] Create error';
/* harmony export (immutable) */ __webpack_exports__["e"] = CREATE_ERROR;

const SELECT = '[DASHBOARD] Select';
/* harmony export (immutable) */ __webpack_exports__["s"] = SELECT;

const REMOVE = '[DASHBOARD] Remove';
/* harmony export (immutable) */ __webpack_exports__["m"] = REMOVE;

const REMOVE_SUCCESS = '[DASHBOARD] Remove success';
/* harmony export (immutable) */ __webpack_exports__["o"] = REMOVE_SUCCESS;

const REMOVE_ERROR = '[DASHBOARD] Remove error';
/* harmony export (immutable) */ __webpack_exports__["n"] = REMOVE_ERROR;

const ADD_WIDGET = '[DASHBOARD] Add Widget';
/* harmony export (immutable) */ __webpack_exports__["a"] = ADD_WIDGET;

const ADD_WIDGET_SUCCESS = '[DASHBOARD] Add Widget Success';
/* harmony export (immutable) */ __webpack_exports__["c"] = ADD_WIDGET_SUCCESS;

const ADD_WIDGET_ERROR = '[DASHBOARD] Add Widget Error';
/* harmony export (immutable) */ __webpack_exports__["b"] = ADD_WIDGET_ERROR;

const REMOVE_WIDGET = '[DASHBOARD] Remove Widget';
/* harmony export (immutable) */ __webpack_exports__["p"] = REMOVE_WIDGET;

const REMOVE_WIDGET_SUCCESS = '[DASHBOARD] Remove Widget Success';
/* harmony export (immutable) */ __webpack_exports__["r"] = REMOVE_WIDGET_SUCCESS;

const REMOVE_WIDGET_ERROR = '[DASHBOARD] Remove Widget Error';
/* harmony export (immutable) */ __webpack_exports__["q"] = REMOVE_WIDGET_ERROR;

const FETCH_WIDGET_DATA = '[DASHBOARD] Fetch Widget Data';
/* harmony export (immutable) */ __webpack_exports__["g"] = FETCH_WIDGET_DATA;

const FETCH_WIDGET_DATA_SUCCESS = '[DASHBOARD] Fetch Widget Data Success';
/* harmony export (immutable) */ __webpack_exports__["i"] = FETCH_WIDGET_DATA_SUCCESS;

const FETCH_WIDGET_DATA_ERROR = '[DASHBOARD] Fetch Widget Data Error';
/* harmony export (immutable) */ __webpack_exports__["h"] = FETCH_WIDGET_DATA_ERROR;

class Init {
    constructor(payload) {
        this.payload = payload;
        this.type = INIT;
    }
}
/* unused harmony export Init */

class InitSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = INIT_SUCCESS;
    }
}
/* unused harmony export InitSuccess */

class InitError {
    constructor(payload) {
        this.payload = payload;
        this.type = INIT_ERROR;
    }
}
/* unused harmony export InitError */

class Create {
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE;
    }
}
/* unused harmony export Create */

class CreateSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_SUCCESS;
    }
}
/* unused harmony export CreateSuccess */

class CreateError {
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_ERROR;
    }
}
/* unused harmony export CreateError */

class Select {
    constructor(payload) {
        this.payload = payload;
        this.type = SELECT;
    }
}
/* unused harmony export Select */

class Remove {
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE;
    }
}
/* unused harmony export Remove */

class RemoveSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_SUCCESS;
    }
}
/* unused harmony export RemoveSuccess */

class RemoveError {
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_ERROR;
    }
}
/* unused harmony export RemoveError */

class AddWidget {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_WIDGET;
    }
}
/* unused harmony export AddWidget */

class AddWidgetSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_WIDGET_SUCCESS;
    }
}
/* unused harmony export AddWidgetSuccess */

class AddWidgetError {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_WIDGET_ERROR;
    }
}
/* unused harmony export AddWidgetError */

class RemoveWidget {
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_WIDGET;
    }
}
/* unused harmony export RemoveWidget */

class RemoveWidgetSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_WIDGET_SUCCESS;
    }
}
/* unused harmony export RemoveWidgetSuccess */

class RemoveWidgetError {
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_WIDGET_ERROR;
    }
}
/* unused harmony export RemoveWidgetError */

class FetchWidgetData {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_WIDGET_DATA;
    }
}
/* unused harmony export FetchWidgetData */

class FetchWidgetDataSuccess {
    // TODO: Data payload typing
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_WIDGET_DATA_SUCCESS;
    }
}
/* unused harmony export FetchWidgetDataSuccess */

class FetchWidgetDataError {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_WIDGET_DATA_ERROR;
    }
}
/* unused harmony export FetchWidgetDataError */

//# sourceMappingURL=dashboard.actions.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_store/dashboard.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_qs__ = __webpack_require__("../../../../qs/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_es_pick__ = __webpack_require__("../../../../lodash-es/pick.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_actions__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_store/dashboard.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_dashboard_model__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_models/dashboard.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_mnohub_service__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_services/mnohub-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_impac_config_service__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_services/impac-config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_widget_model__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_models/widget.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















let DashboardEffects = class DashboardEffects {
    constructor(_actions$, _mnohubService, _http, _impacConfig) {
        this._actions$ = _actions$;
        this._mnohubService = _mnohubService;
        this._http = _http;
        this._impacConfig = _impacConfig;
        // Listen for the INIT action
        this.init$ = this._actions$.ofType(__WEBPACK_IMPORTED_MODULE_10__dashboard_actions__["j" /* INIT */])
            .mergeMap(() => {
            // Fetch the list of dashboards in the backend
            //TODO: Add filter on organisation: 'filter[organization_ids]': '4'
            return this._mnohubService.findAll(__WEBPACK_IMPORTED_MODULE_11__models_dashboard_model__["a" /* Dashboard */], { include: 'widgets' })
                .map((res) => ({ type: __WEBPACK_IMPORTED_MODULE_10__dashboard_actions__["l" /* INIT_SUCCESS */], payload: res }))
                .catch((error) => Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])({ type: __WEBPACK_IMPORTED_MODULE_10__dashboard_actions__["k" /* INIT_ERROR */], payload: error }));
        });
        // Listen for the CREATE action
        this.create$ = this._actions$.ofType(__WEBPACK_IMPORTED_MODULE_10__dashboard_actions__["d" /* CREATE */])
            .mergeMap((action) => {
            // Create a new dashboard in the backend
            return this._mnohubService.saveRecord(action.payload)
                .map(data => ({ type: __WEBPACK_IMPORTED_MODULE_10__dashboard_actions__["f" /* CREATE_SUCCESS */], payload: data }))
                .catch((error) => Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])({ type: __WEBPACK_IMPORTED_MODULE_10__dashboard_actions__["e" /* CREATE_ERROR */], payload: error }));
        });
        this.remove$ = this._actions$.ofType(__WEBPACK_IMPORTED_MODULE_10__dashboard_actions__["m" /* REMOVE */])
            .mergeMap((action) => {
            // Delete a dashboard in the backend
            return this._mnohubService.deleteRecord(__WEBPACK_IMPORTED_MODULE_11__models_dashboard_model__["a" /* Dashboard */], action.payload.id)
                .map((data) => ({ type: __WEBPACK_IMPORTED_MODULE_10__dashboard_actions__["o" /* REMOVE_SUCCESS */], payload: action.payload }))
                .catch((error) => Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])({ type: __WEBPACK_IMPORTED_MODULE_10__dashboard_actions__["n" /* REMOVE_ERROR */], payload: error }));
        });
        // Listen for the ADD_WIDGET action
        this.addWidget$ = this._actions$.ofType(__WEBPACK_IMPORTED_MODULE_10__dashboard_actions__["a" /* ADD_WIDGET */])
            .mergeMap((action) => {
            // Create a new dashboard in the backend
            return this._mnohubService.createWidget(action.payload)
                .map(data => ({ type: __WEBPACK_IMPORTED_MODULE_10__dashboard_actions__["c" /* ADD_WIDGET_SUCCESS */], payload: data }))
                .catch((error) => Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])({ type: __WEBPACK_IMPORTED_MODULE_10__dashboard_actions__["b" /* ADD_WIDGET_ERROR */], payload: error }));
        });
        this.removeWidget$ = this._actions$.ofType(__WEBPACK_IMPORTED_MODULE_10__dashboard_actions__["p" /* REMOVE_WIDGET */])
            .mergeMap((action) => {
            // Delete a dashboard in the backend
            return this._mnohubService.deleteRecord(__WEBPACK_IMPORTED_MODULE_14__models_widget_model__["a" /* Widget */], action.payload.id)
                .map((data) => ({ type: __WEBPACK_IMPORTED_MODULE_10__dashboard_actions__["r" /* REMOVE_WIDGET_SUCCESS */], payload: action.payload }))
                .catch((error) => Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])({ type: __WEBPACK_IMPORTED_MODULE_10__dashboard_actions__["q" /* REMOVE_WIDGET_ERROR */], payload: error }));
        });
        // Listen for the FETCH_WIDGET_DATA action
        this.fetchData$ = this._actions$.ofType(__WEBPACK_IMPORTED_MODULE_10__dashboard_actions__["g" /* FETCH_WIDGET_DATA */])
            .mergeMap((action) => {
            let widgetUrl = this._buildImpacWidgetUrl(action.payload);
            // Fetch the list of dashboards in the backend
            return this._http.get(widgetUrl)
                .map((res) => ({ type: __WEBPACK_IMPORTED_MODULE_10__dashboard_actions__["i" /* FETCH_WIDGET_DATA_SUCCESS */], payload: { widget: action.payload, data: res } }))
                .catch((error) => Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])({ type: __WEBPACK_IMPORTED_MODULE_10__dashboard_actions__["h" /* FETCH_WIDGET_DATA_ERROR */], payload: error }));
        });
    }
    _buildImpacWidgetUrl(widget) {
        const ssoSession = this._impacConfig.ssoSession;
        const metadata = Object(__WEBPACK_IMPORTED_MODULE_9_lodash_es_pick__["a" /* default */])(widget.metadata, ['organization_ids', 'currency']);
        const queryParams = this._toQueryString({ metadata: metadata, sso_session: ssoSession });
        return `${widget.metadata.bolt_path}/widgets/${widget.endpoint}?${queryParams}`;
    }
    _toQueryString(params) {
        return __WEBPACK_IMPORTED_MODULE_8_qs__["stringify"](params, { arrayFormat: 'brackets' });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], DashboardEffects.prototype, "init$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], DashboardEffects.prototype, "create$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _c || Object)
], DashboardEffects.prototype, "remove$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _d || Object)
], DashboardEffects.prototype, "addWidget$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _e || Object)
], DashboardEffects.prototype, "removeWidget$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _f || Object)
], DashboardEffects.prototype, "fetchData$", void 0);
DashboardEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_12__services_mnohub_service__["a" /* MnohubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__services_mnohub_service__["a" /* MnohubService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_13__services_impac_config_service__["a" /* ImpacConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__services_impac_config_service__["a" /* ImpacConfigService */]) === "function" && _k || Object])
], DashboardEffects);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=dashboard.effects.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_store/dashboard.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_actions__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_store/dashboard.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dashboard_model__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_models/dashboard.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_widget_model__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_models/widget.model.ts");



let defaultDashboardsState = {
    list: [],
    selectedDashboardId: null
};
function reducer(state = defaultDashboardsState, action) {
    let index;
    let widget;
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__dashboard_actions__["l" /* INIT_SUCCESS */]:
            const dashboards = action.payload;
            let selectedId;
            if (dashboards.length > 0) {
                selectedId = dashboards[0].id;
            }
            return Object.assign({}, state, {
                list: dashboards,
                selectedDashboardId: selectedId
            });
        case __WEBPACK_IMPORTED_MODULE_0__dashboard_actions__["k" /* INIT_ERROR */]:
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__dashboard_actions__["f" /* CREATE_SUCCESS */]:
            return Object.assign({}, state, {
                list: [...state.list, action.payload]
            });
        case __WEBPACK_IMPORTED_MODULE_0__dashboard_actions__["e" /* CREATE_ERROR */]:
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__dashboard_actions__["s" /* SELECT */]:
            index = action.payload.index;
            return Object.assign({}, state, {
                selectedDashboardId: index
            });
        case __WEBPACK_IMPORTED_MODULE_0__dashboard_actions__["m" /* REMOVE */]:
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__dashboard_actions__["o" /* REMOVE_SUCCESS */]:
            return state.filter(e => e !== action.payload);
        case __WEBPACK_IMPORTED_MODULE_0__dashboard_actions__["n" /* REMOVE_ERROR */]:
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__dashboard_actions__["c" /* ADD_WIDGET_SUCCESS */]:
            widget = action.payload;
            return Object.assign({}, state, {
                list: state.list.map((dashboard) => {
                    if (dashboard.id != widget.dashboard_id) {
                        // This isn't the dashboard we care about - keep it as-is
                        return dashboard;
                    }
                    // Otherwise, this is the one we want - return an updated value
                    return Object.assign(new __WEBPACK_IMPORTED_MODULE_1__models_dashboard_model__["a" /* Dashboard */](), dashboard, {
                        widgets: [...dashboard.widgets, widget]
                    });
                })
            });
        case __WEBPACK_IMPORTED_MODULE_0__dashboard_actions__["b" /* ADD_WIDGET_ERROR */]:
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__dashboard_actions__["p" /* REMOVE_WIDGET */]:
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__dashboard_actions__["r" /* REMOVE_WIDGET_SUCCESS */]:
            widget = action.payload;
            return Object.assign({}, state, {
                list: state.list.map((dashboard) => {
                    if (dashboard.id != widget.dashboard_id) {
                        // This isn't the dashboard we care about - keep it as-is
                        return dashboard;
                    }
                    // Otherwise, this is the one we want - return an updated value
                    return Object.assign(new __WEBPACK_IMPORTED_MODULE_1__models_dashboard_model__["a" /* Dashboard */](), dashboard, {
                        widgets: dashboard.widgets.filter(e => e !== widget)
                    });
                })
            });
        case __WEBPACK_IMPORTED_MODULE_0__dashboard_actions__["q" /* REMOVE_WIDGET_ERROR */]:
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__dashboard_actions__["i" /* FETCH_WIDGET_DATA_SUCCESS */]:
            widget = action.payload.widget;
            let data = action.payload.data;
            return Object.assign({}, state, {
                list: state.list.map((dashboard) => {
                    if (dashboard.id != widget.dashboard_id) {
                        // This isn't the dashboard we care about - keep it as-is
                        return dashboard;
                    }
                    // Otherwise, this is the one we want - return an updated value
                    return Object.assign(new __WEBPACK_IMPORTED_MODULE_1__models_dashboard_model__["a" /* Dashboard */](), dashboard, { widgets: dashboard.widgets.map((w) => {
                            if (widget.id !== w.id) {
                                // This isn't the widget we care about - keep it as-is
                                return w;
                            }
                            return Object.assign(new __WEBPACK_IMPORTED_MODULE_2__models_widget_model__["a" /* Widget */](), w, { data: data });
                        }) });
                })
            });
        default:
            return state;
    }
}
//# sourceMappingURL=dashboard.reducer.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_store/index.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_reducer__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_store/dashboard.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_reducer__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_store/widget.reducer.ts");



const reducers = {
    dashboards: __WEBPACK_IMPORTED_MODULE_1__dashboard_reducer__["a" /* reducer */],
    widgets: __WEBPACK_IMPORTED_MODULE_2__widget_reducer__["a" /* reducer */]
};
/* harmony export (immutable) */ __webpack_exports__["c"] = reducers;

const selectDashboards = (state) => state.dashboards.list;
/* harmony export (immutable) */ __webpack_exports__["d"] = selectDashboards;

const getSelectedDashboardId = (state) => state.dashboards.selectedDashboardId;
/* harmony export (immutable) */ __webpack_exports__["b"] = getSelectedDashboardId;

const selectWidgets = (state) => state.widgets.list;
/* harmony export (immutable) */ __webpack_exports__["e"] = selectWidgets;

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
const getDashboardsState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createFeatureSelector */])('dashboards');
/* unused harmony export getDashboardsState */

const getWidgetsState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createFeatureSelector */])('widgets');
/* unused harmony export getWidgetsState */

const getDashboardsListState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getDashboardsState, state => state.list);
/* unused harmony export getDashboardsListState */

const getSelectedDashboard = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getDashboardsListState, getSelectedDashboardId, (dashboards, selectedId) => {
    return selectedId && dashboards.find(d => d.id === selectedId);
});
/* harmony export (immutable) */ __webpack_exports__["a"] = getSelectedDashboard;

//# sourceMappingURL=index.reducers.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_store/widget.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const FETCH = '[WIDGETS] Fetch';
/* harmony export (immutable) */ __webpack_exports__["a"] = FETCH;

const FETCH_SUCCESS = '[WIDGETS] Fetch success';
/* harmony export (immutable) */ __webpack_exports__["c"] = FETCH_SUCCESS;

const FETCH_ERROR = '[WIDGETS] Fetch error';
/* harmony export (immutable) */ __webpack_exports__["b"] = FETCH_ERROR;

class Fetch {
    constructor() {
        this.type = FETCH;
    }
}
/* unused harmony export Fetch */

class FetchSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_SUCCESS;
    }
}
/* unused harmony export FetchSuccess */

class FetchError {
    constructor(payload) {
        this.payload = payload;
        this.type = FETCH_ERROR;
    }
}
/* unused harmony export FetchError */

//# sourceMappingURL=widget.actions.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_store/widget.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__widget_actions__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_store/widget.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_impac_config_service__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_services/impac-config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_widget_model__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_models/widget.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











let WidgetEffects = class WidgetEffects {
    constructor(_actions$, _http, _impacConfig) {
        this._actions$ = _actions$;
        this._http = _http;
        this._impacConfig = _impacConfig;
        // Listen for the FETCH action
        this.init$ = this._actions$.ofType(__WEBPACK_IMPORTED_MODULE_8__widget_actions__["a" /* FETCH */])
            .mergeMap(() => {
            // Fetch the list of available widgets in the backend
            return this._http.get(this._buildImpacUri())
                .map((res) => {
                res.widgets = res.widgets.map(w => Object.assign(new __WEBPACK_IMPORTED_MODULE_10__models_widget_model__["a" /* Widget */](), w, { metadata: { bolt_path: `${this._impacConfig.impacUrl}/api/v2/maestrano/finance` } }));
                return res;
            })
                .map((res) => ({ type: __WEBPACK_IMPORTED_MODULE_8__widget_actions__["c" /* FETCH_SUCCESS */], payload: res.widgets }))
                .catch((error) => Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])({ type: __WEBPACK_IMPORTED_MODULE_8__widget_actions__["b" /* FETCH_ERROR */], payload: error }));
        });
    }
    _buildImpacUri() {
        const impacUrl = this._impacConfig.impacUrl;
        return `${impacUrl}/api/v2/maestrano/finance/widgets`;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], WidgetEffects.prototype, "init$", void 0);
WidgetEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__services_impac_config_service__["a" /* ImpacConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_impac_config_service__["a" /* ImpacConfigService */]) === "function" && _d || Object])
], WidgetEffects);

var _a, _b, _c, _d;
//# sourceMappingURL=widget.effects.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/_store/widget.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget_actions__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_store/widget.actions.ts");

let defaultWidgetsState = {
    list: []
};
function reducer(state = defaultWidgetsState, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__widget_actions__["c" /* FETCH_SUCCESS */]:
            let widgets = action.payload;
            return Object.assign({}, state, { 
                // TODO: bolt_path to be returned by the API
                list: widgets });
        case __WEBPACK_IMPORTED_MODULE_0__widget_actions__["b" /* FETCH_ERROR */]:
            return state;
        default:
            return state;
    }
}
//# sourceMappingURL=widget.reducer.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/dashboard-create-modal/dashboard-create-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<form #widgetForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Create a dashboard</h5>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\" [disabled]=\"isLoading\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"form-group\">\n      <label for=\"dashboardName\">Enter the new dashboard name</label>\n      <input type=\"text\" class=\"form-control\" id=\"dashboardName\" name=\"name\" [(ngModel)]=\"dashboard.name\" placeholder=\"Name\">\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\" [disabled]=\"isLoading\">Close</button>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"isLoading || !dashboard.name\">\n      <i class=\"fa fa-spin fa-spinner\" *ngIf=\"isLoading\"></i>\n      Create dashboard\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/dashboard-create-modal/dashboard-create-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/dashboard-create-modal/dashboard-create-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardCreateModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_dashboard_actions__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_store/dashboard.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_models/dashboard.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let DashboardCreateModalComponent = class DashboardCreateModalComponent {
    constructor(_store, _bsModalRef) {
        this._store = _store;
        this._bsModalRef = _bsModalRef;
        // TODO: manage loaders in the state
        this.isLoading = false;
        this.dashboard = new __WEBPACK_IMPORTED_MODULE_4__models_dashboard_model__["a" /* Dashboard */]();
    }
    ngOnInit() {
    }
    onSubmit() {
        this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store_dashboard_actions__["d" /* CREATE */], payload: this.dashboard });
        this._bsModalRef.hide();
    }
    close() {
        this._bsModalRef.hide();
    }
};
DashboardCreateModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'impac-dashboard-create-modal',
        template: __webpack_require__("../../../../../../impac-material/src/lib/src/dashboard-create-modal/dashboard-create-modal.component.html"),
        styles: [__webpack_require__("../../../../../../impac-material/src/lib/src/dashboard-create-modal/dashboard-create-modal.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */]) === "function" && _b || Object])
], DashboardCreateModalComponent);

var _a, _b;
//# sourceMappingURL=dashboard-create-modal.component.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/dashboard-selector/dashboard-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"dashboards$ | async as dashboards\" class=\"row\">\n  <div class=\"col-sm\">\n    <tabset class=\"mt-3\">\n      <tab *ngFor=\"let dashboard of dashboards; trackBy: trackById;\"\n           [heading]=\"dashboard.name\"\n           [active]=\"dashboard.id === selectedDashboardId\"\n           (select)=\"selectDashboard(dashboard)\"\n           removable=\"true\"\n           (removed)=\"deleteDashboard(dashboard)\">\n      </tab>\n      <button class=\"btn btn-primary ml-2\" (click)=\"openCreateModal()\">\n        <i class=\"fa fa-plus-circle\"></i>\n      </button>\n    </tabset>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/dashboard-selector/dashboard-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .tab-container tabset {\n    height: 1em; }\n  .tab-container /deep/ .nav-tabs .nav-link {\n    padding-top: 0.5em;\n    padding-bottom: 0.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/dashboard-selector/dashboard-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_dashboard_actions__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_store/dashboard.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_widget_actions__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_store/widget.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_index_reducers__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_store/index.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_create_modal_dashboard_create_modal_component__ = __webpack_require__("../../../../../../impac-material/src/lib/src/dashboard-create-modal/dashboard-create-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let DashboardSelectorComponent = class DashboardSelectorComponent {
    constructor(_store, _modalService) {
        this._store = _store;
        this._modalService = _modalService;
    }
    ngOnInit() {
        this.dashboards$ = this._store.select(__WEBPACK_IMPORTED_MODULE_4__store_index_reducers__["d" /* selectDashboards */]);
        this.widgets$ = this._store.select(__WEBPACK_IMPORTED_MODULE_4__store_index_reducers__["e" /* selectWidgets */]);
        this._store.select(__WEBPACK_IMPORTED_MODULE_4__store_index_reducers__["b" /* getSelectedDashboardId */]).subscribe((id) => this.selectedDashboardId = id);
        // TODO Move FETCH dispatches in a wrapper component
        this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__store_dashboard_actions__["j" /* INIT */] });
        this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store_widget_actions__["a" /* FETCH */] });
    }
    trackById(index, dashboard) {
        return dashboard.id;
    }
    openCreateModal() {
        this._modalService.show(__WEBPACK_IMPORTED_MODULE_5__dashboard_create_modal_dashboard_create_modal_component__["a" /* DashboardCreateModalComponent */]);
    }
    selectDashboard(dashboard) {
        this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__store_dashboard_actions__["s" /* SELECT */], payload: { index: dashboard.id } });
    }
    deleteDashboard(dashboard) {
        this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__store_dashboard_actions__["m" /* REMOVE */], payload: dashboard });
    }
};
DashboardSelectorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'impac-dashboard-selector',
        template: __webpack_require__("../../../../../../impac-material/src/lib/src/dashboard-selector/dashboard-selector.component.html"),
        styles: [__webpack_require__("../../../../../../impac-material/src/lib/src/dashboard-selector/dashboard-selector.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["b" /* BsModalService */]) === "function" && _b || Object])
], DashboardSelectorComponent);

var _a, _b;
//# sourceMappingURL=dashboard-selector.component.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"(dashboard$ | async) as dashboard\" class=\"dashboard-container\">\n  <div class=\"widget-toolbar mt-3\">\n    <button class=\"btn btn-raised btn-primary m-2\" (click)=\"openWidgetSelector()\">Add a widget</button>\n  </div>\n  <div class=\"widgets-grid-container\">\n    <gridster [options]=\"options\">\n      <gridster-item [item]=\"widget\" *ngFor=\"let widget of dashboard.widgets; trackBy: trackByFn\">\n        <impac-widget-base [widget]=\"widget\"></impac-widget-base>\n      </gridster-item>\n    </gridster>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Default color variables (maestrano palette) */\n.dashboard-container {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: calc(100% - 45px); }\n\n.widget-toolbar {\n  margin-left: -4px; }\n\n.widgets-grid-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin-left: -10px;\n  margin-right: -10px; }\n\n/deep/ gridster {\n  background: inherit !important; }\n  /deep/ gridster gridster-grid .row {\n    margin-bottom: inherit !important; }\n  /deep/ gridster gridster-item {\n    background: transparent !important;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_find__ = __webpack_require__("../../../../rxjs/add/operator/find.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dashboard_events_service__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_services/dashboard-events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_app_injector__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_helpers/app-injector.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_index_reducers__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_store/index.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__widget_selector_widget_selector_component__ = __webpack_require__("../../../../../../impac-material/src/lib/src/widget-selector/widget-selector.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let DashboardComponent = class DashboardComponent {
    constructor(_store, _modalService) {
        this._store = _store;
        this._modalService = _modalService;
    }
    trackByFn($index, widget) {
        return widget.id;
    }
    ngOnInit() {
        this.dashboard$ = this._store.select(__WEBPACK_IMPORTED_MODULE_5__store_index_reducers__["a" /* getSelectedDashboard */]);
        this.options = {
            gridType: 'verticalFixed',
            swap: true,
            pushItems: true,
            pushResizeItems: true,
            compactType: 'none',
            itemResizeCallback: this.itemResize,
            outerMargin: true,
            margin: 10,
            minCols: 6,
            maxCols: 6,
            maxItemCols: 6,
            minItemCols: 1,
            maxItemRows: 6,
            minItemRows: 1,
            defaultItemCols: 3,
            defaultItemRows: 2,
            fixedColWidth: 250,
            fixedRowHeight: 250,
            draggable: {
                enabled: true,
                ignoreContent: true,
                dragHandleClass: 'drag-handler'
            },
            resizable: {
                enabled: true
            }
        };
    }
    itemResize(item, scope) {
        const dashboardEvents = Object(__WEBPACK_IMPORTED_MODULE_4__helpers_app_injector__["a" /* appInjector */])().get(__WEBPACK_IMPORTED_MODULE_3__services_dashboard_events_service__["a" /* DashboardEventsService */]);
        dashboardEvents.redrawWidget(item);
    }
    openWidgetSelector() {
        this._modalService.show(__WEBPACK_IMPORTED_MODULE_7__widget_selector_widget_selector_component__["a" /* WidgetSelectorComponent */]);
    }
};
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'impac-dashboard',
        template: __webpack_require__("../../../../../../impac-material/src/lib/src/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../../impac-material/src/lib/src/dashboard/dashboard.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/impac-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImpacMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_gridster2_dist_index__ = __webpack_require__("../../../../angular-gridster2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_gridster2_dist_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular_gridster2_dist_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_buttons__ = __webpack_require__("../../../../ngx-bootstrap/buttons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../../impac-material/src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers_app_injector__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_helpers/app-injector.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_selector_dashboard_selector_component__ = __webpack_require__("../../../../../../impac-material/src/lib/src/dashboard-selector/dashboard-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__widget_selector_widget_selector_component__ = __webpack_require__("../../../../../../impac-material/src/lib/src/widget-selector/widget-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__ = __webpack_require__("../../../../../../impac-material/src/lib/src/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_dashboard_events_service__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_services/dashboard-events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__store_index_reducers__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_store/index.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__store_dashboard_effects__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_store/dashboard.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__interceptors_basic_auth_interceptor__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_interceptors/basic-auth-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngrx_jsonapi_services_jsonapi_service__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_ngrx-jsonapi/services/jsonapi-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_mnohub_service__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_services/mnohub-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_impac_config_service__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_services/impac-config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__widgets_widget_base_widget_base_component__ = __webpack_require__("../../../../../../impac-material/src/lib/src/widgets/widget-base/widget-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__widgets_layout_highcharts_layout_highcharts_component__ = __webpack_require__("../../../../../../impac-material/src/lib/src/widgets/layout-highcharts/layout-highcharts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__widgets_layout_highstocks_layout_highstocks_component__ = __webpack_require__("../../../../../../impac-material/src/lib/src/widgets/layout-highstocks/layout-highstocks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__widgets_layout_table_layout_table_component__ = __webpack_require__("../../../../../../impac-material/src/lib/src/widgets/layout-table/layout-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__store_widget_effects__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_store/widget.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__dashboard_create_modal_dashboard_create_modal_component__ = __webpack_require__("../../../../../../impac-material/src/lib/src/dashboard-create-modal/dashboard-create-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





























const optionalImports = [];
if (!__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].production) {
    // Note that you must instrument after importing StoreModule
    optionalImports.push(__WEBPACK_IMPORTED_MODULE_6__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({ maxAge: 25 }));
}
let ImpacMaterialModule = class ImpacMaterialModule {
    constructor(injector) {
        this.injector = injector;
        Object(__WEBPACK_IMPORTED_MODULE_12__helpers_app_injector__["a" /* appInjector */])(this.injector);
    }
};
ImpacMaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["i" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__store_index_reducers__["c" /* reducers */]),
            __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_18__store_dashboard_effects__["a" /* DashboardEffects */], __WEBPACK_IMPORTED_MODULE_27__store_widget_effects__["a" /* WidgetEffects */]]),
            __WEBPACK_IMPORTED_MODULE_7_angular_gridster2_dist_index__["GridsterModule"],
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_buttons__["a" /* ButtonsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__["c" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
            ...optionalImports
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__dashboard_selector_dashboard_selector_component__["a" /* DashboardSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_14__widget_selector_widget_selector_component__["a" /* WidgetSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_28__dashboard_create_modal_dashboard_create_modal_component__["a" /* DashboardCreateModalComponent */],
            __WEBPACK_IMPORTED_MODULE_23__widgets_widget_base_widget_base_component__["a" /* WidgetBaseComponent */],
            __WEBPACK_IMPORTED_MODULE_24__widgets_layout_highcharts_layout_highcharts_component__["a" /* LayoutHighchartsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__widgets_layout_highstocks_layout_highstocks_component__["a" /* LayoutHighstocksComponent */],
            __WEBPACK_IMPORTED_MODULE_26__widgets_layout_table_layout_table_component__["a" /* LayoutTableComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__ngrx_jsonapi_services_jsonapi_service__["a" /* JsonapiService */],
            __WEBPACK_IMPORTED_MODULE_21__services_mnohub_service__["a" /* MnohubService */],
            __WEBPACK_IMPORTED_MODULE_16__services_dashboard_events_service__["a" /* DashboardEventsService */],
            __WEBPACK_IMPORTED_MODULE_22__services_impac_config_service__["a" /* ImpacConfigService */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_19__interceptors_basic_auth_interceptor__["a" /* BasicAuthInterceptor */], multi: true },
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_14__widget_selector_widget_selector_component__["a" /* WidgetSelectorComponent */], __WEBPACK_IMPORTED_MODULE_28__dashboard_create_modal_dashboard_create_modal_component__["a" /* DashboardCreateModalComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_13__dashboard_selector_dashboard_selector_component__["a" /* DashboardSelectorComponent */], __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__["a" /* DashboardComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _a || Object])
], ImpacMaterialModule);

var _a;
//# sourceMappingURL=impac-material.module.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/widget-selector/widget-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<form #widgetForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Select a widget</h5>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\" [disabled]=\"isLoading\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngFor=\"let widget of widgets$ | async\" class=\"form-check\">\n      <div>\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\"\n                 type=\"radio\"\n                 name=\"widgetRadioSelector\"\n                 [(ngModel)]=\"selectedWidget\"\n                 [value]=\"widget\">\n          {{widget.name}}\n        </label>\n      </div>\n      <!--<div class=\"btn-group\" *ngIf=\"selectedWidget === widget\">-->\n        <!--<label btnCheckbox *ngFor=\"let layout of widget.layouts\"-->\n               <!--[(ngModel)]=\"selectedWidget.layouts\"-->\n               <!--class=\"btn btn-primary\">-->\n          <!--{{layout}}-->\n        <!--</label>-->\n      <!--</div>-->\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\" [disabled]=\"isLoading\">Close</button>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"isLoading\">\n      <i class=\"fa fa-spin fa-spinner\" *ngIf=\"isLoading\"></i>\n      Add to dashboard\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/widget-selector/widget-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/widget-selector/widget-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_index_reducers__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_store/index.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_dashboard_actions__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_store/dashboard.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let WidgetSelectorComponent = class WidgetSelectorComponent {
    constructor(_store, _bsModalRef) {
        this._store = _store;
        this._bsModalRef = _bsModalRef;
        this.widgets$ = this._store.select(__WEBPACK_IMPORTED_MODULE_3__store_index_reducers__["e" /* selectWidgets */]);
        this._store.select(__WEBPACK_IMPORTED_MODULE_3__store_index_reducers__["b" /* getSelectedDashboardId */]).subscribe((id) => this.selectedDashboardId = id);
    }
    ngOnInit() {
    }
    onSubmit() {
        this.selectedWidget.dashboard_id = this.selectedDashboardId;
        this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__store_dashboard_actions__["a" /* ADD_WIDGET */], payload: this.selectedWidget });
        this._bsModalRef.hide();
    }
    close() {
        this._bsModalRef.hide();
    }
};
WidgetSelectorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'impac-widget-selector',
        template: __webpack_require__("../../../../../../impac-material/src/lib/src/widget-selector/widget-selector.component.html"),
        styles: [__webpack_require__("../../../../../../impac-material/src/lib/src/widget-selector/widget-selector.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */]) === "function" && _b || Object])
], WidgetSelectorComponent);

var _a, _b;
//# sourceMappingURL=widget-selector.component.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/widgets/layout-highcharts/layout-highcharts.component.html":
/***/ (function(module, exports) {

module.exports = "<div #chartTarget class=\"chart-container\"></div>\n"

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/widgets/layout-highcharts/layout-highcharts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container {\n  display: block;\n  height: 100% !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/widgets/layout-highcharts/layout-highcharts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutHighchartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts__ = __webpack_require__("../../../../highcharts/highcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_widget_model__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_models/widget.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dashboard_events_service__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_services/dashboard-events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LayoutHighchartsComponent = class LayoutHighchartsComponent {
    constructor(_dashboardEvents) {
        this._dashboardEvents = _dashboardEvents;
    }
    ngOnInit() {
        this.chartOptions = this.prepareChartOptions(this.widget.data[Object.keys(this.widget.data)[0]].highcharts);
        console.log('### DEBUG this.chartOptions', this.chartOptions);
        this.chart = new __WEBPACK_IMPORTED_MODULE_1_highcharts__["Chart"](this.chartTarget.nativeElement, this.chartOptions, (chart) => {
            chart.reflow();
            // Redraw the chart when a widget is reloaded
            this.widgetSubscription = this._dashboardEvents.widgetRedrew$.subscribe(widget => {
                // Redraw the widget only if this widget is the one that has been redrawn
                // 300ms is the time the gridster-item adopt its final width/height
                if (widget === this.widget) {
                    setTimeout(() => {
                        chart.reflow();
                    }, 300);
                }
            });
        });
    }
    prepareChartOptions(options) {
        return Object.assign({}, options, { title: { text: '' } });
    }
    ngOnDestroy() {
        if (this.widgetSubscription) {
            this.widgetSubscription.unsubscribe();
        }
        if (this.chart) {
            this.chart.destroy();
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_widget_model__["a" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_widget_model__["a" /* Widget */]) === "function" && _a || Object)
], LayoutHighchartsComponent.prototype, "widget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chartTarget'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], LayoutHighchartsComponent.prototype, "chartTarget", void 0);
LayoutHighchartsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'impac-layout-highcharts',
        template: __webpack_require__("../../../../../../impac-material/src/lib/src/widgets/layout-highcharts/layout-highcharts.component.html"),
        styles: [__webpack_require__("../../../../../../impac-material/src/lib/src/widgets/layout-highcharts/layout-highcharts.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_dashboard_events_service__["a" /* DashboardEventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dashboard_events_service__["a" /* DashboardEventsService */]) === "function" && _c || Object])
], LayoutHighchartsComponent);

var _a, _b, _c;
//# sourceMappingURL=layout-highcharts.component.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/widgets/layout-highstocks/layout-highstocks.component.html":
/***/ (function(module, exports) {

module.exports = "<div #chartTarget class=\"chart-container\"></div>\n"

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/widgets/layout-highstocks/layout-highstocks.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container {\n  display: block;\n  height: 100% !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/widgets/layout-highstocks/layout-highstocks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutHighstocksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_highstock__ = __webpack_require__("../../../../highcharts/highstock.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_highstock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts_highstock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboard_events_service__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_services/dashboard-events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_widget_model__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_models/widget.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LayoutHighstocksComponent = class LayoutHighstocksComponent {
    constructor(_dashboardEvents) {
        this._dashboardEvents = _dashboardEvents;
    }
    ngOnInit() {
        if (!this.widget.data) {
            return;
        }
        this.chartOptions = this.prepareChartOptions(this.widget.data[Object.keys(this.widget.data)[0]].highstocks);
        this.chart = new __WEBPACK_IMPORTED_MODULE_1_highcharts_highstock__["Chart"](this.chartTarget.nativeElement, this.chartOptions, (chart) => {
            chart.reflow();
            // Redraw the chart when a widget is reloaded
            this.widgetSubscription = this._dashboardEvents.widgetRedrew$.subscribe(widget => {
                // Redraw the widget only if this widget is the one that has been redrawn
                // 300ms is the time the gridster-item adopt its final width/height
                if (widget === this.widget) {
                    setTimeout(() => {
                        chart.reflow();
                    }, 300);
                }
            });
        });
    }
    prepareChartOptions(options) {
        return Object.assign({}, options, { title: { text: '' }, xAxis: { type: 'datetime' } });
    }
    ngOnDestroy() {
        if (this.widgetSubscription) {
            this.widgetSubscription.unsubscribe();
        }
        if (this.chart) {
            this.chart.destroy();
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_widget_model__["a" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_widget_model__["a" /* Widget */]) === "function" && _a || Object)
], LayoutHighstocksComponent.prototype, "widget", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chartTarget'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], LayoutHighstocksComponent.prototype, "chartTarget", void 0);
LayoutHighstocksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'impac-layout-highstocks',
        template: __webpack_require__("../../../../../../impac-material/src/lib/src/widgets/layout-highstocks/layout-highstocks.component.html"),
        styles: [__webpack_require__("../../../../../../impac-material/src/lib/src/widgets/layout-highstocks/layout-highstocks.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_dashboard_events_service__["a" /* DashboardEventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dashboard_events_service__["a" /* DashboardEventsService */]) === "function" && _c || Object])
], LayoutHighstocksComponent);

var _a, _b, _c;
//# sourceMappingURL=layout-highstocks.component.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/widgets/layout-table/layout-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-sm table-striped\">\n  <thead class=\"thead-dark\">\n  <tr>\n    <th scope=\"col\" *ngFor=\"let header of table.headers\">{{header}}</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let group of table.rows.grouped\">\n    <td [colSpan]=\"table.headers.length\">\n      <table class=\"table table-sm table-striped\">\n        <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\" *ngFor=\"let gheader of group.headers\">{{gheader}}</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let ggroup of group.rows.single\">\n          <td *ngFor=\"let entry of ggroup\">\n            {{entry}}\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </td>\n  </tr>\n  <tr *ngFor=\"let sgroup of table.rows.single\">\n    <td *ngFor=\"let entry of sgroup\">\n      {{entry}}\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/widgets/layout-table/layout-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/widgets/layout-table/layout-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_widget_model__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_models/widget.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let LayoutTableComponent = class LayoutTableComponent {
    constructor() { }
    ngOnInit() {
        this.table = this.widget.data[Object.keys(this.widget.data)[0]].table;
        console.log('### DEBUG this.table', this.table);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_widget_model__["a" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_widget_model__["a" /* Widget */]) === "function" && _a || Object)
], LayoutTableComponent.prototype, "widget", void 0);
LayoutTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'impac-layout-table',
        template: __webpack_require__("../../../../../../impac-material/src/lib/src/widgets/layout-table/layout-table.component.html"),
        styles: [__webpack_require__("../../../../../../impac-material/src/lib/src/widgets/layout-table/layout-table.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [])
], LayoutTableComponent);

var _a;
//# sourceMappingURL=layout-table.component.js.map

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/widgets/widget-base/widget-base.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-header\">\n  <div class=\"drag-handler\">\n    <h3>{{widget.name}}</h3>\n  </div>\n\n  <div class=\"button-bar\">\n    <button class=\"close\" (click)=\"remove()\">\n      <i class=\"material-icons\">close</i>\n    </button>\n  </div>\n</div>\n<div class=\"widget-body\">\n  <!-- Loader -->\n  <div *ngIf=\"isLoading\" class=\"loader\">\n    <i class=\"fa fa-refresh fa-spin fa-3x fa-fw\"></i>\n  </div>\n\n  <!-- TODO: tabs management more dynamic -->\n  <tabset *ngIf=\"!isLoading\" [justified]=\"true\">\n    <tab heading=\"Chart\" *ngIf=\"hasHighcharts\">\n      <impac-layout-highcharts [widget]=\"widget\"></impac-layout-highcharts>\n    </tab>\n    <tab heading=\"Chart\" *ngIf=\"hasHighstocks\">\n      <impac-layout-highstocks [widget]=\"widget\"></impac-layout-highstocks>\n    </tab>\n    <tab heading=\"Table\" *ngIf=\"hasTable\">\n      <impac-layout-table [widget]=\"widget\"></impac-layout-table>\n    </tab>\n  </tabset>\n</div>\n"

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/widgets/widget-base/widget-base.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%; }\n  :host .widget-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    width: 100%;\n    min-height: 2em;\n    background-color: grey;\n    border-radius: 4px 4px 0 0; }\n    :host .widget-header .drag-handler {\n      width: 100%; }\n      :host .widget-header .drag-handler h3 {\n        color: white;\n        margin: 0 0 0 8px;\n        font-size: 1em; }\n    :host .widget-header .button-bar {\n      margin-right: 0.25em; }\n      :host .widget-header .button-bar .close {\n        color: white;\n        text-shadow: none; }\n  :host .widget-body {\n    -webkit-box-flex: 1;\n        -ms-flex: auto;\n            flex: auto;\n    height: calc(100% - 2em);\n    background-color: white;\n    border-radius: 0 0 4px 4px; }\n    :host .widget-body /deep/ .highcharts-container {\n      border-radius: 0 0 4px 4px; }\n    :host .widget-body /deep/ .tab-container .nav-tabs .nav-link {\n      padding-top: 0.25em;\n      padding-bottom: 0.25em;\n      line-height: 1em; }\n    :host .widget-body .loader {\n      margin-top: 20px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n    :host .widget-body /deep/ .tab-container, :host .widget-body .tab-pane.active {\n      display: block;\n      height: 100% !important; }\n    :host .widget-body /deep/ .tab-content {\n      display: block;\n      height: calc(100% - 1.5em); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../impac-material/src/lib/src/widgets/widget-base/widget-base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetBaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_widget_model__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_models/widget.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_dashboard_actions__ = __webpack_require__("../../../../../../impac-material/src/lib/src/_store/dashboard.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let WidgetBaseComponent = class WidgetBaseComponent {
    constructor(_store) {
        this._store = _store;
        this.isLoading = true;
        this.hasHighcharts = false;
        this.hasHighstocks = false;
        this.hasTable = false;
    }
    ngOnInit() {
        this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store_dashboard_actions__["g" /* FETCH_WIDGET_DATA */], payload: this.widget });
    }
    ngOnChanges(change) {
        if (!this.widget.data) {
            return;
        }
        // TODO: Fetch chart layouts
        let layouts = Object.keys(this.widget.data[Object.keys(this.widget.data)[0]]);
        this.hasHighcharts = layouts.includes('highcharts');
        this.hasHighstocks = layouts.includes('highstocks');
        this.hasTable = layouts.includes('table');
        this.isLoading = false;
    }
    remove() {
        this._store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__store_dashboard_actions__["p" /* REMOVE_WIDGET */], payload: this.widget });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_widget_model__["a" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_widget_model__["a" /* Widget */]) === "function" && _a || Object)
], WidgetBaseComponent.prototype, "widget", void 0);
WidgetBaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'impac-widget-base',
        template: __webpack_require__("../../../../../../impac-material/src/lib/src/widgets/widget-base/widget-base.component.html"),
        styles: [__webpack_require__("../../../../../../impac-material/src/lib/src/widgets/widget-base/widget-base.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _b || Object])
], WidgetBaseComponent);

var _a, _b;
//# sourceMappingURL=widget-base.component.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_helpers/app-injector.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let appInjectorRef;
const appInjector = (injector) => {
    if (injector) {
        appInjectorRef = injector;
    }
    return appInjectorRef;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = appInjector;

//# sourceMappingURL=app-injector.js.map

/***/ }),

/***/ "../../../../../src/app/_interceptors/basic-auth-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicAuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let BasicAuthInterceptor = class BasicAuthInterceptor {
    constructor() { }
    // Intercept every requests and attach headers
    intercept(request, next) {
        return next.handle(request);
    }
};
BasicAuthInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], BasicAuthInterceptor);

//# sourceMappingURL=basic-auth-interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/_jsonapi-services/mnohub-datastore.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MnohubDatastore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jsonapi__ = __webpack_require__("../../../../angular2-jsonapi/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jsonapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jsonapi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__("../../../../../src/app/_jsonapi-services/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_organization_model__ = __webpack_require__("../../../../../src/app/_jsonapi-services/models/organization.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






const config = {
    baseUrl: '/mnoe/jpi/v2',
    models: {
        organizations: __WEBPACK_IMPORTED_MODULE_4__models_organization_model__["a" /* Organization */],
        users: __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */]
    }
};
let MnohubDatastore = class MnohubDatastore extends __WEBPACK_IMPORTED_MODULE_2_angular2_jsonapi__["JsonApiDatastore"] {
    // TODO: migrate to angular2-jsonapi using HttpClient when ready
    constructor(http) {
        const headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        const auth = 'Basic ' + btoa(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].api_key + ':' + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].api_secret);
        headers.append('Authorization', auth);
        super(http);
        this.headers = headers;
    }
};
MnohubDatastore = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jsonapi__["JsonApiDatastoreConfig"])(config),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], MnohubDatastore);

var _a;
//# sourceMappingURL=mnohub-datastore.js.map

/***/ }),

/***/ "../../../../../src/app/_jsonapi-services/models/base.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__ = __webpack_require__("../../../../angular2-jsonapi/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mnohub_datastore__ = __webpack_require__("../../../../../src/app/_jsonapi-services/mnohub-datastore.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_app_injector__ = __webpack_require__("../../../../../src/app/_helpers/app-injector.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



class BaseModel extends __WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["JsonApiModel"] {
    static all(params, headers, customUrl) {
        let datastore = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_app_injector__["a" /* appInjector */])().get(__WEBPACK_IMPORTED_MODULE_1__mnohub_datastore__["a" /* MnohubDatastore */]);
        return datastore.findAll(this, params, headers, customUrl);
    }
    static find(id, params, headers, customUrl) {
        let datastore = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_app_injector__["a" /* appInjector */])().get(__WEBPACK_IMPORTED_MODULE_1__mnohub_datastore__["a" /* MnohubDatastore */]);
        return datastore.findRecord(this, id, params, headers, customUrl);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseModel;

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])('created_at'),
    __metadata("design:type", Object)
], BaseModel.prototype, "createdAt", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])('updated_at'),
    __metadata("design:type", Object)
], BaseModel.prototype, "updatedAt", void 0);
//# sourceMappingURL=base.model.js.map

/***/ }),

/***/ "../../../../../src/app/_jsonapi-services/models/organization.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Organization; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__ = __webpack_require__("../../../../angular2-jsonapi/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_model__ = __webpack_require__("../../../../../src/app/_jsonapi-services/models/base.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let Organization = class Organization extends __WEBPACK_IMPORTED_MODULE_1__base_model__["a" /* BaseModel */] {
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], Organization.prototype, "uid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], Organization.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["HasMany"])(),
    __metadata("design:type", Array)
], Organization.prototype, "users", void 0);
Organization = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["JsonApiModelConfig"])({
        type: 'organizations'
    })
], Organization);

//# sourceMappingURL=organization.model.js.map

/***/ }),

/***/ "../../../../../src/app/_jsonapi-services/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__ = __webpack_require__("../../../../angular2-jsonapi/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_model__ = __webpack_require__("../../../../../src/app/_jsonapi-services/models/base.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let User = class User extends __WEBPACK_IMPORTED_MODULE_1__base_model__["a" /* BaseModel */] {
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], User.prototype, "uid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], User.prototype, "surname", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], User.prototype, "sso_session", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["Attribute"])(),
    __metadata("design:type", String)
], User.prototype, "admin_role", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["HasMany"])(),
    __metadata("design:type", Array)
], User.prototype, "organizations", void 0);
User = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_angular2_jsonapi__["JsonApiModelConfig"])({
        type: 'users'
    })
], User);

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"]();
        this.currentUser$ = this.currentUserSubject.asObservable();
        this.currentUserSubject.next(null);
    }
    login(user) {
        this.currentUserSubject.next(user);
    }
    logout() {
        this.currentUserSubject.next(null);
    }
};
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-error-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AppErrorHandler = class AppErrorHandler {
    constructor() { }
    handleError(error) {
        console.log('An error occurred:');
        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        throw error;
    }
};
AppErrorHandler = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AppErrorHandler);

//# sourceMappingURL=app-error-handler.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_account_my_account_component__ = __webpack_require__("../../../../../src/app/my-account/my-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__company_settings_company_settings_component__ = __webpack_require__("../../../../../src/app/company-settings/company-settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'my-account', component: __WEBPACK_IMPORTED_MODULE_3__my_account_my_account_component__["a" /* MyAccountComponent */] },
    { path: 'company-settings', component: __WEBPACK_IMPORTED_MODULE_4__company_settings_company_settings_component__["a" /* CompanySettingsComponent */] },
    { path: '**', redirectTo: '/dashboard' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"assets/images/main-logo.png\" alt=\"Maestrano logo\">\n  </a>\n\n  <ul class=\"nav navbar-nav flex-row\">\n    <!--<li class=\"nav-item\"><a id=\"sync-center\"><i class=\"material-icons\">sync</i></a></li>-->\n    <!--<li class=\"nav-item\"><a id=\"notif-center\"><i class=\"material-icons\">info</i></a></li>-->\n    <!--<li class=\"nav-item mr-3\">-->\n      <!--<a id=\"intercom-button\">-->\n        <!--<i id=\"intercom-icon\"></i>-->\n      <!--</a>-->\n    <!--</li>-->\n    <li class=\"nav-item\">\n      <mnoe-user-menu></mnoe-user-menu>\n    </li>\n  </ul>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav.navbar {\n  background: linear-gradient(to right, #977bf0 0%, #63AEF0 100%); }\n  nav.navbar img {\n    max-height: 40px; }\n  nav.navbar .nav-item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    nav.navbar .nav-item a {\n      cursor: pointer; }\n  nav.navbar #intercom-icon {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABICAYAAABGOvOzAAAAAXNSR0IArs4c6QAABrRJREFUeAHtW0tMJFUUlQZ7YGgQmYHGQQYcQV2YIAmJG9igCQlxRiJRAmYwcSERNkQSdhMJCyGRjRsTosQPK0N0gREEMokaMiREERZoEJ2F/P+B8P+155R929fVTVXTfKQrdZPLq3rv1n33nHffq08/oh45XqKOb4rIFk+wqIOBVOvkWMpgPi5znYCWkrGqxwGxEyjVAY0eHR1N3d3dbTo6Ohr2eDxr0EiRNcT8C2JvHB4eTiEWLybBh9NAkUYN/ObmZinQrkYKYoM4V9bX1+8AriEJKvgYXPAqHB4aOI20pgNgegUkxEA5wIJXO8G5Jlplb29vssvl+hw1NLSKRAPTF93d3Y8DkA+8gJMKpsijSP3GSBveUOMFtnvECCVWDbeMspDgcDqdTBVLCrBxLTCcAo7o6OhsS6IHKGDLUQjQYOozIArymFUJ8GKTbGcZsNAJIVblIACzClhjxMrIFWw+rCoBbPc1KMZWO/TDqCfAamBN8dgEmFJkcQM7Ayw+wKbw7AwwpcjiBnYGWHyATeHZGWBKkcUN7Ayw+ACbwrMzwJQiixvYGWDxATaFZ2eAKUUWN7AzwOIDbArPzgBTiixuYGeAxQfYFJ6dAaYUWdzAzoCTDvDe3t4ENhx9d3h4uHzSa8/R/gjbX35EbH+F0wd/LeWemSvQBKP9Nth3N5acnJwBuxvl5eXPbGxsfG9kfxFtBN3X18etL+mMDTH+ZtQvMUKJVfYJaT+Jh0TA4uJiGy50Q1O96h4fH689ODiYM+r0PNqwEXJzdnb2w6KiokxvTIwrbXl5+ROj/mATPgHb29s/wcF1aDKUW85YppSUlGROTk6+DyKmjTo/izZMvXUMxMeNjY3Ps2/oNW8cjOU6Yhww6gc24RNAx1tbW1+3tLTc9DpKRJkE1YjIyMi4ge21VVgjvsUIbRgFcsK2A/Q7MDEx8V5ZWdkt9CfA2Tf3NCW2trZmwuYbM7+wPR0B7ADgZubn5+/CWTzUxQCgQgQzJLWgoODm0NDQG3Nzcx8hsB+QHYtmwUk703tnZ+dXpPNnY2Nj79TX1z8Hn0xxFTj7ZN+uhYWFt3FNSNMQ9n4EcAGk8nbIbaROBLGOMiQBqAczMzONmZmZD3CB6ov+qOJba6uqqkosLS19Mi0t7Rp2bibFxMQ4HQ5HNNIaa9fuFlJ7CRk029DQMIdruatb9Mh7zFLUMz09/ZLb7b6H7W/5qA9JsFOMxO1BD6D0FfoiKCOkL/f39weXlpbuVlZWcl1gVpBldsT0ZGbIesH5ygyhcjT1ynrayLzmdVqKo6RPF+Z+6srKyrsgbUQfRyjnXj/h3QXMOkAaLiN1P0Xa36mtrSUImSIMXiWFoIQcmcdSR+KoGmCUrra2tieQHW8iS75CDKdaW7x+fQSoaXviKQBnRrKDKTKE7PgZa8AIAPyJjdgP6+rqNpSL2L+IJyUlJaq9vT0lNzf3VkJCwrNxcXEvYHtrPqZJLow4pU4t+ikQjIA19KIGdupOdQ62MIrL0G3U70K1ZxAElgBl1vD83ERPAEfdTxDYijcQv/ozPLkK/9QzdBm+K31aefBo+Xv47iLvSpUA7ZazurraFXkwwo84gIDq6uovcYv5O3yXkXWlEMDRp3i6urq2BwcH38JasPlvlbX/CgFEKU9Yh4WFhSP9/f0luIX9YW34/z2+EieXZd6CqPy/mpisrKwrPT09t9PT04txP34KKzcfTi5s+UZ/eARwJFJx7ETfpxb48XsUFjAsRZkVvD1ShRDWSbbINai6ENH6u3//fn5eXl5FUlLSbYDgS1BYYkQAHaok6MGTgP8FvBoXXofjm5ubb+PVuyI2NvZFBn0SOY4A+hBwKgk8ltFX20/S52ltJR41Fi2mjo6Op4uLiyvxKex1vBHyK5WpGBHAiwWkHKud69tMOztDA4lDBoMlM1Q7z87OdnZ2dr6ck5NTER8fX4T6gCdciUVPgNSrpXQmpXQqU+KiS1mPuDBzIYyFXoXqP8Tw1drd1NSUOzU19QGeaB/iVh4gsOFC7nsbxPGxIgRchlIdBBJCMggiDkoyCIqv0/x+wBcqTgf3wMDAa/g814nX9G1hAvUkLiQCYHcpRD8AKhmSFUIGvz/wNuf3ea6mpiYbX48a8FwzijbaMJOYyZfklQyRhCgkQxU9OTwXgtSS9XzaPYTyU5h8DjvSO0RbRIg+bjlnSSV4tZR239Mu2nnskQYcR6zoMfA8mBIgs0AD7i39bns0iHRRyZBjKQWb78WPFfpGMYr0Mhgu1gl4H75ghr5Gixwch1Ej4x/FzutRzMchPgAAAABJRU5ErkJggg==);\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px 27px;\n    width: 24px;\n    height: 27px;\n    display: inline-block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_login_modal_auth_login_modal_component__ = __webpack_require__("../../../../../src/app/auth-login-modal/auth-login-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AppComponent = class AppComponent {
    constructor(_modalService, _authenticationService) {
        this._modalService = _modalService;
        this._authenticationService = _authenticationService;
    }
    ngOnInit() {
        this._authenticationService.currentUser$.subscribe(user => {
            if (user === null) {
                this._modalService.show(__WEBPACK_IMPORTED_MODULE_4__auth_login_modal_auth_login_modal_component__["a" /* AuthLoginModalComponent */], { backdrop: 'static' });
            }
        });
        // Setup Intercom
        window.Intercom('boot', {
            app_id: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intercom.app_id,
            custom_launcher_selector: '#intercom-button',
            alignment: 'left',
            widget: {
                activator: '#IntercomDefaultWidget'
            }
        });
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mnoe-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["b" /* BsModalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_jsonapi__ = __webpack_require__("../../../../angular2-jsonapi/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_jsonapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_jsonapi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_impac_material_public_api__ = __webpack_require__("../../../../../../impac-material/src/lib/public_api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_error_handler__ = __webpack_require__("../../../../../src/app/app-error-handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers_app_injector__ = __webpack_require__("../../../../../src/app/_helpers/app-injector.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__my_account_my_account_component__ = __webpack_require__("../../../../../src/app/my-account/my-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__company_settings_company_settings_component__ = __webpack_require__("../../../../../src/app/company-settings/company-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__interceptors_basic_auth_interceptor__ = __webpack_require__("../../../../../src/app/_interceptors/basic-auth-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__jsonapi_services_mnohub_datastore__ = __webpack_require__("../../../../../src/app/_jsonapi-services/mnohub-datastore.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__user_menu_user_menu_component__ = __webpack_require__("../../../../../src/app/user-menu/user-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_password_strength_bar__ = __webpack_require__("../../../../ng2-password-strength-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_password_strength_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_password_strength_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__auth_login_modal_auth_login_modal_component__ = __webpack_require__("../../../../../src/app/auth-login-modal/auth-login-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Core imports





// Lib imports




// App imports













let AppModule = class AppModule {
    constructor(injector) {
        this.injector = injector;
        Object(__WEBPACK_IMPORTED_MODULE_12__helpers_app_injector__["a" /* appInjector */])(this.injector);
    }
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__my_account_my_account_component__["a" /* MyAccountComponent */],
            __WEBPACK_IMPORTED_MODULE_15__company_settings_company_settings_component__["a" /* CompanySettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__user_menu_user_menu_component__["a" /* UserMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_21__auth_login_modal_auth_login_modal_component__["a" /* AuthLoginModalComponent */]
        ],
        imports: [
            // Core modules
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            // Lib modules
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["c" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_20_ng2_password_strength_bar__["PasswordStrengthBarModule"],
            __WEBPACK_IMPORTED_MODULE_7_angular2_jsonapi__["JsonApiModule"],
            __WEBPACK_IMPORTED_MODULE_8_impac_material_public_api__["b" /* ImpacMaterialModule */],
            // App modules
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            // Override default error handler
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_10__app_error_handler__["a" /* AppErrorHandler */] },
            // Add Basic Auth interceptor
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_16__interceptors_basic_auth_interceptor__["a" /* BasicAuthInterceptor */], multi: true },
            __WEBPACK_IMPORTED_MODULE_17__jsonapi_services_mnohub_datastore__["a" /* MnohubDatastore */],
            __WEBPACK_IMPORTED_MODULE_18__services_authentication_service__["a" /* AuthenticationService */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_21__auth_login_modal_auth_login_modal_component__["a" /* AuthLoginModalComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injector"]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth-login-modal/auth-login-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(user)\">\n  <div class=\"modal-body\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email address</label>\n        <input id=\"email\" name=\"email\" [(ngModel)]=\"user.username\" required class=\"form-control\" type=\"email\" placeholder=\"Email\" aria-label=\"Email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required class=\"form-control\" type=\"password\" placeholder=\"Password\" aria-label=\"Password\">\n      </div>\n  </div>\n  <div class=\"modal-footer\">\n\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"isLoading\">\n      <i class=\"fa fa-spin fa-spinner\" *ngIf=\"isLoading\"></i>\n      Login\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/auth-login-modal/auth-login-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth-login-modal/auth-login-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLoginModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_impac_material_public_api__ = __webpack_require__("../../../../../../impac-material/src/lib/public_api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jsonapi_services_models_user_model__ = __webpack_require__("../../../../../src/app/_jsonapi-services/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let AuthLoginModalComponent = class AuthLoginModalComponent {
    constructor(bsModalRef, _http, _authService, _impacConfig) {
        this.bsModalRef = bsModalRef;
        this._http = _http;
        this._authService = _authService;
        this._impacConfig = _impacConfig;
        this.user = {};
        this.isLoading = false;
    }
    ngOnInit() {
    }
    onSubmit(user) {
        this.isLoading = true;
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        });
        this._http.post('/mnoe/auth/users/sign_in', user, { headers: headers }).subscribe((result) => {
            __WEBPACK_IMPORTED_MODULE_5__jsonapi_services_models_user_model__["a" /* User */].find(result.id, { include: 'organizations' }).subscribe((user) => {
                this._authService.login(user);
                this._impacConfig.ssoSession = user.sso_session;
                this._impacConfig.impacUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].impac_url;
                this.bsModalRef.hide();
                this.isLoading = false;
            });
        }, (error) => {
            console.error('### Error', error);
            this.isLoading = false;
        });
    }
};
AuthLoginModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mnoe-auth-login-modal',
        template: __webpack_require__("../../../../../src/app/auth-login-modal/auth-login-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth-login-modal/auth-login-modal.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_impac_material_public_api__["a" /* ImpacConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_impac_material_public_api__["a" /* ImpacConfigService */]) === "function" && _d || Object])
], AuthLoginModalComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=auth-login-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/company-settings/company-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  company-settings works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/company-settings/company-settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company-settings/company-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanySettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let CompanySettingsComponent = class CompanySettingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
CompanySettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mnoe-company-settings',
        template: __webpack_require__("../../../../../src/app/company-settings/company-settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company-settings/company-settings.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CompanySettingsComponent);

//# sourceMappingURL=company-settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"user\">\n  <impac-dashboard-selector></impac-dashboard-selector>\n  <impac-dashboard></impac-dashboard>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  position: relative;\n  height: calc(100% - 58px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let DashboardComponent = class DashboardComponent {
    constructor(_authentication) {
        this._authentication = _authentication;
    }
    ngOnInit() {
        this._authentication.currentUser$
            .subscribe(user => this.user = user);
    }
};
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mnoe-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/my-account/my-account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mt-5\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Edit your personal settings</h4>\n          <form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n              <div class=\"form-group col-md\">\n                <label for=\"firstname\">First Name</label>\n                <input id=\"firstname\" name=\"name\" class=\"form-control\" [(ngModel)]=\"user.name\" type=\"text\" placeholder=\"Enter your first name\">\n              </div>\n              <div class=\"form-group col-md\">\n                <label for=\"lastname\">Last Name</label>\n                <input id=\"lastname\" name=\"surname\" class=\"form-control\" [(ngModel)]=\"user.surname\" type=\"text\" placeholder=\"Enter your last name\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group col-md\">\n                <label for=\"email\">Email Address</label>\n                <input id=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" type=\"email\" placeholder=\"Enter your email\">\n              </div>\n              <div class=\"form-group col-md\">\n                <label for=\"phone\">Phone Number</label>\n                <input id=\"phone\" name=\"phone\" class=\"form-control\" [(ngModel)]=\"user.phone\" type=\"tel\" placeholder=\"Enter your phone number\">\n              </div>\n            </div>\n\n            <button type=\"submit\" class=\"btn btn-warning\">Submit</button>\n            <button type=\"button\" class=\"btn btn-default\">Cancel</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row mt-5\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Change your password</h4>\n          <form (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n              <div class=\"form-group col-md-6\">\n                <label for=\"oldpassword\">Old Password</label>\n                <input id=\"oldpassword\" name=\"oldpassword\" class=\"form-control\" [(ngModel)]=\"oldpassword\" type=\"password\" placeholder=\"Enter your old password\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group col-md\">\n                <label for=\"password\">New Password</label>\n                <input id=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" type=\"password\" placeholder=\"Enter your password\">\n                <ng2-password-strength-bar\n                  [passwordToCheck]=\"user.password\"\n                  [barLabel]=\"barLabel\">\n                </ng2-password-strength-bar>\n              </div>\n              <div class=\"form-group col-md\">\n                <label for=\"confirmation\">Confirm Password</label>\n                <input id=\"confirmation\" name=\"confirm\" class=\"form-control\" [(ngModel)]=\"confirm\" type=\"password\" placeholder=\"Confirm your password\">\n                <span *ngIf=\"confirm && (user.password === confirm)\" class=\"form-text text-muted\">Password matches!</span>\n              </div>\n            </div>\n\n            <button type=\"submit\" class=\"btn btn-warning\">Submit</button>\n            <button type=\"button\" class=\"btn btn-default\">Cancel</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/my-account/my-account.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host ::ng-deep ng2-password-strength-bar div#strength small {\n  color: #868e96 !important;\n  margin-top: 0.25rem;\n  font-size: inherit;\n  font-weight: inherit; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-account/my-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonapi_services_mnohub_datastore__ = __webpack_require__("../../../../../src/app/_jsonapi-services/mnohub-datastore.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonapi_services_models_user_model__ = __webpack_require__("../../../../../src/app/_jsonapi-services/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let MyAccountComponent = class MyAccountComponent {
    constructor(datastore) {
        this.datastore = datastore;
        this.barLabel = 'Password strength:';
        this.user = this.datastore.createRecord(__WEBPACK_IMPORTED_MODULE_2__jsonapi_services_models_user_model__["a" /* User */], {});
    }
    ngOnInit() {
    }
    onSubmit() {
    }
};
MyAccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mnoe-my-account',
        template: __webpack_require__("../../../../../src/app/my-account/my-account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/my-account/my-account.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__jsonapi_services_mnohub_datastore__["a" /* MnohubDatastore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__jsonapi_services_mnohub_datastore__["a" /* MnohubDatastore */]) === "function" && _a || Object])
], MyAccountComponent);

var _a;
//# sourceMappingURL=my-account.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-menu/user-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" dropdown placement=\"bottom right\" container=\"body\">\n  <img id=\"avatar-navbar\" dropdownToggle class=\"rounded dropdown-toggle\" src=\"assets/images/avatar.jpg\">\n  <div *dropdownMenu id=\"dropdown-user-menu\" class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\n    <div id=\"user-section\">\n      <img id=\"user-avatar\" class=\"valign-wrapper circle\" src=\"assets/images/avatar.jpg\">\n      <span id=\"user-infos\">\n        <span id=\"user-name\">{{user.name + ' ' + user.surname}}</span>\n        <span id=\"user-email\">{{user.email}}</span>\n      </span>\n    </div>\n    <div id=\"organizations-list\" class=\"list-group\">\n      <a *ngFor=\"let organization of user.organizations\" (click)=\"change(organization, $event)\" class=\"list-group-item\" [ngClass]=\"{'active': selectedOrganization === organization}\">\n        <span>{{organization.name}}</span>\n        <a (click)=\"goToSettings(organization, $event)\" class=\"company-settings\">\n          <i class=\"material-icons\">settings</i>\n        </a>\n      </a>\n    </div>\n    <div id=\"user-menu-buttons\" class=\"row\">\n      <a routerLink=\"/my-account\" class=\"col-sm\"><i class=\"material-icons\">person</i> My Account</a>\n      <a href (click)=\"logout()\" class=\"col-sm\"><i class=\"material-icons\">exit_to_app</i> Logout</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-menu/user-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#avatar-navbar {\n  max-height: 40px;\n  cursor: pointer; }\n\n#user-section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 1em; }\n  #user-section #user-avatar {\n    max-height: 120px;\n    max-width: 120px; }\n  #user-section #user-infos {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    #user-section #user-infos #user-name {\n      font-weight: bold;\n      margin-bottom: 8px; }\n\n#organizations-list {\n  max-height: 40vh;\n  overflow: auto;\n  border-top: 1px solid rgba(0, 0, 0, 0.15);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15); }\n  #organizations-list a.list-group-item {\n    cursor: pointer;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 1rem 1.25rem;\n    border-radius: 0;\n    border-left: none;\n    border-right: none; }\n    #organizations-list a.list-group-item.active {\n      background-color: #626d6d;\n      border-color: #626d6d;\n      color: #e6edee; }\n    #organizations-list a.list-group-item:first-child {\n      border-top: none; }\n    #organizations-list a.list-group-item:last-child {\n      border-bottom: none; }\n  #organizations-list a.company-settings {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack: center;\n        align-content: center; }\n\n#user-menu-buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 8px; }\n  #user-menu-buttons a {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-decoration: none; }\n    #user-menu-buttons a i {\n      margin-right: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-menu/user-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_impac_material_public_api__ = __webpack_require__("../../../../../../impac-material/src/lib/public_api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let UserMenuComponent = class UserMenuComponent {
    constructor(_router, _authentication, _impacConfig) {
        this._router = _router;
        this._authentication = _authentication;
        this._impacConfig = _impacConfig;
    }
    ngOnInit() {
        this._authentication.currentUser$
            .subscribe(user => {
            if (user !== null) {
                this.selectedOrganization = user.organizations[0];
                this._impacConfig.currentOrganization = this.selectedOrganization.id;
                this.user = user;
            }
            else {
                this.selectedOrganization = null;
                this.user = null;
            }
        });
    }
    change(organization, event) {
        event.stopPropagation();
        this.selectedOrganization = organization;
        this._impacConfig.currentOrganization = this.selectedOrganization.id;
        this._router.navigate(['dashboard']);
    }
    goToSettings(organization, event) {
        event.stopPropagation();
        this.selectedOrganization = organization;
        this._router.navigate(['company-settings']);
    }
    logout() {
        this._authentication.logout();
    }
};
UserMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mnoe-user-menu',
        template: __webpack_require__("../../../../../src/app/user-menu/user-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-menu/user-menu.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_impac_material_public_api__["a" /* ImpacConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_impac_material_public_api__["a" /* ImpacConfigService */]) === "function" && _c || Object])
], UserMenuComponent);

var _a, _b, _c;
//# sourceMappingURL=user-menu.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const environment = {
    production: true,
    hmr: false,
    api_key: 'CHANGE_ME',
    api_secret: 'CHANGE_ME',
    impac_url: 'https://api-impac-uat.maestrano.io',
    intercom: {
        app_id: 'bsbgn4sp',
        updateOnRouterChange: true
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/hmr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__ = __webpack_require__("../../../../@angularclass/hmr/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__);


const hmrBootstrap = (module, bootstrap) => {
    let ngModule;
    module.hot.accept();
    bootstrap().then(mod => ngModule = mod);
    module.hot.dispose(() => {
        const appRef = ngModule.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]);
        const elements = appRef.components.map(c => c.location.nativeElement);
        const makeVisible = Object(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};
/* unused harmony export hmrBootstrap */

//# sourceMappingURL=hmr.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hmr__ = __webpack_require__("../../../../../src/hmr.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
const bootstrap = () => Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].hmr) {
    if (false) {
        hmrBootstrap(module, bootstrap);
    }
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap();
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map