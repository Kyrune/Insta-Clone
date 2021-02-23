import React, { useEffect } from 'react';

export default function NotFound() {
    useEffect(() => {
        document.title = '404 - Not Found';
    });

    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-screen-lg">
                <p className="text-center text-2xl">Not Found</p>
            </div>
        </div>
    )
}