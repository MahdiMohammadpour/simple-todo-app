import { getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD9lVBSrKoKjuAoVH3y9CSUBDrWJTyyS8",
  authDomain: "base-37ad6.firebaseapp.com",
  projectId: "base-37ad6",
  storageBucket: "base-37ad6.firebasestorage.app",
  messagingSenderId: "396008703900",
  appId: "1:396008703900:web:3607eff0464e2e9fc8aa59",
  measurementId: "G-3RL46WB5TN",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const messaging = async () => {
  const supported = await isSupported();
  return supported ? getMessaging(app) : null;
};

export const fetchToken = async () => {
  try {
    const fcmMessaging = await messaging();
    if (fcmMessaging) {
      const token = await getToken(fcmMessaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
      });
      return token;
    }
    return null;
  } catch (err) {
    console.error("An error occurred while fetching the token:", err);
    return null;
  }
};

export { app, messaging };
