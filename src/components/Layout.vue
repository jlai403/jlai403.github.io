<template>
<div id="layout">
  <nav class="navbar">
    <div class="header">
      <router-link to="/"><h1 class="title">joey lai</h1></router-link>
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
</template>

<script>

</script>

<style lang="scss" scoped>
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
@import "~bootstrap-sass/assets/stylesheets/bootstrap";
@import "~styles/layout.scss";
@import "~styles/variables/colors.scss";

#layout {
  height: 100%;
  width: 100%;

  background: #43c6ac; /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #83a4d4, #b6fbff);
  background: linear-gradient(to bottom, #83a4d4, #b6fbff);

  .navbar {
    @extend .row;
    background-color: rgba(255, 255, 255, 0.40);

    border-bottom: 1px solid #ededed;
    display: flex;
    flex-direction: row;
    height: 9rem;
    margin: 0;
    padding: 0 5rem;

    * {
      display: flex;
      align-items: center;
    }

    .header {
      @extend .col-sm-8;

      .title {
          font-family: 'Roboto Condensed';
          font-size: 3.5rem;
          text-transform: uppercase;
          color: #2c3e50;
      }
    }

    .nav-links {
      @extend .col-sm-4;

      .nav-link {
          @extend .col-sm-3;
          margin: 1rem 0;
      }
    }
  }

  .container.wrapper {
    width: 100%;
    height: calc(100% - 9rem);

    .content {
      background-color: rgba(255, 255, 255, 0.80);
      min-width: 750px;
      min-height: 500px;
      width: 75%;
      margin: 5rem auto;
      padding: 1.5rem;
    }
  }

  .footer {
    @extend .col-md-12;
  }
}
</style>
