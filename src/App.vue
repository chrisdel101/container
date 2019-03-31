<template>
        <div class="app-view">
            <!-- <Navbar></Navbar> -->
            <Home></Home>
            <Order></Order>
        </div>

</template>

<script>
import Home from './components/Home'
// import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    // Navbar,
    Home
  },
  data () {
    return {
      //
    }
  }
}
</script>
