import {FirebaseOptions, initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {connectAuthEmulator, getAuth} from 'firebase/auth';
import {environment} from 'environments/environment';

const firebaseConfig: FirebaseOptions = environment.FIREBASE_CONFIG || {
    apiKey: 'MOCK_KEY'
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);

if (environment.NODE_ENV !== 'production') {
    connectAuthEmulator(firebaseAuth, 'http://localhost:9099');
}
