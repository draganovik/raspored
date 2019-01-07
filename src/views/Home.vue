<template>
  <div class="home">
    <div id="div-display-schedule">
      <img ref="displaySchedule" :src="urlValue" alt="Tabela rasporeda" type="image/svg+xml">
    </div>
    <div id="div-selector">
      <b-button v-b-modal.modalPopover variant="primary">Izaberite drugi raspored</b-button>
      <b-modal
        id="modalPopover"
        centered
        title="Odeljenja Mitrovačke Gimnazije:"
        ok-only
        @ok="handleModal"
      >
        <ScheduleSelector ref="selectorModal"/>
      </b-modal>
    </div>
    <div id="div-display-bells">
      <img src="/assets/bells_ab.svg" alt="Lista zvona">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ScheduleSelector from "@/components/ScheduleSelector.vue";

export default {
  name: "home",
  data() {
    return {
      urlValue: "/assets/gmsm/" + this.getSelected() + ".svg"
    };
  },
  components: {
    ScheduleSelector
  },
  methods: {
    handleModal() {
      this.$refs.selectorModal.CacheSelected();
      this.urlValue = "/assets/gmsm/" + this.getSelected() + ".svg";
    },
    getSelected() {
      if (localStorage["SelectedClass"] !== "0") {
        return (
          localStorage["SelectedYear"] + localStorage["SelectedClass"] || "I1"
        );
      }
      return localStorage["SelectedYear"];
    }
  }
};
</script>
<style scoped>
.home {
  display: grid;
}
button {
  color: whitesmoke;
}
#div-display-bells {
  width: 64vmin;
  min-width: 16em;
  padding: 2em;
  height: auto;
  margin: auto;
  transition-duration: 0.2s;
}
#div-display-schedule {
  width: 90vmin;
  min-width: 20em;
  padding: 2em;
  padding-bottom: 1em;
  padding-top: 3em;
  height: auto;
  margin: auto;
  transition-duration: 0.2s;
}
@media screen and (max-width: 640px) {
  #div-display-schedule {
    width: 100vmin;
    padding: 1em;
    padding-bottom: 0.5em;
    padding-top: 1.5em;
  }
  #div-display-bells {
    width: 80vmin;
    padding: 1em;
    padding-bottom: 0.5em;
    padding-top: 2em;
  }
}
@media screen and (max-height: 700px) and (min-width: 640px) {
  #div-display-schedule {
    min-width: 34em;
  }
  #div-display-bells {
    min-width: 20em;
  }
}
</style>
