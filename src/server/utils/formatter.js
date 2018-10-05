// @flow

/**
 *   Function used to add missing spaces to a specified length.
 */
export const fillTrailingSpaces = (value: string , length: number): string => {
    if(!value || value.length > length) {
        return value;
    }
    return value + " ".repeat(length - value.length);
} 
