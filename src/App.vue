<template>
  <div id="app" name="root">
    <AppBar/>
    <div id="app-content">
      <div style="min-height: 100vh">
        <router-view/>
      </div>
      <div id="app-footer">
        <label>
          <a href="https://draganovik.com" target="_blank" rel="noopener">© Mladen Draganović</a>
        </label>
        <b-form-checkbox v-model="DarkMode" id="toggleDarkMode">Dark Mode</b-form-checkbox>
      </div>
    </div>
  </div>
</template>
<script>
import AppBar from "@/components/AppBar.vue";
export default {
  data() {
    return {
      DarkMode: localStorage["DarkMode"] || false
    };
  },
  components: {
    AppBar
  },
  watch: {
    DarkMode: function(val) {
      localStorage["DarkMode"] = val;
      if (val === true) {
        document.body.classList.add("invert");
      } else {
        document.body.classList.remove("invert");
      }
    }
  },
  mounted() {
    if (this.DarkMode === "true") {
      document.body.classList.add("invert");
    } else {
      document.body.classList.remove("invert");
    }
  }
};
</script>

<style>
#app {
  font-family: Verdana, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #131313;
  background-color: white;
  overflow: hidden;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.invert {
  filter: invert(100%) !important;
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 5em;
  max-height: 8em;
  background-color: rgb(246, 246, 246);
  padding: 1em;
}
#app-footer label {
  color: #2c3e50;
  margin: auto;
}
#app-footer a {
  color: #2c3e50 !important;
  padding-left: 7.5em;
}
@media screen and (max-width: 600px) {
  #app-footer {
    display: grid;
  }
  #app-footer a {
    padding-left: 0%;
  }
  #app-footer label {
    margin-bottom: 2em;
  }
  #app-content {
    padding-top: 4em;
  }
}
</style>
