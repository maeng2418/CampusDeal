import React from 'react';

const Navigation = (props) => (
    <div class="navigation">
        <div class="nav-wrapper container">
            <div class="row">
                <div class="col">
                    <div class="link">
                        <img src ={require("../../images/logo.png")} class="logo" alt="Logo"/>
                    </div>
                </div>
                <div class="col">
                    <div class="menu-bar">
                        <ul class="menu">
                            <li class="link">로그인</li>
                            <li class="link">회원가입</li>
                            <li class="link">장바구니</li>
                            <li class="link">고객센터</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>

);

export default Navigation;