<template>
  <div class="home">
    <div id="div-display-schedule">
      <img ref="displaySchedule" :src="urlValue" alt="Tabela rasporeda" type="image/svg+xml">
    </div>
    <div id="div-selector">
      <b-button v-b-modal.modalStu variant="outline-primary">Odeljenja</b-button>
      <b-modal
        id="modalStu"
        centered
        title="Odeljenja Mitrovačke Gimnazije:"
        ok-only
        @ok="handleModalStu"
      >
        <ScheduleSelector ref="selectorModalStu"/>
      </b-modal>
      <b-button v-b-modal.modalProf variant="outline-primary">Profesori</b-button>
      <b-modal
        id="modalProf"
        centered
        title="Profesori Mitrovačke Gimnazije:"
        ok-only
        @ok="handleModalProf"
      >
        <ProfessorSelector ref="selectorModalProf"/>
      </b-modal>
    </div>
    <div id="div-display-bells">
      <img src="/assets/bells_ab.svg" alt="Lista zvona">
    </div>
  </div>
</template>

<script>
import ScheduleSelector from '@/components/ScheduleSelector.vue'
import ProfessorSelector from '@/components/ProfessorSelector.vue'

export default {
  name: 'home',
  data () {
    return {
      urlValue: '/assets/gmsm/' + this.getSelected() + '.svg'
    }
  },
  components: {
    ScheduleSelector,
    ProfessorSelector
  },
  methods: {
    handleModalStu () {
      this.$refs.selectorModalStu.CacheSelected()
      this.urlValue = '/assets/gmsm/' + this.getSelected() + '.svg'
    },
    handleModalProf () {
      this.$refs.selectorModalProf.CacheSelected()
      this.urlValue = '/assets/gmsm/' + this.getSelected() + '.svg'
    },
    getSelected () {
      if (
        localStorage['SelectedProfessor'] !== undefined &&
        localStorage['SelectedProfessor'] !== '0'
      ) {
        return localStorage['SelectedProfessor']
      } else {
        if (localStorage['SelectedClass'] !== '0') {
          return (
            localStorage['SelectedYear'] + localStorage['SelectedClass'] || 'I1'
          )
        }
        return localStorage['SelectedYear']
      }
    }
  }
}
</script>
<style scoped>
.home {
  display: grid;
}
#div-selector {
  display: flex;
  justify-content: center;
  padding: 1em;
}
#div-selector button {
  margin: 0.5em;
}
#div-display-bells {
  width: 64vmin;
  min-width: 16em;
  padding: 2em;
  height: auto;
  margin: auto;
  margin-bottom: 3em;
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
#div-display-schedule img {
  width: 100%;
  font-family: sans-serif;
}
@media screen and (max-width: 640px) {
  #div-display-schedule {
    width: 100%;
    padding: 0.4em;
    margin-top: 0.5em;
  }
  #div-display-schedule img {
    width: 100%;
  }
  #div-display-bells {
    width: 80vmin;
    padding: 0.4em;
  }
  b-button {
    size: sm;
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
