<template>
  <transition name="fade">
    <div id="homepage" class="container-fluid flexbox hero-image">
      <div class="blur"></div>

      <div class="content row-fluid">
        <div class="main">
          <h1 class="title">joey lai</h1>
          <div class="sub-title">software developer & lifelong learner</div>
        </div>

        <div class="nav">
          <div class="nav-links">
            <router-link to="/about" class="nav-link">about</router-link>
            <router-link to="/skills" class="nav-link">skills</router-link>
            <router-link to="/projects" class="nav-link">projects</router-link>
            <router-link to="/contact" class="nav-link">contact</router-link>
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
        <div class="main-background"></div>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
@import "~bootstrap-sass/assets/stylesheets/bootstrap";
@import "../styles/layout.scss";
@import "../styles/variables/colors.scss";

.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter-active {
    transition: opacity 0.5s;
    transition-delay: 0.5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

#homepage {
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

    &.hero-image {
        background-image: url('https://source.unsplash.com/featured/?zen');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    .blur {
        @extend .col-md-12;
        height: 270px;
        max-width: 650px;
        margin-top: -2.5rem;
        position: absolute;

        background: url('https://source.unsplash.com/featured/?zen') no-repeat center center fixed;
        background-size: cover;
        overflow: hidden;
        filter: blur(15px);
    }

    .content {
        @extend .col-md-12;

        border: 1px solid #aaaaaa;
        margin-top: -5rem;
        max-width: 650px;
        padding: 4rem;
        text-align: center;
        background: rgba(255, 255, 255, 0.5);

        .main {
            @extend .col-xs-12;
            position: relative;

            .title {
                @extend .col-xs-12;
                font-family: 'Roboto Condensed';
                font-size: 4.5rem;
                text-transform: uppercase;
                color: #333333;
            }

            .sub-title {
                font-family: 'Roboto Condensed';
                font-size: 1.75rem;
                margin-bottom: 10px;
                text-transform: uppercase;
            }
        }

        .nav {
            @extend .col-xs-12;

            .nav-link {
                @extend .col-xs-3;
                margin: 1rem 0;
            }
        }
        .social {
            @extend .col-xs-12;

            font-size: 1.75rem;
            margin-top: 0.5rem;

            a {
                text-decoration: none;
                color: #2c3e50;
                display: inline-block;
                height: 30px;
                width: 30px;
                border-radius: 8px;
                line-height: 1.9;
                margin: 0 2px;

                transition: all 0.2s ease;
                -moz-transition: all 0.2s ease;
                -o-transform: all 0.2s ease;
                -webkit-transition: all 0.2s ease;

                &:active,
                &:link,
                &:visited {
                    text-decoration: none;
                    color: #2c3e50;
                    display: inline-block;
                    height: 30px;
                    width: 30px;
                    border-radius: 8px;
                    margin: 0 2px;
                }

                &:hover {
                  -webkit-transform: translate(0, -2px);
                  -o-transform: translate(0, -2px);
                  -moz-transform: translate(0, -2px);
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
