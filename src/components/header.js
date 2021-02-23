import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';

export default function Header() {
    return (
        <header className="h-16 bg-white border-b mb-8">
            <div className="container mx-auto max-width-lg h-full">
                <div className="flex justify-between h-full">
                    <div className="text-gray-700 text-center felx items-center align-items cursor-pointer">
                        <h1>Instagram</h1>
                    </div>
                </div>
            </div>
        </header>
    )
}