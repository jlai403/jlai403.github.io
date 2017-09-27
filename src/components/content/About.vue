<template>
  <div id="about">
    <!-- <h1 class="title">about</h1> -->
    <div class="container">
      <div class="name row">
        <div class="name">Joey Lai</div>
        <div class="title">Software Developer</div>
      </div>
      <div class="info row">
        <div class="block">
          <div class="header">location</div>
          <div class="value">Calgary, AB</div>
        </div>
        <div class="block">
          <div class="header">origin</div>
          <div class="value">Hong Kong</div>
        </div>
        <div class="block">
          <div class="header">year</div>
          <div class="value">1991</div>
        </div>
        <div class="block">
          <div class="header">experience</div>
          <div class="value">6 years</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
@import "~bootstrap-sass/assets/stylesheets/bootstrap";
@import "~styles/layout.scss";
@import "~styles/variables/colors.scss";
@import "~styles/content-layout.scss";

#about {

  font-family: 'Raleway', sans-serif;

  .container {
    max-width: 100%;
    padding: 0 7.5rem;
    text-align: center;

    .name.row {
      .name {
        font-size: 3rem;
        font-weight: 700;
      }

      .title {
        font-size: 2rem;
      }
    }

    .info.row {
      border-top: 1px solid #000000;
      margin-top: 2rem;
      padding-top: 1rem;

      .block {
        @extend .col-sm-3;

        font-size: 1.25rem;

        .header {
          text-transform: uppercase;
        }

        .value {
          font-weight: 700;
        }
      }
    }
  }
}
</style>
