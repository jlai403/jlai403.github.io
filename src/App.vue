<template>
<div id="homepage">
  <div class="header">
    <h1 class="title">.jlai</h1>
    <div class="sub-title">software developer & lifelong learner</div>

    <nav class="main">
      <ul class="nav navbar-nav">
        <li>
          <router-link to="/about" class="nav-link">about</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link">skills</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link">projects</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link">contact</router-link>
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

  <router-view></router-view>
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
@import "styles/layout.scss";
@import "styles/variables/colors.scss";

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
                background-color: $color-facebook !important;
                color: #ffffff;
            }
            .linkedin:hover {
                background-color: $color-linkedin !important;
                color: #ffffff;
            }
            .github:hover {
                background-color: $color-github !important;
                color: #ffffff;
            }
            .stackoverflow:hover {
                background-color: $color-stackoverflow-bg !important;
                color: $color-stackoverflow;
            }
            .instagram:hover {
                background-color: $color-instagram-bg !important;
                color: $color-instagram;
            }
            .twitter:hover {
                background-color: $color-twitter !important;
                color: #ffffff;
            }
            .google:hover {
                background-color: $color-google-plus !important;
                color: #ffffff;
            }
            .pinterest:hover {
                background-color: $color-pinterest !important;
                color: #ffffff;
            }
        }
    }
}
</style>
