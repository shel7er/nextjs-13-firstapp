import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./firebase";

const firestore = getFirestore(app);

// Define an async function to retrieve data
export async function retrieveData(collectionName: string) {
  try {
    const snapshot = await getDocs(collection(firestore, collectionName));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw error;
  }
}
