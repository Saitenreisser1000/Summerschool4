<template>
    <div>
      <v-container style="max-width: 1200px;">
          <h1 style="text-align: center;">Lebe deine Talente!</h1>
          <h2 style="text-align: center;">4. - 8. September 2023</h2>
          <br>  
          <h2 style="text-align: center;">Wochenplan</h2>
          <br />
          <hr />
          <br />
          <v-btn><router-link style="color: #ff7300;" class="routerlink" to="/">Zur Kursübersicht</router-link></v-btn>
          <br />
          <v-table style="margin-top: 25px;" width="500px">
            <thead>
              <tr>
                <th>Montag 8:00-9:40</th>
                <th>Dienstag 8:00-9:40</th>
                <th>Mittwoch 8:00-9:40</th>
                <th>Donnerstag 8:00-9:40</th>
                <th>Freitag 8:00-9:40</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 4" :key="i">
                <td v-for="day in daysEarly" :key="day.day">
                  <div>
                    <v-btn
                      flat
                      width="160"
                      size="small"
                      :rounded="0"
                      :class="getClass(day, i)"
                      @click="onClick(day, i)"
                    >
                      {{ getLesson(getLid(day, i)).lessonname }}
                    </v-btn>
                  </div>
                </td>
              </tr>
              <br />
              <tr>
                <th>Montag 9:50-11:30</th>
                <th>Dienstag 9:50-11:30</th>
                <th>Mittwoch 9:50-11:30</th>
                <th>Donnerstag 9:50-11:30</th>
                <th>Freitag 9:50-11:30</th>
              </tr>
              <tr v-for="i in 4" :key="i">
                <td v-for="day in daysLate" :key="day.day">
                  <div>
                    <v-btn
                      flat
                      width="160"
                      size="small"
                      :rounded="0"
                      :class="getClass(day, i)"
                      @click="onClick(day, i)"
                    >
                      {{ getLesson(getLid(day, i)).lessonname }}
                    </v-btn>
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
          <br />
            <v-container style="display:flex; justify-content: center;" >
              <v-btn :class="btnToPDF" style="margin-top: 10px; margin-botton: 10px; width: 400px; font-size: 0.8rem; color:blue"
              :disabled="isValid()"><router-link style="color:#ff7300" :to="`/form/${this.getActiveLessonsJSON()}`">Zum Anmeldeformular (mind. 2 Kurse auswählen)</router-link></v-btn>
            </v-container>
            <br>
            <p style="text-align: center;">
              Das Anmeldeformular bitte über folgenden Link ausfüllen und
              unterschrieben an sommerschule@borgleon.at senden.
            </p>
            <br>
            <v-container style="display:flex; justify-content: center; " >
              <v-card style="width: 600px; background-color: #f2f2f2;">
                <v-list>
                  <v-list-subheader>gewählte Kurse:</v-list-subheader>
                  <v-list-item
                    style="text-align: left"
                    variant="text"
                    v-for="(lesson, i) in this.getActiveLessons()"
                    :key="i"
                  >
                    {{ lesson.lessonname + ":  " + lesson.ltime }}
                  </v-list-item>
                </v-list>
              </v-card>
            </v-container>
          
      </v-container>
    </div>
  </template>
    
  <script>
  
  export default {
    data() {
      return {
        daysEarly: [
          { day: "Montag", lid: [1, 2, 3, 4], time: "8:00 - 9:40" },
          { day: "Dienstag", lid: [9, 2, 1, 4], time: "8:00 - 9:40" },
          { day: "Mittwoch", lid: [9, 11, 12, 13], time: "8:00 - 9:40" },
          { day: "Donnerstag", lid: [11, 18, 16, 20], time: "8:00 - 9:40" },
          { day: "Freitag", lid: [18, 3, 20, 7], time: "8:00 - 9:40" },
        ],
        daysLate: [
          { day: "Montag", lid: [5, 6, 7, 8], time: "9:50 - 11:30" },
          { day: "Dienstag", lid: [5, 6, 10, 8], time: "9:50 - 11:30" },
          { day: "Mittwoch", lid: [14, 15, 16, 17], time: "9:50 - 11:30" },
          { day: "Donnerstag", lid: [19, 14, 12, 15], time: "9:50 - 11:30" },
          { day: "Freitag", lid: [19, 13, 10, 17], time: "9:50 - 11:30" },
        ],
        lessons: [
          {
            lessonid: 1,
            ldays: [],
            lessonname: "Chirurgisches Nähen",
            active: false,
            btncolor: "green",
            ltime: [],
            tutor: "Ursula Jahn"
          },
          {
            lessonid: 2,
            ldays: [],
            lessonname: "Filzen",
            active: false,
            btncolor: "red",
            ltime: [],
            tutor: "Katharina Hoffelner"
          },
          {
            lessonid: 3,
            ldays: [],
            lessonname: "bewegtes Leben",
            active: false,
            btncolor: "grey",
            ltime: [],
            tutor: "Stefan Dollhäubl-Lehmann"
          },
          {
            lessonid: 4,
            ldays: [],
            lessonname: "Chor",
            active: false,
            btncolor: "lightblue",
            ltime: [],
            tutor: "Stefan Kapeller"
          },
          {
            lessonid: 5,
            ldays: [],
            lessonname: "Spanisch",
            active: false,
            btncolor: "#e8e289",
            ltime: [],
            tutor: "Ivana Glavas"
          },
          {
            lessonid: 6,
            ldays: [],
            lessonname: "Keramik",
            active: false,
            btncolor: "#f7d497",
            ltime: [],
            tutor: "Katharina Hoffelner"
          },
          {
            lessonid: 7,
            ldays: [],
            lessonname: "Schach",
            active: false,
            btncolor: "#c0c6cf",
            ltime: [],
            tutor: "Philipp Türkis"
          },
          {
            lessonid: 8,
            ldays: [],
            lessonname: "Bodypercussion",
            active: false,
            btncolor: "#83aef2",
            ltime: [],
            tutor: "Stefan Kapeller"
          },
          {
            lessonid: 9,
            ldays: [],
            lessonname: "Foto/Cyanotypie",
            active: false,
            btncolor: "#eda64e",
            ltime: [],
            tutor: "Anna Strasser"
          },
          {
            lessonid: 10,
            ldays: [],
            lessonname: "Gesang",
            active: false,
            btncolor: "#41aee0",
            ltime: [],
            tutor: "Alexandra Diesterhöft"
          },
          {
            lessonid: 11,
            ldays: [],
            lessonname: "Tontechnik",
            active: false,
            btncolor: "#293791",
            ltime: [],
            tutor: "Paul Katzmayr"
          },
          {
            lessonid: 12,
            ldays: [],
            lessonname: "Italienisch",
            active: false,
            btncolor: "#c4b164",
            ltime: [],
            tutor: "Isabella Biebl"
          },
          {
            lessonid: 13,
            ldays: [],
            lessonname: "Biologie",
            active: false,
            btncolor: "#2bba23",
            ltime: [],
            tutor: "Marlene Kneidinger"
          },
          {
            lessonid: 14,
            ldays: [],
            lessonname: "Philosophie",
            active: false,
            btncolor: "#7f8a7f",
            ltime: [],
            tutor: "Renate Leeb"
          },
          {
            lessonid: 15,
            ldays: [],
            lessonname: "Spieleprogrammierung",
            active: false,
            btncolor: "#825214",
            ltime: [],
            tutor: "Stefan Leutgeb"
          },
          {
            lessonid: 16,
            ldays: [],
            lessonname: "Französisch",
            active: false,
            btncolor: "#f0e0c9",
            ltime: [],
            tutor: "Isabella Biebl"
          },
          {
            lessonid: 17,
            ldays: [],
            lessonname: "Weltreise",
            active: false,
            btncolor: "#8c8984",
            ltime: [],
            tutor: "Theresa Weissenböck"
          },
          {
            lessonid: 18,
            ldays: [],
            lessonname: "Englisch",
            active: false,
            btncolor: "#99691a",
            ltime: [],
            tutor: "Sandra Kiendler"
          },
          {
            lessonid: 19,
            ldays: [],
            lessonname: "Chemie",
            active: false,
            btncolor: "#5fc441",
            ltime: [],
            tutor: "Karin Juza"
          },
          {
            lessonid: 20,
            ldays: [],
            lessonname: "3D Modelling",
            active: false,
            btncolor: "#a1894c",
            ltime: [],
            tutor: "Wolfgang Hoffelner"
          },
        ],
        activeLessons: []
      };
    },
    created() {
      this.fillLdays();
    },
    methods: {
      isValid() {
        return this.activeLessons.length >= 2 ? false : true;
      },
      getActiveLessons() {
        return this.activeLessons;
      },
      getActiveLessonsJSON(){
        return encodeURIComponent(JSON.stringify(this.activeLessons));
      },
      fillLdays() {
        this.daysEarly.forEach((day) => {
          day.lid.forEach((lid) => {
            this.getLesson(lid).ldays.push(day);
            this.getLesson(lid).ltime.push(` ${day.day} um ${day.time}`);
          });
        });
        this.daysLate.forEach((day) => {
          day.lid.forEach((lid) => {
            this.getLesson(lid).ldays.push(day);
            this.getLesson(lid).ltime.push(` ${day.day} um ${day.time}`);
          });
        });
      },
      getClass(day, index) {
        return {
          selected: this.getLesson(day.lid[index - 1]).active,
        };
      },
      getLesson(id) {
        return this.lessons.find((lesson) => lesson.lessonid === id);
      },
      getLid(day, index) {
        return day.lid[index - 1];
      },
      onClick(day, index) {
        //trigger on off
        if (this.getLesson(day.lid[index - 1]).active) {
          this.getLesson(day.lid[index - 1]).active = false;
        } else {
          this.getLesson(day.lid[index - 1]).active = true;
          this.setOtherFalse(day, index);
        }
        this.activeLessons = this.lessons.filter(
          (element) => element.active === true
        );
      },
      setOtherFalse(day, index) {
        //set elements from same block inactive
        day.lid.forEach((element) => {
          this.getLesson(element).active = false;
        });
  
        //set elements from chained course inactive
        this.getLesson(day.lid[index - 1]).ldays.forEach((el) => {
          el.lid.forEach((e) => {
            this.getLesson(e).active = false;
          });
        });
        //set clicked active
        day.lid.forEach((element) => {
          if (element === this.getLid(day, index)) {
            //set all day elements inactive except clicked
            this.getLesson(element).active = true;
          }
        });
      },
    },
  };
  </script>
    
  <style scoped>
  table {
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  th,
  td {
    border: 1px solid #ddd;
    padding: 5px !important;
    text-align:center;
  }
  
  th {
    background-color: #f2f2f2;
    font-size: 0.9em;
    text-align: center !important;
  }
  
  button {
    background-color: #f2f2f2;
    font-size: 0.6em;
    color: black !important;
  }
  
  .selected {
    background-color: #ff7300;
    color: white !important;
    opacity: 1;
  }
  </style>
  