<template>
    <v-container
      style="
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        max-width: 1200px;
        "
    >
      <v-card width="80%">
        <h1 style="text-align: center;">Sommerschule - Gymnasium Bad Leonfelden</h1>
        <h2 style="text-align: center;">4. - 8. September 2023</h2>
        <br>
        <h2 style="text-align: center;">Anmeldeformular</h2>
        <br>
        <hr>
        <br>
        <form @submit.prevent="submit">
          <h3>Angaben KursteilnehmerIn</h3>
          <v-text-field
            v-model="nameKT.value.value"
            :counter="2"
            :error-messages="nameKT.errorMessage.value"
            label="Name KursteilnehmerIn"
          ></v-text-field>

          <v-text-field
            v-model="bDate.value.value"
            :counter="2"
            :error-messages="bDate.errorMessage.value"
            label="Geburtsdatum"
          ></v-text-field>

          <v-text-field
            v-model="plzOrtKT.value.value"
            :counter="2"
            :error-messages="plzOrtKT.errorMessage.value"
            label="PLZ und Ort - Kursteilnehmer"
          ></v-text-field>

          <v-text-field
            v-model="streetHnKT.value.value"
            :counter="2"
            :error-messages="streetHnKT.errorMessage.value"
            label="Straße, Hausnr. Kursteilehmer"
          ></v-text-field>

          <v-text-field
            v-model="sVNr.value.value"
            :counter="2"
            :error-messages="sVNr.errorMessage.value"
            label="SV-Nummer"
          ></v-text-field>

          <v-text-field
            v-model="citicenship.value.value"
            :counter="2"
            :error-messages="citicenship.errorMessage.value"
            label="Staatsbürgerschaft"
          ></v-text-field>

          <v-text-field
            v-model="schoolKT.value.value"
            :counter="2"
            :error-messages="schoolKT.errorMessage.value"
            label="Schule aktuell"
          ></v-text-field>
          <br>  
          <br>
          <h3>Angaben Erziehungsberechtigte(r)</h3>

          <v-text-field
            v-model="title.value.value"
            :counter="2"
            :error-messages="title.errorMessage.value"
            label="Akad. Grad / Titel"
          ></v-text-field>

          <v-text-field
            v-model="nameParent.value.value"
            :counter="2"
            :error-messages="nameParent.errorMessage.value"
            label="Name Erziehungsberechtigter"
          ></v-text-field>
  
          <v-text-field
            v-model="plzOrtParent.value.value"
            :counter="2"
            :error-messages="plzOrtParent.errorMessage.value"
            label="PLZ und Ort - Erziehungsberechtigter"
          ></v-text-field>

          <v-text-field
            v-model="streetHnParent.value.value"
            :counter="2"
            :error-messages="streetHnParent.errorMessage.value"
            label="Straße, Hausnummer"
          ></v-text-field>

          <v-text-field
            v-model="phone.value.value"
            :counter="2"
            :error-messages="phone.errorMessage.value"
            label="Telefonnummer"
          ></v-text-field>
  
          <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="E-mail"
          ></v-text-field>
          <br>
          <v-btn class="me-4" type="submit"> Anmeldeformular Laden </v-btn>
  
          <v-btn @click="handleReset"> Löschen </v-btn>
        </form>
        <br>
        <br>
      </v-card>
    </v-container>
  </template>
  
  <script>
   import jsPDF from "jspdf";
  import "jspdf-autotable";
  import { useField, useForm } from "vee-validate";
  
  export default {
    props: ['kurse'],
    data(){
      return{
        AnmeldedatenKT: {},
        AnmeldedatenParent: {}
      }
    },
    setup() {
      const { handleSubmit, handleReset } = useForm({
        validationSchema: {
          //KT = Kursteilnehmer
          nameKT(value) {
            if (value?.length >= 2) return true;
  
            //return "Name needs to be at least 2 characters.";
          },
          bDate(value){
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true;
  
            return "Geburtsdatum muss in der Form TT.MM.JJJJ eingegeben werden.";
          },
          plzOrtKT(value) {
            if (value?.length >= 2) return true;
  
            //return "Name needs to be at least 2 characters.";
          },
          streetHnKT(value) {
            if (value?.length >= 2) return true;
  
            //return "Name needs to be at least 2 characters.";
          },
          sVNr(value) {
            if (value?.length >= 2) return true;
  
            //return "Name needs to be at least 2 characters.";
          },
          citicenship(value) {
            if (value?.length >= 2) return true;
  
            //return "Name needs to be at least 2 characters.";
          },
          schoolKT(value) {
            if (value?.length >= 2) return true;
  
            //return "Name needs to be at least 2 characters.";
          },

          
          //Parents
          title(value) {
            if (value?.length >= 2) return true;
            
            //return "Name needs to be at least 2 characters.";
          },
          nameParent(value) {
            if (value?.length >= 2) return true;
  
            //return "Name needs to be at least 2 characters.";
          },
          plzOrtParent(value) {
            if (value?.length >= 2) return true;
  
            //return "Name needs to be at least 2 characters.";
          },
          streetHnKTParent(value) {
            if (value?.length >= 2) return true;
  
            //return "Name needs to be at least 2 characters.";
          },

          phone(value) {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true;
  
            //return "";
          },
          email(value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;
  
            return "Must be a valid e-mail.";
          },
        },
      });
      const nameKT = useField("nameKT");
      const bDate = useField("bDate");
      const plzOrtKT = useField("PLZ und Ort - Kursteilnehmer")
      const streetHnKT = useField("Straße, Hausnr. Kursteilehmer");
      const sVNr = useField("SV-Nummer");
      const citicenship = useField("Staatsbürgerschaft");
      const schoolKT = useField("Schule aktuell");
      const title = useField("Akad. Grad / Titel");
      const nameParent = useField("Name Erziehungsberechtigter");
      const plzOrtParent = useField("PLZ und Ort - Erziehungsberechtigter");
      const streetHnParent = useField("Straße, Hausnummer");
      const phone = useField("phone");
      const email = useField("email");
  
      const submit = handleSubmit((values) => {
        alert(JSON.stringify(values, null, 2));
      });
  
      return { nameKT, bDate, plzOrtKT, streetHnKT, phone, email, sVNr, citicenship, schoolKT, title, nameParent, plzOrtParent, streetHnParent, submit, handleReset };
    },

    methods:{
      submit() {
        //TODO
        //this.$emit('onSubmit', {name: this.name.value.value, phone: this.phone.value.value, email: this.email.value.value})
        this.AnmeldedatenKT.Name = this.nameKT.value.value;
        this.AnmeldedatenKT.bDate = this.bDate.value.value;
        this.AnmeldedatenKT.streetHnKT = this.streetHnKT.value.value;
        this.AnmeldedatenKT.plzOrtKT = this.plzOrtKT.value.value;
        this.AnmeldedatenKT.sVNr = this.sVNr.value.value;
        this.AnmeldedatenKT.citicenship = this.citicenship.value.value;
        this.AnmeldedatenKT.schoolKT = this.schoolKT.value.value;
        this.AnmeldedatenParent.title = this.title.value.value;
        this.AnmeldedatenParent.nameParent = this.nameParent.value.value;
        this.AnmeldedatenParent.streetHnParent = this.streetHnParent.value.value;
        this.AnmeldedatenParent.plzOrtParent = this.plzOrtParent.value.value;
        this.AnmeldedatenParent.phone = this.phone.value.value;
        this.AnmeldedatenParent.email = this.email.value.value;
        this.getPDF();
      },
      getPDF() {
        const doc = new jsPDF();
        doc.setFontSize(20);
        doc.text("Sommerschule 2023 - Gymnasium Bad Leonfelden", 15, 20);
        doc.setFontSize(10);
        doc.text("Hagauerstraße 17, 4190 Bad Leonfelden", 70, 27);
        doc.line(15, 30, 190, 30);
        doc.setFontSize(10);
        //Kursteilehmer
        doc.text(`KursteilnehmerIn: ${this.AnmeldedatenKT.Name}`, 15, 50);
        doc.text(`Geburtsdatum: ${this.AnmeldedatenKT.bDate}`, 15, 56);
        doc.text(`Straße, Hausnummer: ${this.AnmeldedatenKT.streetHnKT}`, 15, 62);
        doc.text(`Plz, Ort: ${this.AnmeldedatenKT.plzOrtKT}`, 15, 68);
        doc.text(`Sozialversicherungsnummer: ${this.AnmeldedatenKT.sVNr}`, 15, 74);
        doc.text(`Staatsbürgerschaft: ${this.AnmeldedatenKT.citicenship}`, 15, 80);
        doc.text(`Aktuelle Schule: ${this.AnmeldedatenKT.schoolKT}`, 15, 86);
        //Parents
        doc.text(`Titel: ${this.AnmeldedatenParent.title}`, 15, 160);
        doc.text(`Name: ${this.AnmeldedatenParent.nameParent}`, 15, 166);
        doc.text(`Straße, Hausnummer: ${this.AnmeldedatenParent.streetHnParent}`, 15, 172);
        doc.text(`Plz, Ort: ${this.AnmeldedatenParent.plzOrtParent}`, 15, 178);
        doc.text(`Telefonnummer: ${this.AnmeldedatenParent.phone}`, 15, 184);
        doc.text(`Email-Adresse: ${this.AnmeldedatenParent.email}`, 15, 190);
        
        doc.setFontSize(10);
        doc.text("Ich stimme der Verarbeitung meiner angegebenen Daten und jener meines Kindes zum Zweck der Anmeldung zur", 15,210);
        doc.text("Sommerschule 2023 im BMBWF, im BKA, in der zuständigen Bildungsdirektion, im zuständigen Finanzamt sowie in", 15, 215);
        doc.text("den teilnehmenden Schulstandorten gemäß der schulrechtlichen Rechtsgrundlagen zu.", 15, 220)
  
        doc.setFontSize(15);
        doc.text("Gewählte Kurse:", 15, 105);
        
        const tableData = JSON.parse(decodeURIComponent(this.kurse));
        doc.autoTable({
          margin: { top: 110 },
  
          theme: "plain",
          head: [["Kursname", "Termine", "KursleiterIn"]],
          body: tableData.map((item) => [item.lessonname, item.ltime, item.tutor]),
        });
  
        doc.text("Unterschrift Erziehungsberechtigte(r):", 15, 240);
        doc.line(105, 240, 190, 240);
  
        doc.setFontSize(12);
        doc.text(
          "Um die Anmeldung abzuschließen, senden Sie das unterschriebene Formular an:",
          15,
          265
        );
        doc.text("sommerschule@borgleon.at", 70, 272);
  
        doc.save("Sommerschule.pdf");
      },
    }
  };
  </script>
  
  <style>
  </style>