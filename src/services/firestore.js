// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA4VRQCc7aASI8V8i4HSTw0SQiXMcyH8E",
  authDomain: "e-commerce-pilar.firebaseapp.com",
  projectId: "e-commerce-pilar",
  storageBucket: "e-commerce-pilar.appspot.com",
  messagingSenderId: "237589714922",
  appId: "1:237589714922:web:701d4b40ce9d9ade3f4493"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems() {
    const coleccion = collection(firestore, "cosmética natural");
    let respuesta = await getDocs(coleccion);
    
    let dataDocs = respuesta.docs.map((documento) => {
       let docFormateado = { ...documento.data(), id: documento.id };
        return docFormateado;
     });
    return dataDocs;
}

export async function getSingleItem(idParams) {
 const docRef = doc(firestore, "cosmética natural", idParams);
 const docSnapshot = await getDoc(docRef);

    return { ...docSnapshot.data(), id: docSnapshot.id };
}

export default firestore;