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
 * @interface ConnectorConfigConfigRequest
 */
export interface ConnectorConfigConfigRequest {
    /**
     * 
     * @type {string}
     * @memberof ConnectorConfigConfigRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorConfigConfigRequest
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorConfigConfigRequest
     */
    token?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorConfigConfigRequest
     */
    todoEntity?: string;
    /**
     * Is Connector Enabled
     * @type {boolean}
     * @memberof ConnectorConfigConfigRequest
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ConnectorConfigConfigRequest
     */
    onShoppingListEntryCreatedEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ConnectorConfigConfigRequest
     */
    onShoppingListEntryUpdatedEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ConnectorConfigConfigRequest
     */
    onShoppingListEntryDeletedEnabled?: boolean;
}

/**
 * Check if a given object implements the ConnectorConfigConfigRequest interface.
 */
export function instanceOfConnectorConfigConfigRequest(value: object): boolean {
    if (!('name' in value)) return false;
    return true;
}

export function ConnectorConfigConfigRequestFromJSON(json: any): ConnectorConfigConfigRequest {
    return ConnectorConfigConfigRequestFromJSONTyped(json, false);
}

export function ConnectorConfigConfigRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectorConfigConfigRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'url': json['url'] == null ? undefined : json['url'],
        'token': json['token'] == null ? undefined : json['token'],
        'todoEntity': json['todo_entity'] == null ? undefined : json['todo_entity'],
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'onShoppingListEntryCreatedEnabled': json['on_shopping_list_entry_created_enabled'] == null ? undefined : json['on_shopping_list_entry_created_enabled'],
        'onShoppingListEntryUpdatedEnabled': json['on_shopping_list_entry_updated_enabled'] == null ? undefined : json['on_shopping_list_entry_updated_enabled'],
        'onShoppingListEntryDeletedEnabled': json['on_shopping_list_entry_deleted_enabled'] == null ? undefined : json['on_shopping_list_entry_deleted_enabled'],
    };
}

export function ConnectorConfigConfigRequestToJSON(value?: ConnectorConfigConfigRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'url': value['url'],
        'token': value['token'],
        'todo_entity': value['todoEntity'],
        'enabled': value['enabled'],
        'on_shopping_list_entry_created_enabled': value['onShoppingListEntryCreatedEnabled'],
        'on_shopping_list_entry_updated_enabled': value['onShoppingListEntryUpdatedEnabled'],
        'on_shopping_list_entry_deleted_enabled': value['onShoppingListEntryDeletedEnabled'],
    };
}

