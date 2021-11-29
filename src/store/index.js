import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "Skate Vans",
        description: "Seja legal, e ande skate!",
        price: 129
      },
      {
        id: 2,
        name: "Raquete Butterfly",
        description: "Voce nunca jogou Tênis tao leve na sua vida.",
        price: 239
      },
      {
        id: 3,
        name: "Bolas de golf Goose",
        description: "Conjunto de 30 bolas de golf",
        price: 99
      },
      {
        id: 4,
        name: "Saco de Boxe Bull",
        description: "Saco de 40kg, perfeito para chutes",
        price: 220
      },
      {
        id: 5,
        name: "Luvas MMA Everlest",
        description: "Um par de luvas leves para MMA",
        price: 149
      },
      {
        id: 6,
        name: "Bicicleta Montain Caloi",
        description: "Bicicleta com Aro 22, 20kg e perfeita para trilhas.",
        price: 790
      },
      {
        id: 7,
        name: "Meias Adidas",
        description: "3 pares de meias cano longo, para futebol.",
        price: 149
      },
      {
        id: 8,
        name: "Visores para natação olímpica Adidas",
        description: "Visores com lente removível, para nados acrobaticos ou de distância",
        price: 290
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
