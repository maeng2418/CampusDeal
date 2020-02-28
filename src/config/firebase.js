import * as firebase from 'firebase/app';
import 'firebase/auth'; // firebase 인증 가져오기
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

export default firebase;