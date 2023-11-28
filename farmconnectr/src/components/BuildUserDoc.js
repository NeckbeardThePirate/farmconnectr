
export default async function BuildUserDoc(collection, firestore, email, displayName, user, addDoc) {
    const usersCollection = collection(firestore, 'users');
    const userData = {
        email: email,
        displayName: displayName,
        lastLogin: Date.now(),
        posts: [],
        userID: user.uid,
        joinDate: Date.now(),
        followerCount: 0,
        followingCount: 0,
        userDescription: '',
        followingList: [],
        followerList: [],
        mooCount: 0,
        goatCount: 0,
        messages: [],
        unreadMessages: [],
    };
    console.log(usersCollection)
    console.group(userData, usersCollection)

    const userDoc = await addDoc(usersCollection, userData);
    console.warn(userData)
}