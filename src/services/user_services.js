import {db, auth} from '../firebase'
import { doc, setDoc, runTransaction, deleteDoc, getDoc } from "firebase/firestore/lite";
import { 
    signOut, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    sendPasswordResetEmail, 
    GoogleAuthProvider, 
    signInWithPopup,
    // updateProfile,
    sendEmailVerification
} from "firebase/auth";
class UserServices {
    // async extras(userDetails){
    //     updateProfile
    // }
    async signup(payload) {
        try {
            return createUserWithEmailAndPassword(auth, payload.email, payload.password)
        } catch (error) {
            console.error(error)
        }
    }
    async googleSignin() {
        const provider = new GoogleAuthProvider();
        try {
            return signInWithPopup(auth, provider)
        } catch (error) {
            console.error(error)
        }
    }
    async login(payload) {
        try {
            return signInWithEmailAndPassword(auth, payload.email, payload.password)
        } catch (error) {
            console.error(error)
        }
    }
    async logout() {
        return signOut(auth);
    }
    async resetPassword(email){
        try {
            return sendPasswordResetEmail(auth, email,{
                url: 'http://localhost:8080/login'
            })
        } catch (error) {
            console.error(error)
        }
    }
    async verifyEmail(){
        try {
            return sendEmailVerification(auth.currentUser)
        } catch (error) {
            console.error(error)
        }
    }
    async getUserDetails(uid) {
        const docRef = doc(db, "users", uid);
        return getDoc(docRef);
    }
    async updateDetails(uid) {
        try {
            await runTransaction(db, async (transaction) => {
                const docRef = doc(db, "users", uid);
                const userDoc = await transaction.get(docRef);
                if (!userDoc.exists()) {
                    throw "Document does not exist!";
                } else {
                    console.table(userDoc, updatedDetails)
                    // transaction to update user details
                    // const newCodes = userDoc.data().oneMonthCodes.slice(1)
                    // transaction.update(docRef, updatedDetails);
                }
            });
        } catch (error) {
            console.log(error)
        }
    }
    async addUserDetails(userDetails, uid) {
        try {
            await setDoc(doc(db, "users", uid), userDetails)
        } catch (error) {
            return console.error(error)
        }
    }
    async deleteUser(uid) {
        try {
            await deleteDoc(doc(db, "users", uid));
            return console.log("user gone")
        } catch (error) {
            return console.error(error)
        }
    }
}

export default new UserServices();