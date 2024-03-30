/* tslint:disable */
/* eslint-disable */
/**
 * Tandoor
 * Tandoor API Docs
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CustomFilterRequest } from './CustomFilterRequest';
import {
    CustomFilterRequestFromJSON,
    CustomFilterRequestFromJSONTyped,
    CustomFilterRequestToJSON,
} from './CustomFilterRequest';
import type { UserRequest } from './UserRequest';
import {
    UserRequestFromJSON,
    UserRequestFromJSONTyped,
    UserRequestToJSON,
} from './UserRequest';

/**
 * Adds nested create feature
 * @export
 * @interface RecipeBookRequest
 */
export interface RecipeBookRequest {
    /**
     * 
     * @type {string}
     * @memberof RecipeBookRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RecipeBookRequest
     */
    description?: string;
    /**
     * 
     * @type {Array<UserRequest>}
     * @memberof RecipeBookRequest
     */
    shared: Array<UserRequest>;
    /**
     * 
     * @type {CustomFilterRequest}
     * @memberof RecipeBookRequest
     */
    filter?: CustomFilterRequest;
    /**
     * 
     * @type {number}
     * @memberof RecipeBookRequest
     */
    order?: number;
}

/**
 * Check if a given object implements the RecipeBookRequest interface.
 */
export function instanceOfRecipeBookRequest(value: object): boolean {
    if (!('name' in value)) return false;
    if (!('shared' in value)) return false;
    return true;
}

export function RecipeBookRequestFromJSON(json: any): RecipeBookRequest {
    return RecipeBookRequestFromJSONTyped(json, false);
}

export function RecipeBookRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecipeBookRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'shared': ((json['shared'] as Array<any>).map(UserRequestFromJSON)),
        'filter': json['filter'] == null ? undefined : CustomFilterRequestFromJSON(json['filter']),
        'order': json['order'] == null ? undefined : json['order'],
    };
}

export function RecipeBookRequestToJSON(value?: RecipeBookRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'description': value['description'],
        'shared': ((value['shared'] as Array<any>).map(UserRequestToJSON)),
        'filter': CustomFilterRequestToJSON(value['filter']),
        'order': value['order'],
    };
}

