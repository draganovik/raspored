<template>
  <div id="app">
    <div id="app-header" class="header-shadow">
      <label>Raspored</label>
    </div>
    <div id="app-content">
      <div style="min-height: 100vh">
        <router-view/>
      </div>
      <div id="app-footer">
        <label>
          <a href="https://yomlaa.com" target="_blank" rel="noopener">© Mladen Draganović</a>
        </label>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Verdana, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
#app-header {
  display: flex;
  position: absolute;
  width: 100%;
  height: calc(3.5em + 2px);
  top: -2px;
  background-color: rgb(246, 246, 246);
}
#app-header label {
  margin: auto;
  font-size: 16pt;
  font-weight: 500;
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
.header-shadow {
  -webkit-box-shadow: 0px -32px 34px 23px rgba(99, 99, 99, 1);
  -moz-box-shadow: 0px -32px 34px 23px rgba(99, 99, 99, 1);
  box-shadow: 0px -32px 34px 23px rgba(99, 99, 99, 1);
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
