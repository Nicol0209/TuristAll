import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  FacebookAuthProvider, //Para agregar autenticación mediante Facebook
  TwitterAuthProvider, //Para agregar autenticación por Twitter
  signInWithPopup,  // 🔹 Se mantiene `Popup` para mejor experiencia en PWA
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  setPersistence, 
  browserLocalPersistence 
} from "firebase/auth";

// 🔹 Configuración del proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD9mXQgYwl9sJe9fAYfpUPR4cpJ5Q2Pr6Q",
  authDomain: "turistall-app.firebaseapp.com",
  projectId: "turistall-app",
  storageBucket: "turistall-app.firebasestorage.app",
  messagingSenderId: "461180818990",
  appId: "1:461180818990:web:e6991b1a37b2183f65f1bf",
  measurementId: "G-FJKM7Q952Q"
};

// 🔹 Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider(); //Crear el proveedor de Facebook
const twitterProvider = new TwitterAuthProvider(); //Crear el proveedor de Twitter

// 🔹 Configurar persistencia en localStorage
setPersistence(auth, browserLocalPersistence)
  .then(() => console.log("✅ Persistencia de sesión configurada en localStorage"))
  .catch((error) => console.error("⚠️ Error configurando persistencia:", error));


  const loginWithGoogle = async () => {
    try {
      console.log("🟢 Abriendo ventana de autenticación...");
      const result = await signInWithPopup(auth, googleProvider);
      console.log("✅ Usuario autenticado con Google:", result.user);
    } catch (error) {
      console.error("⚠️ Error en autenticación con Google:", error);
    }
  };

  //Función para autenticarse con Facebook
  const loginWithFacebook = async () => {
    try {
      console.log("🟢 Abriendo ventana de autenticación con Facebook...");
      const result = await signInWithPopup(auth, facebookProvider);
      console.log("✅ Usuario autenticado con Facebook:", result.user);
    } catch (error) {
      console.error("⚠️ Error en autenticación con Facebook:", error);
    }
  };

    //Función para autenticarse con Twitter
    const loginWithTwitter = async () => {
      try {
        console.log("🟢 Abriendo ventana de autenticación con Twitter...");
        const result = await signInWithPopup(auth, twitterProvider);
        console.log("✅ Usuario autenticado con Twitter:", result.user);
      } catch (error) {
        console.error("⚠️ Error en autenticación con Twitter:", error);
      }
    };

// 🔹 Función para registrar usuario con Email/Contraseña
const registerWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("✅ Usuario registrado con email:", userCredential.user.email);
  } catch (error) {
    console.error("⚠️ Error al registrar usuario:", error.message);
  }
};

// 🔹 Función para iniciar sesión con Email/Contraseña
const loginWithEmail = async (email, password) => {
  if (password.length < 6) {
    console.error("⚠️ La contraseña debe tener al menos 6 caracteres.");
    return;
}

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("✅ Usuario autenticado con email:", userCredential.user.email);
  } catch (error) {
    console.error("⚠️ Error al iniciar sesión con email:", error.message);
  }
};

// 🔹 Función para cerrar sesión
const logout = async () => {
  try {
    await signOut(auth);
    console.log("✅ Usuario cerró sesión.");
  } catch (error) {
    console.error("⚠️ Error al cerrar sesión:", error.message);
  }
};

// 🔹 Exportar funciones de autenticación
export { auth, googleProvider, facebookProvider, twitterProvider, loginWithTwitter, loginWithFacebook, loginWithGoogle, registerWithEmail, loginWithEmail, logout };
