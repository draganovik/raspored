<template>
  <div class="PSelector">
    <b-form-input placeholder="Unesi ime..." list="my-list-id" v-model="SelectedProfessor"></b-form-input>

    <datalist id="my-list-id">
      <option v-bind:key="item" v-for="item in professorsList">{{ item }}</option>
    </datalist>
  </div>
</template>

<script>
export default {
  name: 'ProfessorSelector',
  data () {
    return {
      SelectedProfessor: '',
      professorsList: [
        'Nedeljković Saša',
        'Stojilković Silvija',
        'Babić Katica',
        'Petrović Sandra',
        'Vukašinović Vladislava',
        'Nedimović Nataša',
        'Veselinović Branislav',
        'Maksić Jasna',
        'Fabri Nedeljka',
        'Jović Marina',
        'Jelenković Biljana',
        'Sladić Nataša',
        'Obrovac Jasmina',
        'Karastanković Nataša',
        'Milanović Ana',
        'Ćurčić Nataša',
        'Nikolić Marina',
        'Vegner Dragana',
        'Savić Vladanka',
        'Vukadinović Jovana',
        'Obradović Zorica',
        'Andonović Slađana',
        'Đorić Zoran',
        'Bojić Tijana',
        'Đurković Jasminka',
        'Krivić Vesna',
        'Nikolić Filip',
        'Vukmir Zorica',
        'Dostanić Irena',
        'Jevremović Milorad',
        'Petrović Siniša',
        'Hodoba Draginja',
        'Sekulić Tijana',
        'Bačvanin Sanja',
        'Đinić Snežana',
        'Bujnović Ksenija',
        'Pantić Aleksandra',
        'Domazet Đorđe',
        'Kemetar Smiljana',
        'Milutinov Biljana',
        'Vitasović Mladenović Jadranka',
        'Kardas Svetlana',
        'Škrbić Marijana',
        'Jovanović Janko',
        'Šalić Zlatko',
        'Kurucić Marija',
        'Alargić Ana',
        'Milašinović Branislava',
        'Ramljak Ivana',
        'Adašević Vladimir',
        'Dostanić Aleksandar',
        'Perić Darko',
        'Eror Jovan',
        'Milosavljević Snežana',
        'Marković Ivana',
        'Filipović Ivan',
        'Đurković Joviša',
        'Antić Aleksandra',
        'Lazić Borislava',
        'Tajm Edi',
        'Predić Dragana',
        'Ljubišić Branko',
        'Bando Vladimir',
        'Funduk Branka',
        'Gašpar Kovačević Tea',
        'Mihajlović Jovica'
      ]
    }
  },
  methods: {
    CacheSelected () {
      localStorage['SelectedProfessor'] = this.SelectedProfessor
    }
  }
}
</script>
