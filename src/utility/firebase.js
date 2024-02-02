import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const addContactToFirebase = async (contact) => {
  try {
    const docRef = await addDoc(collection(firestore, "contacts"), contact);
    return docRef.id;
  } catch (error) {
    console.error("Error adding contact: ", error);
  }
};

const getContactsFromFirebase = async () => {
  try {
    const querySnapshot = await getDocs(collection(firestore, "contacts"));
    const contacts = [];
    querySnapshot.forEach((doc) => {
      contacts.push({ id: doc.id, ...doc.data() });
    });
    return contacts;
  } catch (error) {
    console.error("Error fetching contacts: ", error);
  }
};

const deleteContactFromFirebase = async (contactId) => {
  try {
    await deleteDoc(doc(firestore, "contacts", contactId));
  } catch (error) {
    console.error("Error deleting contact: ", error);
  }
};

export {
  addContactToFirebase,
  getContactsFromFirebase,
  deleteContactFromFirebase,
};
