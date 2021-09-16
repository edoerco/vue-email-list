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
        lista: [],
        counter: 10,
    },
    methods: {},
    mounted() {
        for(let i = 0; i < this.counter; i++) {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((pippo) => {
                // pippi è l'elemento che passo alla funzione
                // console.log(pippo);
                // data è l'oggetto all'interno dell'elemento 'pippo'
                // console.log(pippo.data);
                // response è l'elemento che ci serve, ovvero l'email
                // console.log(pippo.data.response);
    
                this.email = pippo.data.response;
                // pushamo l'email nella lista stanziata vuota 
                this.lista.push(this.email);

                console.log(this.email);
            })
        }
    },
})





