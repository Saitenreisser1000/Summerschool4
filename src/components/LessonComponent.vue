<template>
    <v-container style="max-width: 1200px;">
      <h1>Sommerschule - Gymnasium Bad Leonfelden</h1>
      <br />
      <hr />
      <br />
      <v-btn><router-link to="/lessontable">Zur Anmeldung</router-link></v-btn>
      <br />
      <br />
      <h1>Kursangebot</h1>
      <v-card v-for="(lesson, i) in lessons" :key="i" class="ma-6">
        <v-row no-gutters>
          <v-col cols="2">
            <v-img
              :src=lesson.pic
            ></v-img>
          </v-col>
          <v-col>
            <v-card-item>
              <v-card-title style="margin: 0 0 10px 10px">{{
                lesson.title
              }}</v-card-title>
              <v-card-text style="text-align: left">{{
                lesson.text
              }}</v-card-text>
            </v-card-item>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        lessons: [
          {
            title: "Weltreise (GW)",
            tutor: "Theresa Weissenböck",
            pic: "/pics/Filzkurs.jpg",
            text:
              "Eine Weltreise mit allen Sinnen Wir erkunden unterschiedliche Länder der Welt und lernen die Kultur, die Kulinarik, die Gewohnheiten der Menschen, die Musik und die Landschaft der einzelnen Staaten näher kennen.",
          },
          {
            title: "3D-Modelling",
            tutor: "Wolfgang Hoffelner",
            pic: "/pics/3D-Modeling.jpg",
            text:
              "Wir lernen das 3D-Animationsprogramm “Blender” kennen und ergründen, wie in Filmen und Computerspielen Charaktere und ganze Welten entstehen.",
          },
          {
            title: "Filzen",
            tutor: "Katharina Hoffelner",
            pic: "/pics/Filzkurs.jpg",
            text:
              "Wir gestalten mittels der flächenbildenden Technik “Filzen” aus Schafwolle eine Handy- oder Tablet Hülle sowie andere kleine gefilzte Gegenstände nach Wunsch (Unkostenbeitrag 20€/Person)Max. 12 TeilnehmerInnenMitzubringen: 1 altes Handtuch",
          },
          {
            title: "Keramik",
            tutor: "Katharina Hoffelner",
            pic: "/pics/Keramikkurs.jpg",
            text:
              "Wir lernen einige keramische Aufbaumethoden kennen und gestalten ein fantastisches Tierwesen mit dem Werkstoff Ton. (Unkostenbeitrag 10€/ Person)Max. 12 TeilnehmerInnen",
          },
          {
            title: "Italienisch",
            tutor: "Isabella Biebl",
            pic: "/pics/Italienisch.jpeg",
            text:
              "Ciao ragazzi! Du möchtest mehr als Pizza, Pasta und Ciao verstehen? Dann tauche ein in die italienische Sprache und lerne spielerisch erste Basics des Italienischen kennen. Ci vediamo! ",
          },
          {
            title: "Französisch",
            tutor: "Isabella Biebl",
            pic: "./src/assets/pics/Französisch.jpeg",
            text:
              "Möchtest du gerne wissen, wie Französisch wirklich ist? Dann lass uns gemeinsam erste Eindrücke der französischen Sprache sammeln! Auf spielerische Weise geht’s in die Heimat von Baguette, Croissant und Eiffelturm! ",
          },
          {
            title: "Foto/Cyanotypie",
            tutor: "Anna Strasser",
            pic: "./src/assets/pics/Foto-Cyanotypie.jpg",
            text:
              "Entdecke die Welt der Fotografie und experimentiere mit einem alten Druckverfahren - der Cyanotypie! Verbessere deine fotografischen Fähigkeiten und lerne, wie man die Bilder in einem einzigartigen blauen Farbton entwickelt.",
          },
          { title: "Bewegtes Leben, bewegtes Lernen ", tutor: "Stefan Dollhäubl-Lehmann ", pic: "./src/assets/pics/Bewegtes Leben, bewegtes Lernen.jpg", text: "Ausgehend von Balance und Ausrichtung im Gegensatz zu einer Position, wird bewusstes Denken und Entscheiden in Bewegung vorgestellt und ausprobiert. Und was passiert im Körper, wenn wir uns bewegen – ein kurzer Theorieteil soll den auf Praxis ausgerichteten Kurs abrunden." },
          { title: "Schach", tutor: "Philipp Türkis", text: "" },
          { title: "Spanisch", tutor: "Ivana Glavas", text: "" },
          { title: "Chirurgisches Nähen", tutor: "Ursula Jahn", text: "Größere Verletzungen der Haut verheilen schneller, wenn zusammengehörige Wundschichten spannungsfrei aneinander liegen. Hierbei kommt das chirurgische Nähen zum Einsatz, um die Wundheilung zu begünstigen. In diesem Kurs beschäftigen wir uns näher mit dem Aufbau der Haut und probieren verschiedene Naht- und Knotentechniken für einen erfolgreichen Wundverschluss aus." },
          { title: "Philosophie", tutor: "Tina Schmid-Ratzenböck", pic: "./src/assets/pics/Sophies Welt.png", text: "Mit Textauszügen aus dem Buch “Sophies Welt” von Jostein Gaarder werden wir uns spannende Einblicke in verschiedene Gebiete der Philosophie erarbeiten. Ziel ist, dass schon Jugendliche Interesse an philosophischen Themen entwickeln und die Philosophie nicht als abgehobenes, abstraktes Fach sehen. " },
          { title: "Englisch", tutor: "Sandra Kiendler", pic: "./src/assets/pics/Gaming_English.jpg", text: "Game on! – oder doch Game Over? Bist du der Protagonist deines Spiels oder bloß NPC? Lerne das faszinierende Universum des Gamings kennen und die Sprache, die du brauchst, um dich in der komplexen Welt der Spiele – online und offline – zurechtzufinden." },
          { title: "Spieleprogrammierung", tutor: "Stefan Leutgeb", pic: "./src/assets/pics/Spieleprogrammierung.png", text: "Du interessierst dich für Computerspiele und hast dich schon gefragt, wie man diese selbst erstellen kann? Dann bist du hier genau richtig! Wir werden in diesem Kurs kleine Spiele mit der Programmierumgebung Scratch entwickeln." },
          { title: "Chor", tutor: "Stefan Kapeller", text: "" },
          { title: "Percussion", tutor: "Stefan Kapeller", text: "" },
          { title: "Gesang", tutor: "Alexandra Diesterhöft", text: "" },
          { title: "Tontechnik", tutor: "Paul Katzmayr", text: "" },
          { title: "Biologie", tutor: "", pic: "./src/assets/pics/Biologie_Kneidinger1.jpg", text: "" },
          { title: "flex-Based Learning in Chemie © School of Creative Solutions	", tutor: "Karin Juza", pic: "./src/assets/pics/Foto Sommerschule Chemie.JPG", text: "Du denkst, dass Kreativität nur in der Kunst gefragt ist? Lass dich vom Gegenteil überzeugen und lerne in diesem Workshop alltägliche Probleme und chemische Aufgaben mit Fantasie und Witz zu lösen. In deinem Team werden vielfältige Lösungswege entwickelt und danach im Labor auf ihre Machbarkeit untersucht. Mindestteilnehmeranzahl: 5 " },
        ],
      };
    },
  };
  </script>
  
  <style>
  </style>
     
  