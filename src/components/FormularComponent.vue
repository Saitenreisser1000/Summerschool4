<template>
    <v-container
      style="
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        "
    >
      <v-card width="80%">
        <h2 style="margin: 20px">Anmeldeformular</h2>
        <form @submit.prevent="submit">
          <h3>Angaben KursteilnehmerIn</h3>
          <v-text-field
            v-model="name.value.value"
            :counter="2"
            :error-messages="name.errorMessage.value"
            label="Name KursteilnehmerIn"
          ></v-text-field>

          <v-text-field
            v-model="bDate.value.value"
            :counter="2"
            :error-messages="bDate.errorMessage.value"
            label="Geburtsdatum"
          ></v-text-field>

          <v-text-field
            v-model="name.value.value"
            :counter="2"
            :error-messages="name.errorMessage.value"
            label="PLZ Ort"
          ></v-text-field>

          <v-text-field
            v-model="name.value.value"
            :counter="2"
            :error-messages="name.errorMessage.value"
            label="Straße, Hausnr."
          ></v-text-field>

          <v-text-field
            v-model="name.value.value"
            :counter="2"
            :error-messages="name.errorMessage.value"
            label="SV-Nummer"
          ></v-text-field>

          <v-text-field
            v-model="name.value.value"
            :counter="2"
            :error-messages="name.errorMessage.value"
            label="Staatsbürgerschaft"
          ></v-text-field>

          <v-text-field
            v-model="phone.value.value"
            :counter="2"
            :error-messages="phone.errorMessage.value"
            label="Schule aktuell"
          ></v-text-field>
          
          <h3>Angaben Erziehungsberechtigte(r)</h3>

          <v-text-field
            v-model="name.value.value"
            :counter="2"
            :error-messages="name.errorMessage.value"
            label="Akad. Grad / Titel"
          ></v-text-field>

          <v-text-field
            v-model="name.value.value"
            :counter="2"
            :error-messages="name.errorMessage.value"
            label="Name Erziehungsberechtigter"
          ></v-text-field>
  
          <v-text-field
            v-model="phone.value.value"
            :counter="2"
            :error-messages="phone.errorMessage.value"
            label="PLZ, Ort"
          ></v-text-field>

          <v-text-field
            v-model="phone.value.value"
            :counter="2"
            :error-messages="phone.errorMessage.value"
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
  
          <v-btn class="me-4" type="submit"> Anmeldeformular Laden </v-btn>
  
          <v-btn @click="handleReset"> Löschen </v-btn>
        </form>
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
        Anmeldedaten: {
          Name: "Kerstin Hahn",
          NameErzieh: "Anita Hahn",
          Adresse: "Sonnenstraße 23 4020 Linz",
          Telefonnummer: "0664123456",
          Emailadresse: "asdf@irgendwas.at",
        },
      }
    },
    setup() {
      const { handleSubmit, handleReset } = useForm({
        validationSchema: {
          name(value) {
            if (value?.length >= 2) return true;
  
            //return "Name needs to be at least 2 characters.";
          },

          bDate(value){
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true;
  
            return "Geburtsdatum muss in der Form TT.MM.JJJJ eingegeben werden.";
          },
          phone(value) {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true;
  
            //return "";
          },
          email(value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;
  
            //return "Must be a valid e-mail.";
          },
        },
      });
      const name = useField("name");
      const bDate = useField("bDate");
      const phone = useField("phone");
      const email = useField("email");
  
      const submit = handleSubmit((values) => {
        alert(JSON.stringify(values, null, 2));
      });
  
      return { name, bDate, phone, email, submit, handleReset };
    },

    methods:{
      submit() {
        //TODO
        //this.$emit('onSubmit', {name: this.name.value.value, phone: this.phone.value.value, email: this.email.value.value})
        this.Anmeldedaten.Name = this.name.value.value;
        this.Anmeldedaten.Telefonnummer = this.phone.value.value;
        this.Anmeldedaten.Emailadresse = this.email.value.value;
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
        doc.text(`KursteilnehmerIn: ${this.Anmeldedaten.Name}`, 15, 50);
        doc.text(`Adresse: ${this.Anmeldedaten.Adresse}`, 15, 56);
        doc.text(`Telefonnummer: ${this.Anmeldedaten.Telefonnummer}`, 15, 62);
        doc.text(`Emailadresse: ${this.Anmeldedaten.Emailadresse}`, 15, 68);
  
        doc.setFontSize(15);
        doc.text("Gewählte Kurse:", 15, 105);
        
        const tableData = JSON.parse(decodeURIComponent(this.kurse));
        doc.autoTable({
          margin: { top: 110 },
  
          theme: "plain",
          head: [["Kursname", "Termine", "Kursleiter"]],
          body: tableData.map((item) => [item.lessonname, item.ltime]),
        });
  
        doc.text("Unterschrift Erziehungsberechtigte(r):", 15, 230);
        doc.line(105, 230, 190, 230);
  
        doc.setFontSize(12);
        doc.text(
          "Um die Anmeldung abzuschließen, senden Sie das unterschriebene Formular an:",
          15,
          255
        );
        doc.text("sommerschule@borgleon.at", 15, 262);
  
        doc.save("Sommerschule.pdf");
      },
    }
  };
  </script>
  
  <style>
  </style>