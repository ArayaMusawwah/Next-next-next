import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where
} from "firebase/firestore"
import app from "./init"
import bcrypt from "bcrypt"

const firestore = getFirestore(app)

export const retrieveData = async (collectionName: string) => {
  const snapshot = await getDocs(collection(firestore, collectionName))
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))

  return data
}

export const getDetailById = async (collectionName: string, id: string) => {
  const snapshot = await getDoc(doc(firestore, collectionName, id))
  return snapshot.data()
}

export const signIn = async (userData: { email: string }) => {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  )
  const snapshot = await getDocs(q)
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))

  return data ? data[0] : null
}

export const signUp = async (
  userData: {
    username: string
    password: string
    email: string
    role?: string
  },
  callback: Function
) => {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  )
  const snapshot = await getDocs(q)
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))

  if (data.length) {
    callback({ status: false, message: "Email already exists" })
  } else {
    userData.password = await bcrypt.hash(userData.password, 10)
    userData.role = "member"
    await addDoc(collection(firestore, "users"), userData)
      .then(() => callback({ status: true, message: "success" }))
      .catch((err) => callback({ status: false, message: err }))
  }
}

export const signInWithGoogle = async (userData: any, callback: any) => {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  )
  const snapshot = await getDocs(q)
  const data: any = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))

  if (data.length) {
    /* diambil dari database */
    userData.role = data[0].role
    await updateDoc(doc(firestore, "users", data[0].id), userData)
      .then(() =>
        callback({
          status: true,
          message: "Success login with your Google Account",
          data: userData
        })
      )
      .catch(() =>
        callback({
          status: false,
          message: "Failed to login with your Google Account",
          data: userData
        })
      )
  } else {
    /* Default */
    userData.role = "member"
    await addDoc(collection(firestore, "users"), userData)
      .then(() =>
        callback({
          status: true,
          message: "Success login with your Google Account"
        })
      )
      .catch(() =>
        callback({
          status: false,
          message: "Failed to login with your Google Account"
        })
      )
  }
}
