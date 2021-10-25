import db from '../firebase'
import { doc, getDoc, runTransaction, addDoc, collection, deleteDoc } from "firebase/firestore/lite";


class UserServices {
    async getUserDetails(uid){
        const docRef = doc(db, "roles", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const user = docSnap.data();
            return console.log(user)
        } else {
            return "No user like this exists";
        }
    }
    async updateDetails(uid, updatedDetails){
        try {
            await runTransaction(db, async (transaction) => {
                const docRef = doc(db, "roles", uid);
                const userDoc = await transaction.get(docRef);
                if (!userDoc.exists()) {
                    throw "Document does not exist!";
                }else{
                    console.table(userDoc, updatedDetails)
                    // transaction to update user details
                    // const newCodes = userDoc.data().oneMonthCodes.slice(1)
                    // transaction.update(docRef, updatedDetails);
                }
            });
        } catch (error) {
            
        }
    }
    async addUser(userDetails){
        try {
            await addDoc(collection(db, "roles"), userDetails).then(user => {
                console.log("user added with id: ", user.id);
            }).catch(err => {
                console.error(err)
            })
        } catch (error) {
            console.error(error)
        }
    }
    async deleteUser(uid){
        try {
            await deleteDoc(doc(db, "roles", uid));
        } catch (error) {
            console.error(error)
        }
    }
}