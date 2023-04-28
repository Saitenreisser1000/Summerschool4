<template>
    <v-container style="max-width: 1200px;">
      <h1 style="text-align: center;">Lebe deine Talente!</h1>
      <h2 style="text-align: center;">4. - 8. September 2023</h2>
      <br>
      <h2 style="text-align: center;">Kursangebot</h2>
      <br />
      <hr />
      <br />
      <v-btn><router-link style="color: #ff7300;" class="routerlink" to="/lessontable">Zur Anmeldung</router-link></v-btn>
      <br />
      <v-card style="margin-top: 25px; background-color:#f2f2f2;" v-for="(lesson, i) in lessons" :key="i" >
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
              <v-card-subtitle style="margin: 0 0 0px 10px">KursleiterIn: {{ lesson.tutor }}</v-card-subtitle>
              <v-card-text>{{
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
            pic: "/pics2/Weltreise.jpg",
            text:
              "Eine Weltreise mit allen Sinnen! Wir erkunden unterschiedliche Länder der Welt und lernen die Kultur, die Kulinarik, die Gewohnheiten der Menschen, die Musik und die Landschaft der einzelnen Staaten näher kennen.",
          },
          {
            title: "3D-Modelling",
            tutor: "Wolfgang Hoffelner",
            pic: "/pics2/3D-Modeling.jpg",
            text:
              "Wir lernen das 3D-Animationsprogramm „Blender” kennen und ergründen, wie in Filmen und Computerspielen Charaktere und ganze Welten entstehen.",
          },
          {
            title: "Filzen",
            tutor: "Katharina Hoffelner",
            pic: "/pics2/Filzkurs.jpg",
            text:
              "Wir gestalten mittels der flächenbildenden Technik „Filzen” aus Schafwolle eine Handy- oder Tablet-Hülle sowie andere kleine gefilzte Gegenstände nach Wunsch. (Unkostenbeitrag 20€/Person) Max. 12 TeilnehmerInnen Mitzubringen: 1 altes Handtuch",
          },
          {
            title: "Keramik",
            tutor: "Katharina Hoffelner",
            pic: "/pics2/Keramikkurs.jpg",
            text:
              "Wir lernen einige keramische Aufbaumethoden kennen und gestalten ein fantastisches Tierwesen mit dem Werkstoff Ton. (Unkostenbeitrag 10€/ Person) Max. 12 TeilnehmerInnen",
          },
          {
            title: "Italienisch",
            tutor: "Isabella Biebl",
            pic: "/pics2/Italienisch.jpg",
            text:
              "Ciao ragazzi! Du möchtest mehr als Pizza, Pasta und Ciao verstehen? Dann tauche ein in die italienische Sprache und lerne spielerisch erste Basics des Italienischen kennen. Ci vediamo! ",
          },
          {
            title: "Französisch",
            tutor: "Isabella Biebl",
            pic: "/pics2/Französisch.jpg",
            text:
              "Möchtest du gerne wissen, wie Französisch wirklich ist? Dann lass uns gemeinsam erste Eindrücke der französischen Sprache sammeln! Auf spielerische Weise geht’s in die Heimat von Baguette, Croissant und Eiffelturm! ",
          },
          {
            title: "Foto/Cyanotypie",
            tutor: "Anna Strasser",
            pic: "/pics2/Foto-Cyanotypie.jpg",
            text:
              "Entdecke die Welt der Fotografie und experimentiere mit einem alten Druckverfahren – der Cyanotypie! Verbessere deine fotografischen Fähigkeiten und lerne, wie man die Bilder in einem einzigartigen blauen Farbton entwickelt.",
          },
          { title: "Bewegtes Leben, bewegtes Lernen ", tutor: "Stefan Dollhäubl-Lehmann ", pic: "/pics2/Park.jpg", text: "Ausgehend von Balance und Ausrichtung, wird bewusstes Denken und Entscheiden in Bewegung vorgestellt und ausprobiert. Und was passiert im Körper, wenn wir uns bewegen? Ein kurzer Theorieteil soll den auf Praxis ausgerichteten Kurs abrunden." },
          { title: "Schach", tutor: "Philipp Türkis", pic: "/pics2/Schach.jpg", text: "Das „Spiel der Könige” fördert strategisches Geschick und logisches Denken. Neben der Besprechung der Grundlagen, Regeln und einiger Tricks und Hilfestellungen wird auch Zeit für Schachspiele im Kurs sein." },
          { title: "Spanisch", tutor: "Ivana Glavas", pic: "/pics2/Spanisch.jpg", text: "¡Hablamos español! Tauche ein in die spanischsprachige Welt – nicht nur sprachlich, sondern auch kulturell – und gewinne neue Eindrücke von Spanien und Lateinamerika. ¡Vamos!  " },
          { title: "Chirurgisches Nähen", tutor: "Ursula Jahn", pic: "/pics2/Chirurgisches Nähen.jpg", text: "Größere Verletzungen der Haut verheilen schneller, wenn zusammengehörige Wundschichten spannungsfrei aneinander liegen. Hierbei kommt das chirurgische Nähen zum Einsatz, um die Wundheilung zu begünstigen. In diesem Kurs beschäftigen wir uns näher mit dem Aufbau der Haut und versuchen uns an verschiedenen Naht- und Knotentechniken für einen erfolgreichen Wundverschluss." },
          { title: "Philosophie", tutor: "Renate Leeb", pic: "/pics2/Sofies-Welt.jpg", text: "Mit Textauszügen aus dem Buch „Sophies Welt” von Jostein Gaarder werden wir uns spannende Einblicke in verschiedene Gebiete der Philosophie erarbeiten. Ziel ist, dass schon Jugendliche Interesse an philosophischen Themen entwickeln und die Philosophie nicht als abgehobenes, abstraktes Fach sehen. " },
          { title: "Englisch", tutor: "Sandra Kiendler", pic: "/pics2/Gaming_English.jpg", text: "Game on! – oder doch Game over? Bist du der Protagonist deines Spiels oder bloß NPC? Lerne das faszinierende Universum des Gamings kennen und die Sprache, die du brauchst, um dich in der komplexen Welt der Spiele – online und offline – zurechtzufinden." },
          { title: "Spieleprogrammierung", tutor: "Stefan Leutgeb", pic: "/pics2/gamerzone.jpg", text: "Du interessierst dich für Computerspiele und hast dich schon gefragt, wie man diese selbst erstellen kann? Dann bist du hier genau richtig! Wir werden in diesem Kurs kleine Spiele mit der Programmierumgebung Scratch entwickeln." },
          { title: "Chor", tutor: "Stefan Kapeller", pic: "/pics2/Chor.jpg", text: "Be part of the sound – du singst gerne und hast schon musikalische Erfahrung gesammelt? Dann bist du beim Jugendchor genau richtig. Wir singen alles, was uns Spaß macht, einstimmig & mehrstimmig, mit & ohne Klavier, von Abba bis Zappa. Mindestteilnehmerzahl: 8" },
          { title: "Bodypercussion", tutor: "Stefan Kapeller", pic: "/pics2/Klatschen.jpg", text: "Feel the rhythm - das Erzeugen von Klängen und Rhythmen mit dem ganzen Körper steht im Mittelpunkt. Schritt für Schritt beschäftigen wir uns mit Körper-Klängen und Spieltechniken, um Popsongs zu untermalen oder eigene attraktive Bodypercussion-Choreographien zu entwerfen. Zusätzlich gibt es wertvolle Tipps, wie wir unsere rhythmischen Fähigkeiten verbessern können. Mindestteilnehmerzahl: 8" },
          { title: "Gesang", tutor: "Alexandra Diesterhöft", pic: "/pics2/singen.jpg", text: "Singen macht Spaß, singen tut gut! Gemeinsam begeben wir uns auf eine musikalische Reise des Ensemblegesangs und entdecken die Vielfältigkeit deiner Stimme." },
          { title: "Tontechnik", tutor: "Paul Katzmayr", pic: "/pics2/Tontechnik.jpg", text: "Die moderne Tontechnik ist vielfältig und vor allem für Musiker:Innen unumgänglich! Egal ob der richtige Schnitt von Audiofiles oder das Aufbauen einer PA-Anlage. In diesem Kurs geben wir einen kleinen Einblick in diese spannende Materie." },
          { title: "Biologie", tutor: "Marlene Kneidinger", pic: "/pics2/Biologie_Kneidinger1.jpg", text: "Sezierworkshop: Herz, Lunge & Co. Du hast dich schon immer für den konkreten Aufbau von Organen und die Präparation dieser interessiert? Dann bist du in diesem Kurs genau richtig! Wir werden gemeinsam Herz, Lunge und Niere eines Schweins sezieren und den Aufbau dieser Organe genau unter die Lupe nehmen. Max. 12 TeilnehmerInnen  " },
          { title: "flex-Based Learning in Chemie © School of Creative Solutions	", tutor: "Karin Juza", pic: "/pics2/Foto Sommerschule Chemie.jpg", text: "Du denkst, dass Kreativität nur in der Kunst gefragt ist? Lass dich vom Gegenteil überzeugen und lerne in diesem Workshop alltägliche Probleme und chemische Aufgaben mit Fantasie und Witz zu lösen. In deinem Team werden vielfältige Lösungswege entwickelt und danach im Labor auf ihre Machbarkeit untersucht. Mindestteilnehmeranzahl: 10 " },
        ],
      };
    },
  };
  </script>
  
  <style>
    .routerlink{
      color:blue;
      font-size:0.8rem;
      width:150px;
    }
  </style>
     
  