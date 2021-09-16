// Attraverso l'apposita API di Boolean
// (https://flynn.boolean.careers/exercises/api/random/mail)
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.
Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        email: '',
    },
    methods: {},
    mounted() {
        axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((pippo) => {
                // pippi è l'elemento che passo alla funzione
                // data è l'oggetto all'interno dell'elemento 'pippo'
                // response è l'elemento che ci serve, ovvero l'email
                console.log(pippo);
                console.log(pippo.data);
                console.log(pippo.data.response);

                this.email = pippo.data.response;
                console.log(this.email);
            })
    },
})





