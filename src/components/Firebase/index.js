import React from 'react';
import Firebase from './firebase';
import withAuthorization from './withAuthorization';

const FirebaseContext = React.createContext(null);
/* createContext()기능은 본질적으로 두 가지 구성 요소를 만듭니다.
   FirebaseContext.Provider컴포넌트는 React 컴포넌트 트리의 최상위 수준에서 Firebase 인스턴스를 한 번 제공하는 데 사용된다.
   FirebaseContext.Consumer컴포넌트는 React 컴포넌트에 필요한 경우 Firebase 인스턴스를 검색하는 데 사용됩니다.
   잘 캡슐화 된 Firebase 모듈을 위해 필요한 모든 기능 (Firebase 클래스, 소비자 및 공급자 구성 요소의 Firebase 컨텍스트)을 내보내는 Firebase 폴더에 index.js 파일을 정의합니다 .
*/
const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default Firebase;
export { FirebaseContext, withFirebase, withAuthorization };