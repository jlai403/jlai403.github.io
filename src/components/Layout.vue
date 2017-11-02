<template>
  <transition name="fade">
    <div id="layout">
      <div class="container wrapper">
        <nav class="navbar">
          <div class="nav-links">
            <div class="col-xs-2"></div>
            <router-link to="/" class="nav-link">home</router-link>
            <router-link to="/about" class="nav-link">about</router-link>
            <router-link to="/skills" class="nav-link">skills</router-link>
            <router-link to="/projects" class="nav-link">projects</router-link>
            <router-link to="/contact" class="nav-link">contact</router-link>
          </div>
        </nav>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>

      <footer class="footer">

      </footer>
    </div>
  </transition>
</template>

<script>

</script>

<style lang="scss" scoped>
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
@import "~bootstrap-sass/assets/stylesheets/bootstrap";
@import "~styles/layout.scss";
@import "~styles/variables/colors.scss";

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

#layout {
  height: 100%;
  width: 100%;

  background: #43c6ac; /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, rgba(162, 222, 208, 0.25), #f5f7fa);
  background: linear-gradient(to bottom, rgba(162, 222, 208, 0.25), #f5f7fa);

  .navbar {
    @extend .row;
    display: flex;
    flex-direction: row;
    height: 5rem;
    margin: 0;
    padding: 0 1rem;

    * {
      display: flex;
      align-items: center;
    }

    .nav-links {
      @include make-sm-column-offset(8);
      @extend .col-sm-4;

      .nav-link {
          @extend .col-xs-2;
          margin: 1rem 0;
          font-size: 1.25rem !important;
          display: inline;
          text-align: center;
      }
    }
  }

  .container.wrapper {
    width: 100%;
    height: calc(100% - 9rem);

    .content {
      background-color: rgba(255, 255, 255, 0.80);
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      min-width: 500px;
      min-height: 500px;
      height: 75vh;
      width: 60%;
      margin: 5rem auto;
      padding: 1.5rem;
    }
  }

  .footer {
    @extend .col-md-12;
  }
}
</style>
