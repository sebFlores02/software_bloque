const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {

    let html = `
    <head>
        <link href="/css/lab12.css" rel="stylesheet" type="text/css">
    </head>
    <div class="login">
        <div id="content-container">

        <!--Phone's pictures section-->
        <section class="phones">
        <img src="/images/phones.png" alt="pictures on phone" class="phone-image">
        <div class="display-phone">
            <img class="picture" src="/images/photo-1.png" alt="#">
            <img class="picture" src="/images/photo-2.png" alt="#">
            <img class="picture" src="/images/photo-3.png" alt="#">
            <img class="picture" src="/images/photo-4.png" alt="#">
            <img class="picture" src="/images/photo-5.png" alt="#">
        </div>
        </section>

        <!--User's log in section-->
        <section class="user">

        <div class="login-container">

            <!--Instagram Logo-->
            <div class="instagram-logo-box">
            <img class="instagram-logo" src="/images/instagram-logo.png">
            </div>

            <!--Form Login-->
            <form id="login-post" method="POST">
            <div class="inputs-container">
                <input type="text" name="username" placeholder="Phone number, username or email">
            </div>
            <div class="inputs-container">
                <input type="password" name="password" placeholder="Password">
            </div>
            <a class="login-button" href="/home">Log In</a>

            <div class="or-container">
                <div class="line"></div>
                <div class="or">OR</div>
                <div class="line"></div>
            </div>

            <!--Facebook login-->
            <div class="facebook-container">
                <a class="facebook-login" href="#" target="_blank"><img class="facebook-logo"
                    src="/images/facebook-logo.png">Log in
                with Facebook</a>
            </div>
            </form>

            <!--Password recovery-->
            <a class="password-forgot" href="#" target="_blank">Forgot password?</a>
        </div>

        <!--Sign up-->
        <div class="signup-container">
            <p>Don't have an account? <a class="signup" href="#" target="_blank">Sign up</a></p>
        </div>

        <!--App's download-->
        <div class="get-container">
            <p>Get the app.</p>
            <div class="download-container">
            <a class="download-appstore" href="#" target="_blank"><img class="appstore"
                src="/images/applestore-logo.png"></a>
            <a class="download-googleplay" href="#" target="_blank"><img class="googleplay"
                src="/images/googleplay-logo.png"></a>
            </div>
        </div>

        </section>

    </div>

    <footer class="page-footer">

        <div class="links-container">
        <ul class="links-list">
            <li>
            <a class="link" href="#" target="_blank">ABOUT</a>
            </li>
            <li>
            <a class="link" href="#" target="_blank">PRESS</a>
            </li>
            <li>
            <a class="link" href="#" target="_blank">API</a>
            </li>
            <li>
            <a class="link" href="#" target="_blank">JOBS</a>
            </li>
            <li>
            <a class="link" href="#" target="_blank">PRIVACY</a>
            </li>
            <li>
            <a class="link" href="#" target="_blank">TERMS</a>
            </li>
            <li>
            <a class="link" href="#" target="_blank">LOCATIONS</a>
            </li>
            <li>
            <a class="link" href="#" target="_blank">TOP ACCOUNTS</a>
            </li>
            <li>
            <a class="link" href="#" target="_blank">HASHTAGS</a>
            </li>
            <li>
            <a class="link" href="#" target="_blank">LANGUAGE</a>
            </li>
        </ul>
        </div>

        <div class="footer-span-container">
        <span class="footer-span">
            © 2023 INSTAGRAM FROM META
        </span>
        </div>
    </footer>
</div>
    `
    response.send(html)
})



module.exports = router;