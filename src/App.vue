<template>
<div id="homepage" class="container-fluid flexbox">
  <div class="landing row-fluid">
    <div class="main">
      <h1 class="title">joey lai</h1>
      <div class="sub-title">software developer & lifelong learner</div>
    </div>

    <div class="nav">
      <div class="nav-links">
        <router-link to="/about" class="nav-link">about</router-link>
        <router-link to="/about" class="nav-link">skills</router-link>
        <router-link to="/about" class="nav-link">projects</router-link>
        <router-link to="/about" class="nav-link">contact</router-link>
      </div>
      <div class="social">
        <a class="facebook" href="https://facebook.com/joey.lai" target="_blank"> <i class="fa fa-facebook"></i> </a>
        <a class="linkedin" href="https://ca.linkedin.com/in/jlai403" target="_blank"> <i class="fa fa-linkedin"></i> </a>
        <a class="github" href="https://github.com/jlai403" target="_blank"> <i class="fa fa-github"></i> </a>
        <a class="stackoverflow" href="http://stackoverflow.com/users/2060484/joey" target="_blank"> <i class="fa fa-stack-overflow"></i> </a>
        <a class="instagram" href="https://instagram.com/_jlai/" target="_blank"> <i class="fa fa-instagram"></i> </a>
        <a class="twitter" href="https://twitter.com/jlai_" target="_blank"> <i class="fa fa-twitter"></i> </a>
        <a class="google" href="https://google.com/+jlai403" target="_blank"> <i class="fa fa-google-plus"></i> </a>
        <a class="pinterest" href="https://www.pinterest.com/jlai403/" target="_blank"> <i class="fa fa-pinterest-p"></i> </a>
      </div>
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

body,
html {
    height: 100%;
    width: 100%;
}

#homepage {
    font-family: 'Roboto Condesed', 'Avenir', 'Open Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    &.flexbox {
      align-items: center;
      display: flex;
      justify-content: center;
      height: 100%;
      width: 100%;
    }

    &.container-fluid {
        padding: 0;
    }

    .landing {
        @extend .col-md-12;

        border-bottom: 1px solid transparent;
        max-width: 500px;
        text-align: center;
        margin-top: -10rem;

        .main {
          @extend .col-xs-12;

          .title {
              @extend .col-xs-12;
              font-family: 'Roboto Condensed';
              font-size: 3rem;
              text-transform: uppercase;
          }

          .sub-title {
              font-family: 'Roboto Condensed';
              font-size: 1.5rem;
              margin-bottom: 10px;
              text-transform: uppercase;
          }
        }

        .nav {
            @extend .col-xs-12;

            .nav-link {
              @extend .col-xs-3;
            }
        }
        .social {
            @extend .col-xs-12;

            font-size: 1.35rem;
            margin-top: 1rem;

            a {
                text-decoration: none;
                color: #2c3e50;
                display: inline-block;
                height: 30px;
                width: 30px;
                line-height: 2.5;
                border-radius: 8px;
                margin: 0 2px;
                &:active,
                &:link,
                &:visited {
                    text-decoration: none;
                    color: #2c3e50;
                    display: inline-block;
                    height: 30px;
                    width: 30px;
                    line-height: 2.5;
                    border-radius: 8px;
                    margin: 0 2px;
                }
            }
            .facebook:hover {
                background: $color-facebook !important;
                color: #ffffff;
            }
            .linkedin:hover {
                background: $color-linkedin !important;
                color: #ffffff;
            }
            .github:hover {
                background: $color-github !important;
                color: #ffffff;
            }
            .stackoverflow:hover {
                background: $color-stackoverflow-bg !important;
                color: $color-stackoverflow;
            }
            .instagram:hover {
                background: $color-instagram-bg !important;
                color: #ffffff;
            }
            .twitter:hover {
                background: $color-twitter !important;
                color: #ffffff;
            }
            .google:hover {
                background: $color-google-plus !important;
                color: #ffffff;
            }
            .pinterest:hover {
                background: $color-pinterest !important;
                color: #ffffff;
            }
        }
    }

}
</style>
