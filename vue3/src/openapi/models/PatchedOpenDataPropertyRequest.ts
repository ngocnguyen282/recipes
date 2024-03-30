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
import type { OpenDataVersionRequest } from './OpenDataVersionRequest';
import {
    OpenDataVersionRequestFromJSON,
    OpenDataVersionRequestFromJSONTyped,
    OpenDataVersionRequestToJSON,
} from './OpenDataVersionRequest';

/**
 * Moves `UniqueValidator`'s from the validation stage to the save stage.
 * It solves the problem with nested validation for unique fields on update.
 * 
 * If you want more details, you can read related issues and articles:
 * https://github.com/beda-software/drf-writable-nested/issues/1
 * http://www.django-rest-framework.org/api-guide/validators/#updating-nested-serializers
 * 
 * Example of usage:
 * ```
 *     class Child(models.Model):
 *     field = models.CharField(unique=True)
 * 
 * 
 * class Parent(models.Model):
 *     child = models.ForeignKey('Child')
 * 
 * 
 * class ChildSerializer(UniqueFieldsMixin, serializers.ModelSerializer):
 *     class Meta:
 *         model = Child
 * 
 * 
 * class ParentSerializer(NestedUpdateMixin, serializers.ModelSerializer):
 *     child = ChildSerializer()
 * 
 *     class Meta:
 *         model = Parent
 * ```
 * 
 * Note: `UniqueFieldsMixin` must be applied only on the serializer
 * which has unique fields.
 * 
 * Note: When you are using both mixins
 * (`UniqueFieldsMixin` and `NestedCreateMixin` or `NestedUpdateMixin`)
 * you should put `UniqueFieldsMixin` ahead.
 * @export
 * @interface PatchedOpenDataPropertyRequest
 */
export interface PatchedOpenDataPropertyRequest {
    /**
     * 
     * @type {OpenDataVersionRequest}
     * @memberof PatchedOpenDataPropertyRequest
     */
    version?: OpenDataVersionRequest;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataPropertyRequest
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataPropertyRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataPropertyRequest
     */
    unit?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedOpenDataPropertyRequest
     */
    fdcId?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataPropertyRequest
     */
    comment?: string;
}

/**
 * Check if a given object implements the PatchedOpenDataPropertyRequest interface.
 */
export function instanceOfPatchedOpenDataPropertyRequest(value: object): boolean {
    return true;
}

export function PatchedOpenDataPropertyRequestFromJSON(json: any): PatchedOpenDataPropertyRequest {
    return PatchedOpenDataPropertyRequestFromJSONTyped(json, false);
}

export function PatchedOpenDataPropertyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedOpenDataPropertyRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'version': json['version'] == null ? undefined : OpenDataVersionRequestFromJSON(json['version']),
        'slug': json['slug'] == null ? undefined : json['slug'],
        'name': json['name'] == null ? undefined : json['name'],
        'unit': json['unit'] == null ? undefined : json['unit'],
        'fdcId': json['fdc_id'] == null ? undefined : json['fdc_id'],
        'comment': json['comment'] == null ? undefined : json['comment'],
    };
}

export function PatchedOpenDataPropertyRequestToJSON(value?: PatchedOpenDataPropertyRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'version': OpenDataVersionRequestToJSON(value['version']),
        'slug': value['slug'],
        'name': value['name'],
        'unit': value['unit'],
        'fdc_id': value['fdcId'],
        'comment': value['comment'],
    };
}

