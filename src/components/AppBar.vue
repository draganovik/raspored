<template>
  <div id="app-header" class="header-shadow">
    <label>Raspored</label>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#app-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: calc(3.5em + 2px);
  top: -2px;
  background-color: white;
}
#app-header label {
  margin: auto;
  font-size: 16pt;
  font-weight: 500;
}
.header-shadow {
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
}
</style>
