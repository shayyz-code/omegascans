import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyC3FOcrvt20hdSkQNb98jBY4LqjefINBH0',
  authDomain: 'omega-scans.firebaseapp.com',
  projectId: 'omega-scans',
  storageBucket: 'omega-scans.appspot.com',
  messagingSenderId: '109169447864',
  appId: '1:109169447864:web:702017665b863bfb4af54d',
  measurementId: 'G-QS3EB2MFN5',
};
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
