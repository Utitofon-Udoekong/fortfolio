import db from '../firebase'
import { doc, getDoc, runTransaction, addDoc, collection, deleteDoc } from "firebase/firestore/lite";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

class UserServices {
    async signup(payload) {
        const auth = getAuth();
        try {
            createUserWithEmailAndPassword(auth, payload.email, payload.password)
            .then((userCredential) => {
                return console.log(userCredential.user.uid)
            })
            .catch((error) => {
                const errorCode = error.code;
                return console.log(error, errorCode)
            });
        } catch (error) {
            console.error(error)
        }
    }
    async login(payload) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, payload.email, payload.password)
            .then((userCredential) => {
                return console.log(userCredential.user.uid)
            })
            .catch((error) => {
                const errorCode = error.code;
                return console.log(error, errorCode)
            });
    }
    async logout() {
        const auth = getAuth();
        signOut(auth).then(() => {
            return console.log("logged out")
        }).catch((error) => {
            return console.error(error)
        });
    }
    async getUserDetails(uid) {
        const docRef = doc(db, "roles", uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const user = docSnap.data();
            return console.log(user)
        } else {
            return "No user like this exists";
        }
    }
    async updateDetails(uid, updatedDetails) {
        try {
            await runTransaction(db, async (transaction) => {
                const docRef = doc(db, "roles", uid);
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

        }
    }
    async addUser(userDetails) {
        try {
            await addDoc(collection(db, "roles"), userDetails).then(user => {
                return console.log("user added with id: ", user.id);
            }).catch(err => {
                return console.error(err)
            })
        } catch (error) {
            return console.error(error)
        }
    }
    async deleteUser(uid) {
        try {
            await deleteDoc(doc(db, "roles", uid));
            return console.log("user gone")
        } catch (error) {
            return console.error(error)
        }
    }
}

export default UserServices;