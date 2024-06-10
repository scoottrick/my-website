import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCfq6qsS4ajHU1L20usjs1iRFuEwGzDeuQ',
    authDomain: 'website-scott-schapker.firebaseapp.com',
    projectId: 'website-scott-schapker',
    storageBucket: 'website-scott-schapker.appspot.com',
    messagingSenderId: '634354336199',
    appId: '1:634354336199:web:202b8fa80f41ab52dd59e2'
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).mount('#app');
