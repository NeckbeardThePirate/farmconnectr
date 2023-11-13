import React, { useState, useEffect } from 'react';
import { Routes, useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, addDoc, updateDoc, getDocs, doc, setDoc, getDoc } from "firebase/firestore"

const Posts = () => {
    
    const firebaseConfig = {
        apiKey: "AIzaSyDT-oD3sZuAxmGXzlHBK6dC1fyKkwlBgK4",
        authDomain: "farmconnectr.firebaseapp.com",
        projectId: "farmconnectr",
        storageBucket: "farmconnectr.appspot.com",
        messagingSenderId: "388880470124",
        appId: "1:388880470124:web:ae24d1447b9dcbc1628849",
        measurementId: "G-HYX95953L8"
    };
      
      // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    const [counter, setCounter] = useState(0);
    const [postsData, setPostsData] = useState(null);
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const postsDocId = 'allPosts';
            const postsDocRef = doc(firestore, 'posts', postsDocId)
            const postsDocData = await getDoc(postsDocRef);
            if (postsDocData.exists()) {
                setRecentPosts(postsDocData.data().recentPosts);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div id='primary-content'>
                    {recentPosts.map((post, index) => (
                        <div key={index} className='post-box'>
                            <p>{post.id}</p>
                            <p>{post.postContent}</p>
                            {/* Add other elements based on post properties */}
                        </div>
                    ))}
                </div>
        </>
    )
}

export default Posts