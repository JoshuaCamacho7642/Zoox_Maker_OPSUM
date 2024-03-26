<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container is-fluid px-0">
    <nav class="navbar px-4 is-Zoox-Bg01" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://zooxsmart.com/">
          <img src="http://canales.zooxsmart.com/uploads/1/2/7/0/127001545/published/logo-completa-branco.png?1634680474">
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">

        </div>

        <div class="navbar-end">
          <a class="navbar-item">
            Home
            <!--RouterLink to="/">Home</RouterLink-->
          </a>

          <a class="navbar-item">
            Manual
            <!--RouterLink to="/about">About</RouterLink-->
          </a>

          <a class="navbar-item">
            Contacto
            <!--RouterLink to="/about">About</RouterLink-->
          </a>

          <!--div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item is-selected">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div-->

          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="columns m-0">
      <div class="column">
        <RouterView />
      </div>
    </div>

    <footer class="footer is-Zoox-Bg01">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
          The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >CC BY NC SA 4.0</a
          >.
        </p>
      </div>
    </footer>
  </div>
</template>
<style scoped>
a.navbar-item, a.navbar-link {
  color: white !important;
}

.navbar-dropdown.navbar-item {
  color: black !important;
}

.footer p, .footer strong {
  color: white !important;
}

.is-Zoox-Bg01 {
  background: url('http://canales.zooxsmart.com/uploads/1/2/7/0/127001545/background-images/468777109.jpg') no-repeat center center fixed !important;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  animation-name: fadeIn;
  animation-duration: 1000ms;
  animation-fill-mode: both;
}
</style>