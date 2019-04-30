<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-custom">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarColor01"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav mr-auto">
          <li>
            <img
              src="./assets/Cray_Logo.png"
              alt=""
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/bidDue"
              class="nav-link"
            >
              Bid Due
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/aro"
              class="nav-link"
            >
              ARO
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/about"
              class="nav-link"
            >
              About
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav navbar-right">
          <div v-if="$store.getters.user">
            <li class="nav-item">
              <router-link
                to="/login"
                class="nav-link"
              >
                Current User: {{ $store.getters.user }}
              </router-link>
            </li>
          </div>
          <div v-else>
            <li class="nav-item">
              <router-link
                to="/login"
                class="nav-link"
              >
                Login
              </router-link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
    <transition
      name="bounce"
    >
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App'
};
</script>
<style scoped>

  .navbar-nav .nav-item .nav-link {
    color: #26CAD3;
  }
  .bg-custom {
    background-color: #998C87;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }

  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
