<template>
  <div id="app">
    <AppBar/>
    <div id="app-content">
      <div style="min-height: 100vh">
        <router-view/>
      </div>
      <div id="app-footer">
        <label>
          <a href="https://draganovik.com" target="_blank" rel="noopener">© Mladen Draganović</a>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import AppBar from '@/components/AppBar.vue'
export default {
  components: {
    AppBar
  }
}
</script>

<style>
#app {
  font-family: Verdana, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

#app-content {
  height: 100vh;
  padding-top: 3.5em;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  overflow-y: scroll;
  overflow-x: hidden;
}
#app-content::-webkit-scrollbar {
  width: 0 !important;
}
#app-footer {
  display: flex;
  height: 5em;
  background-color: rgb(246, 246, 246);
}
#app-footer label {
  margin: auto;
  color: #2c3e50;
}
#app-footer a {
  color: #2c3e50 !important;
}
@media screen and (max-width: 500px) {
  #app-footer {
    font-size: 10pt;
  }
}
</style>
