import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBsfRCemjcXAlKKrblR5V6S-KUg1nTf8mc",
  authDomain: "batterydata-8536e.firebaseapp.com",
  databaseURL: "https://batterydata-8536e-default-rtdb.firebaseio.com/",
  projectId: "batterydata-8536e",
  storageBucket: "batterydata-8536e.firebasestorage.app",
  messagingSenderId: "405880992641",
  appId: "1:405880992641:web:8874445ff18deba8f0ae80",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
