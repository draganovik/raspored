<template>
  <div class="SSelector">
    <label>Srednjoškolci</label>
    <b-form-group>
      <b-form-radio-group
        id="btnYear"
        buttons
        button-variant="outline-primary"
        v-model="selectedYear"
        :options="years"
      />
    </b-form-group>
    <b-form-group>
      <b-form-radio-group
        id="btnClass"
        buttons
        button-variant="outline-primary"
        v-model="selectedClass"
        @input="selectDefaultYear"
        :options="classes"
      />
    </b-form-group>
    <label>Osnovci</label>
    <b-form-group>
      <b-form-radio-group
        id="btnElementary"
        buttons
        button-variant="outline-primary"
        v-model="selectedYear"
        @input="deselectClass"
        :options="elementary"
      />
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'ScheduleSelector',
  data () {
    return {
      selectedYear: localStorage.SelectedYear || 'I',
      years: [
        { text: 'I', value: 'I' },
        { text: 'II', value: 'II' },
        { text: 'III', value: 'III' },
        { text: 'IV', value: 'IV' }
      ],
      selectedClass: localStorage.SelectedClass || '1',
      classes: [
        { text: '1', value: '1' },
        { text: '2', value: '2' },
        { text: '3', value: '3' },
        { text: '4', value: '4' },
        { text: '5', value: '5' },
        { text: '6', value: '6' },
        { text: 'B', value: 'B' }
      ],
      elementary: [
        { text: 'VII', value: 'VII' },
        { text: 'VIII', value: 'VIII' }
      ]
    }
  },
  methods: {
    deselectClass () {
      if (this.selectedYear === 'VII' || this.selectedYear === 'VIII') {
        this.selectedClass = '0'
      } else if (this.selectedClass === '0') {
        this.selectedClass = '1'
      }
    },
    selectDefaultYear () {
      if (
        (this.selectedYear === 'VII' || this.selectedYear === 'VIII') &&
        this.selectedClass !== '0'
      ) {
        this.selectedYear = 'I'
      }
    },
    CacheSelected () {
      localStorage.SelectedYear = this.selectedYear
      localStorage.SelectedClass = this.selectedClass
      localStorage.SelectedProfessor = '0'
    }
  }
}
</script>
