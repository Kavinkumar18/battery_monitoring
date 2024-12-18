import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyByN5d5yXdYNtJqSBsjADap69SX4BVsTiU",
  authDomain: "batterymonitoring-10017.firebaseapp.com",
  databaseURL: "https://batterymonitoring-10017-default-rtdb.firebaseio.com/",
  projectId: "batterymonitoring-10017",
  storageBucket: "batterymonitoring-10017.firebasestorage.app",
  messagingSenderId: "779769810343",
  appId: "1:779769810343:web:67d34cc1f36ce4ec6dba82",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
