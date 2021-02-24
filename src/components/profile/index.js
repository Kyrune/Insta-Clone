import React, { useReducer, useEffect } from 'react';
import Header from './header';
import Photos from './photos';
import { getUserByUsername, getUserPhotosByUsername } from '../../services/firebase';

const reducer = (state, newState) => ({ ...state, ...newState });
const initialState = {
    profile: {},
    photosCollection: [],
    followerCount: 0
};

export default function Profile({ username }) {
    const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
        reducer,
        initialState
    );

    useEffect(() => {
        // Caching here in localstorage so it doesn't make a network call that's already made previously
        async function getProfileInfoAndPhotos() {
            const [{ ...user }] = await getUserByUsername(username);
        }
        getProfileInfoAndPhotos();
    }, [username]);

    return (
        <>
            <Header />
            <Photos />
        </>
    )
}
