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
 * @interface NutritionInformation
 */
export interface NutritionInformation {
    /**
     * 
     * @type {number}
     * @memberof NutritionInformation
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof NutritionInformation
     */
    carbohydrates: string;
    /**
     * 
     * @type {string}
     * @memberof NutritionInformation
     */
    fats: string;
    /**
     * 
     * @type {string}
     * @memberof NutritionInformation
     */
    proteins: string;
    /**
     * 
     * @type {string}
     * @memberof NutritionInformation
     */
    calories: string;
    /**
     * 
     * @type {string}
     * @memberof NutritionInformation
     */
    source?: string;
}

/**
 * Check if a given object implements the NutritionInformation interface.
 */
export function instanceOfNutritionInformation(value: object): boolean {
    if (!('carbohydrates' in value)) return false;
    if (!('fats' in value)) return false;
    if (!('proteins' in value)) return false;
    if (!('calories' in value)) return false;
    return true;
}

export function NutritionInformationFromJSON(json: any): NutritionInformation {
    return NutritionInformationFromJSONTyped(json, false);
}

export function NutritionInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): NutritionInformation {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'carbohydrates': json['carbohydrates'],
        'fats': json['fats'],
        'proteins': json['proteins'],
        'calories': json['calories'],
        'source': json['source'] == null ? undefined : json['source'],
    };
}

export function NutritionInformationToJSON(value?: NutritionInformation | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'carbohydrates': value['carbohydrates'],
        'fats': value['fats'],
        'proteins': value['proteins'],
        'calories': value['calories'],
        'source': value['source'],
    };
}

