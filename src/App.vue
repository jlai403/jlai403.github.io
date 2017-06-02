<template>
<div id="homepage">
  <!-- <router-link to="/">Home</router-link> -->
  <!-- <router-view></router-view> -->
  <div class="header">
    <h1 class="title">.jlai</h1>
    <div class="sub-title">software developer & lifelong learner</div>

    <nav class="main">
      <ul class="nav navbar-nav">
        <li>
          <a class="nav-link" href="#about">about</a>
        </li>
        <li>
          <a class="nav-link" href="#skills">skills</a>
        </li>
        <li>
          <a class="nav-link" href="#projects">projects</a>
        </li>
        <li>
          <a class="nav-link" href="mailto:joey@jlai.ca">contact</a>
        </li>
      </ul>
    </nav>
    <div class="social">
      <a class="facebook" href="https://facebook.com/joey.lai" target="_blank">
        <i class="fa fa-facebook"></i>
      </a>
      <a class="linkedin" href="https://ca.linkedin.com/in/jlai403" target="_blank">
        <i class="fa fa-linkedin"></i>
      </a>
      <a class="github" href="https://github.com/jlai403" target="_blank">
        <i class="fa fa-github"></i>
      </a>
      <a class="stackoverflow" href="http://stackoverflow.com/users/2060484/joey" target="_blank">
        <i class="fa fa-stack-overflow"></i>
      </a>
      <a class="instagram" href="https://instagram.com/_jlai/" target="_blank">
        <i class="fa fa-instagram"></i>
      </a>
      <a class="twitter" href="https://twitter.com/jlai_" target="_blank">
        <i class="fa fa-twitter"></i>
      </a>
      <a class="google" href="https://google.com/+jlai403" target="_blank">
        <i class="fa fa-google-plus"></i>
      </a>
      <a class="pinterest" href="https://www.pinterest.com/jlai403/" target="_blank">
        <i class="fa fa-pinterest-p"></i>
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'homepage'
}
</script>

<style lang="scss">
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
@import "~bootstrap-sass/assets/stylesheets/bootstrap";

#homepage {
    font-family: 'Avenir', 'Open Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    div.header {
        height: 300px;
        text-align: center;
        .title {
            font-family: "Raleway";
            font-size: 50px;
            font-weight: 600;
            margin: 50px auto 10px;
        }
        .sub-title {
            font-family: "Raleway";
            font-size: 20px;
            margin-bottom: 10px;
        }
        nav {
            &.main {
                display: inline-block;
                text-align: center;
                margin-bottom: 10px;
            }
        }
        .social {
            font-size: 20px;
            a {
                text-decoration: none;
                color: #000000;
                display: inline-block;
                height: 30px;
                width: 30px;
                line-height: 1.5;
                border-radius: 8px;
                margin: 0 2px;
                &:active,
                &:link,
                &:visited {
                    text-decoration: none;
                    color: #000000;
                    display: inline-block;
                    height: 30px;
                    width: 30px;
                    line-height: 1.5;
                    border-radius: 8px;
                    margin: 0 2px;
                }
                &:hover {
                    text-decoration: none;
                    transition: all 0.5s ease;
                }
            }
            .facebook:hover {
                background-color: #3b5998 !important;
                color: #ffffff;
            }
            .linkedin:hover {
                background-color: #0976b4 !important;
                color: #ffffff;
            }
            .github:hover {
                background-color: #666666 !important;
                color: #ffffff;
            }
            .stackoverflow:hover {
                background-color: #eeeeee !important;
                color: #fe7a15;
            }
            .instagram:hover {
                background-color: #3f729b !important;
                color: #dfe6ed;
            }
            .twitter:hover {
                background-color: #55acee !important;
                color: #ffffff;
            }
            .google:hover {
                background-color: #dd4b39 !important;
                color: #ffffff;
            }
            .pinterest:hover {
                background-color: #bd081c !important;
                color: #ffffff;
            }
        }
    }
    @media screen and (max-width: 480px) {
        div.header {
            margin-top: -250px;
        }
    }
    @media screen and (max-width: 320px) {
        div.header {
            .title {
                font-size: 45px;
            }
            .sub-title {
                font-size: 18px;
            }
        }
    }
}
</style>
