<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container is-fluid px-0">
    <nav class="navbar px-4 is-dark is-Zoox-Bg01" role="navigation" aria-label="main navigation">
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
            <RouterLink class="is-color-white" to="/">Home</RouterLink>
          </a>

          <a class="navbar-item">
            <RouterLink class="is-color-white" to="/manual">Manual</RouterLink>
          </a>

          <a class="navbar-item">
            <RouterLink class="is-color-white" to="/about">Contacto</RouterLink>
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
              <!--a class="button is-light">
                <strong>Sign up</strong>
              </a-->
              <RouterLink class="button" to="/login">Log in</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="columns m-0">
      <div class="column p-0">
        <RouterView />
      </div>
    </div>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Powered by </strong><a href="https://zooxsmart.com/">Zoox Smart Data</a>.
        </p>
      </div>
    </footer>
  </div>
</template>