import React, { useReducer, useEffect } from 'react';
import Header from '../post/header';
import Photos from './photos';

const reducer = (state, newState) => ({ ...state, ...newState });
const initialState = {
    profile: {},
    photosCollection: [],
    followerCount
};

export default function Profile({ username }) {
    const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <>
            <Header />
            <Photos />
        </>
    )
}
