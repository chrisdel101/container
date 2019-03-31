<template>
    <div class="">
        <Navbar></Navbar>
        <Hero></Hero>
    </div>

</template>

<script>
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero
  },
  data () {
    return {
      //
    }
  }
}
</script>
