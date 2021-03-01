import React, { useEffect } from 'react';
import Header from '../components/header';

export default function NotFound() {
    useEffect(() => {
        document.title = '404 - Not Found';
    });

    return (
        <div className="bg-gray-100">
            <Header />
            <div className="mx-auto max-w-screen-lg">
                <p className="text-center text-2xl">Not Found</p>
            </div>
        </div>
    )
}
