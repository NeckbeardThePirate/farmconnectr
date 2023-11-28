import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import Posts from './Posts';
import Menu from './Menu';
import BlowUpPost from './BlowUpPost'
import React, { useState, useEffect } from 'react';
import Banner from './Banner'

const Page = (props) => {
    // const firebaseConfig = {
    //     apiKey: "AIzaSyDT-oD3sZuAxmGXzlHBK6dC1fyKkwlBgK4",
    //     authDomain: "farmconnectr.firebaseapp.com",
    //     projectId: "farmconnectr",
    //     storageBucket: "farmconnectr.appspot.com",
    //     messagingSenderId: "388880470124",
    //     appId: "1:388880470124:web:ae24d1447b9dcbc1628849",
    //     measurementId: "G-HYX95953L8"
    // };

    // // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    // const firestore = getFirestore(app);

    const firestore = props.firestore;
    const postsDocId = 'allPosts';
    const postsDocRef = doc(firestore, 'posts', postsDocId);
    const [recentPosts, setRecentPosts] = useState([]);
    const [showPost, setShowPost] = useState(false);
    const [fullData, setFullData] = useState({});
    const [postComments, setPostComments] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            
            const postsDocData = await getDoc(postsDocRef);
            if (postsDocData.exists()) {
                setRecentPosts(postsDocData.data().recentPosts);
            }
        };

        fetchData();
    }, []);
    console.log('40 page fullData',fullData)
    return (
        <>
            <div className='container'>
                <Banner />
                <Menu postsDocRef={postsDocRef} recentPosts={recentPosts} setRecentPosts={setRecentPosts} />
                <Posts recentPosts={recentPosts} showPost={showPost} setShowPost={setShowPost} setFullData={setFullData} />
            {showPost ? <BlowUpPost 
                showPost={showPost} 
                setShowPost={setShowPost} 
                fullData={fullData} 
                useState={useState} 
                updateDoc={updateDoc} 
                postComments={postComments}
                setPostComments={setPostComments}
                recentPosts={recentPosts}
                postsDocRef={postsDocRef}
                /> : null}
            </div>
        </>
    );
}

export default Page;




