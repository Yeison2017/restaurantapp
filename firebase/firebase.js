import app from 'firebase/app';
import 'firebase/firestore';

import firebaseConfig from './config';

class Firebase {
  constructor() {
    if (!app.apps.length) {
      // firebase.firestore().settings({experimentalForceLongPolling: true});
      app.initializeApp(firebaseConfig);
    }

    this.db = app.firestore();
  }
}

const firebase = new Firebase();
export default firebase;
