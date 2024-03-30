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
/**
 * 
 * @export
 * @interface FoodSimpleRequest
 */
export interface FoodSimpleRequest {
    /**
     * 
     * @type {string}
     * @memberof FoodSimpleRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof FoodSimpleRequest
     */
    pluralName?: string;
}

/**
 * Check if a given object implements the FoodSimpleRequest interface.
 */
export function instanceOfFoodSimpleRequest(value: object): boolean {
    if (!('name' in value)) return false;
    return true;
}

export function FoodSimpleRequestFromJSON(json: any): FoodSimpleRequest {
    return FoodSimpleRequestFromJSONTyped(json, false);
}

export function FoodSimpleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FoodSimpleRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'pluralName': json['plural_name'] == null ? undefined : json['plural_name'],
    };
}

export function FoodSimpleRequestToJSON(value?: FoodSimpleRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'plural_name': value['pluralName'],
    };
}

