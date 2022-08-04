import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDdlVa1UIdJ9WVwRTTjPXx0wKgOkwzznxo',
  authDomain: 'belibarang-ca573.firebaseapp.com',
  projectId: 'belibarang-ca573',
  storageBucket: 'belibarang-ca573.appspot.com',
  messagingSenderId: '207837180233',
  appId: '1:207837180233:web:a7229dbf5c4353ec2daa98',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Authentication = getAuth(app);
