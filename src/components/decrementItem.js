import React from 'react';

export function DeleteItem({count, deleteItem}) {
    return (
        <div>
            <button
                className="bp3-button"
                onClick={deleteItem}
            >
                x
            </button>
        </div>
    );
}