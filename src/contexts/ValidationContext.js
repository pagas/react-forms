import React from 'react';

/**
 * Store validation issues for each form element as an array. 
 * @type {React.Context<{getMessageForField: (function(*): *[])}>}
 */
export const ValidationContext = React.createContext({
    getMessageForField: (field) => []
});
