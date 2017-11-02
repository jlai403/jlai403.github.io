<template>
  <div id="about">
    <!-- <h1 class="title">about</h1> -->
    <div class="container">
      <div class="name row">
        <div class="name">Joey Lai</div>
        <div class="title">software developer</div>
      </div>
      <div class="row">
        <div class="col">
          <div class="block">
            <div class="header">location</div>
            <div class="value">Calgary, AB</div>
          </div>
        </div>
        <div class="col">
          <div class="block">
            <div class="header">origin</div>
            <div class="value">Hong Kong</div>
          </div>
        </div>
        <div class="col">
          <div class="block">
            <div class="header">year</div>
            <div class="value">1991</div>
          </div>
        </div>
        <div class="col">
          <div class="block">
            <div class="header">experience</div>
            <div class="value">6 years</div>
          </div>
        </div>
      </div>
      <div class="no margin row">
        <div class="col">
          <div class="block">
            <div class="header">favorite team</div>
            <div class="value">Tampa Bay Lightning</div>
          </div>
        </div>
        <div class="col">
          <div class="block">
            <div class="header">interests</div>
            <div class="value">Startups • Sports • Cars</div>
          </div>
        </div>
        <div class="two wide col">
          <div class="block">
            <div class="header">currently developing in</div>
            <div class="value"> Node.js • Mongo • SSIS • T-SQL </div>
          </div>
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

  font-family: 'Questrial', sans-serif;

  .container {
    max-width: 100%;
    padding: 0 7.5rem;
    text-align: center;

    .name.row {
      background: linear-gradient(to right, #00b96a, #c3eac7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      .name {
        font-size: 5rem;
        font-weight: 700;
        font-family: 'Raleway', sans-serif;
      }

      .title {
        font-size: 2rem;
        margin-top: -0.5rem;
      }
    }

    .row {
      margin-top: 2rem;
      padding-top: 1rem;

      &.no.margin {
        margin-top: 0;
      }

      .col {
        @extend .col-sm-3;
        padding: 0 5px;

        &.two.wide {
          @extend .col-sm-6;
          padding: 0 5px;
        }

        .block {
          padding: 10px;
          background-color: rgba(232, 232, 232, 0.3);
        }

        .header {
          font-size: 1.25rem;
          text-transform: lowercase;
        }

        .value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #00b96a;
        }
      }
    }
  }
}
</style>
