<template>
  <transition name="fade">
    <div id="layout">
      <nav class="navbar">
        <div class="header">
          <router-link to="/"><div class="title">joey lai</div></router-link>
        </div>
        <div class="nav-links">
          <router-link to="/about" class="nav-link">about</router-link>
          <router-link to="/skills" class="nav-link">skills</router-link>
          <router-link to="/projects" class="nav-link">projects</router-link>
          <router-link to="/contact" class="nav-link">contact</router-link>
        </div>
      </nav>

      <div class="container wrapper">
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
    transition: opacity 1.5s;
}

.fade-enter-active {
    transition: opacity 1.5s;
    transition-delay: 1s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

#layout {
  height: 100%;
  width: 100%;

  background: #43c6ac; /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #c3cfe2, #f5f7fa);
  background: linear-gradient(to bottom, #c3cfe2, #f5f7fa);

  .navbar {
    @extend .row;
    // background-color: rgba(255, 255, 255, 0.35);
    // border-bottom: 1px solid #ededed;
    display: flex;
    flex-direction: row;
    height: 5rem;
    margin: 0;
    padding: 0 1rem;

    * {
      display: flex;
      align-items: center;
    }

    .header {
      @extend .col-sm-9;

      .title {
          font-family: 'Roboto Condensed';
          text-transform: uppercase;
          color: #2c3e50;
          font-size: 2rem !important;
      }
    }

    .nav-links {
      @extend .col-sm-3;

      .nav-link {
          @extend .col-sm-3;
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
