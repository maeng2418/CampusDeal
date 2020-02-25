import React from 'react';

const EmailLoginBtn = (props) => {
    <Button className={styles.loginWrapper} variant="outline-danger" size="lg" block onClick={this._googleLogin}>
        <img className={styles.googleBtn} src={require("../../images/googleSignUp.png")} />구글 로그인
    </Button>
}

export default EmailLoginBtn;