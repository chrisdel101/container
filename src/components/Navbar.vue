<template>
  <v-toolbar dark color="blue" height="75px">
    <v-toolbar-side-icon @click="hamburgertoggle"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text" size="20px">Zero Wasters </v-toolbar-title>

    <v-spacer></v-spacer>
    <div class="c-dropdown" v-show="hamburgerShow">
        <ul>
            <li>How it works
                <router-link to="/howitworks"></router-link>
            </li>
            <li>Order
                <router-link to="/order"></router-link>
            </li>
            <li>About Us
                <router-link to="/about"></router-link>
            </li>
            <li>Contact
                <router-link to="/contact"></router-link>
            </li>
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
            this.hamburgerShow = !this.hamburgerShow
        }
    }
  }
</script>

<style>
.v-toolbar__title {
    font-size: 20px
}
.c-dropdown{
    position: absolute;
    top: 53px;
    color: black;
    font-size: 20px;
    width: 200px;
}
.c-dropdown li{
    list-style: none;
    padding: 5px 0;
}
.c-dropdown ul{
    background-color: #DCDCDC;
}

</style>
