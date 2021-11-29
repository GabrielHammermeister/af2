<template>
  <v-app-bar
      app
      elevation="4"
      class="d-flex justify-center"
    >
     

      <ul class="links">
        <li>
          <router-link class="link" to="/">Home</router-link>
        </li>
        <li>

          <router-link class="link" to="/about">About</router-link>
        </li>
        <li>

          <router-link class="link" to="/products">Products</router-link>
        </li>
        <li>

          <router-link class="link" id="highlighted" to="/blackfriday">Black Friday</router-link>
        </li>
      </ul>
    </v-app-bar>
    
</template>

<style lang="css">
   .links {
      display: flex;
      gap: 20px;
      list-style: none;
   }

  .link {
    
      font-weight: 700;
      color: inherit;
      text-decoration: none;
      transition: all ease-in-out .2s;
  }

  .link:hover {
    text-decoration: underline;
  }

   #highlighted {
      font-weight: 700;
   }
   #highlighted:hover {
      color: rgb(52, 138, 172);
   }
</style>

<script>
  export default {
    name: 'Toolbar',

    data: () => ({
     
    })
  }
</script>
