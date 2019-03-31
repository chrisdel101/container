<template>
  <v-toolbar dark color="blue">
    <v-toolbar-side-icon @click="hamburgertoggle"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Zero Wasters</v-toolbar-title>

    <v-spacer></v-spacer>
    <div class="c-dropdown" v-show="hamburgerShow">
        <ul>
            <li>How it works</li>
            <li>Order</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
    </div>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  export default {
      name:"Navbar",
      items: [
          "contact",
          "About Us"
      ],
      components: {

      },
    data(){
        return{
            hamburgerShow: false
        }
    },
    methods:{
        hamburgertoggle: function(){
            console.log(this.hamburgerShow)
            this.hamburgerShow = !this.hamburgerShow
        }
    }
  }
</script>

<style>
.c-dropdown{
    position: absolute;
    top: 53px;
    color: black;
    font-size: 20px;
}
</style>
