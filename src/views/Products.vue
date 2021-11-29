<template>
  <main>
   <h1 style="margin-bottom: 40px">Products page</h1>

   <section class="grid">
     <v-card
      class="mx-auto"
      max-width="344"
      outlined
      v-for="product in products"
      :key="product.id"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            black friday 50%
          </div>
          <v-list-item-title class="text-h5 mb-1">
            {{product.name}}
          </v-list-item-title>
          <v-list-item-subtitle>{{product.description}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn
          outlined
          rounded
          text
        >
          R$ {{product.price}},90
        </v-btn>
      </v-card-actions>
    </v-card>
   </section>
  </main>
</template>


<style>
  .grid {
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    gap: 10px;
  }
</style>

<script>
export default {
  name: 'Products',
  data() {
    return {
      products: this.$store.state.products
    }
  }
}
</script>
