<template>
  <v-app>
    <Toolbar/>
    <v-main>
        <v-row style="height: 100%; margin: 0">
            <v-navigation-drawer 
              permanent
              class="d-flex align-center justify-center"
            >
            <v-list class="grow">
            <v-list-item>
              <v-list-item-title>
                <router-link class="link" to="/">Home</router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link class="link" to="/about">About</router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link class="link" to="/products">Products</router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link class="link" to="/blackfriday">Black Friday</router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
            </v-navigation-drawer>
            <v-content style="padding: 0">
              <div 
                style="height: 100%"
                class="d-flex align-center justify-center"
              >
                <router-view/>
              
              </div>
            </v-content>
        
        </v-row>


    </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import Toolbar from './components/Toolbar.vue'

export default {
  components: {
    Toolbar: Toolbar
  },
  setup() {
  },
  data() {
    return {
      links: ['Home', 'About', 'Products', 'Black Friday']
    }
  }
}
</script>

