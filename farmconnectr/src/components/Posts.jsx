import React, { useState, useEffect } from 'react';
import { Routes, useNavigate } from 'react-router-dom';
import { getFirestore, collection, query, where, addDoc, updateDoc, getDocs, doc, setDoc, getDoc } from "firebase/firestore"
import Like from './Like'
import PostBlock from './PostBlock';


const Posts = (props) => {    

    const [counter, setCounter] = useState(0);
    const [postsData, setPostsData] = useState(null);
    const currentPosts = props.recentPosts


    return (
        <>
            
            <div id='primary-content'>
                {props.recentPosts.map((post, index) => (
                    <PostBlock post={post} index={index} showPost={props.showPost} setShowPost={props.setShowPost} setFullData={props.setFullData} useState={useState} />  
                ))}
            </div>
        </>
    )
}

export default Posts