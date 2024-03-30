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
import type { UserRequest } from './UserRequest';
import {
    UserRequestFromJSON,
    UserRequestFromJSONTyped,
    UserRequestToJSON,
} from './UserRequest';

/**
 * Adds nested create feature
 * @export
 * @interface CustomFilterRequest
 */
export interface CustomFilterRequest {
    /**
     * 
     * @type {string}
     * @memberof CustomFilterRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFilterRequest
     */
    search: string;
    /**
     * 
     * @type {Array<UserRequest>}
     * @memberof CustomFilterRequest
     */
    shared?: Array<UserRequest>;
}

/**
 * Check if a given object implements the CustomFilterRequest interface.
 */
export function instanceOfCustomFilterRequest(value: object): boolean {
    if (!('name' in value)) return false;
    if (!('search' in value)) return false;
    return true;
}

export function CustomFilterRequestFromJSON(json: any): CustomFilterRequest {
    return CustomFilterRequestFromJSONTyped(json, false);
}

export function CustomFilterRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomFilterRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'search': json['search'],
        'shared': json['shared'] == null ? undefined : ((json['shared'] as Array<any>).map(UserRequestFromJSON)),
    };
}

export function CustomFilterRequestToJSON(value?: CustomFilterRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'search': value['search'],
        'shared': value['shared'] == null ? undefined : ((value['shared'] as Array<any>).map(UserRequestToJSON)),
    };
}

