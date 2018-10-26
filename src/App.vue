<template>
 <div id="app">
  <router-view></router-view>
 </div>
</template>

<script>
import MainBar from './components/ui/MainBar'

export default {
  name: "App",
  components: {
    mainbar: MainBar
  }
};
</script>

<style>
#footer {
  position:absolute;
   bottom:0;
   width:100%;
   }
#loading {
  position: absolute;
    height: 100px;
    width: 100px;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
    background: url(/link/to/your/image);
    background-size: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
