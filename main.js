var app = new Vue({
    el: '#root',
    data: {
        dischi: [],
        genere: [],
    },
    methods: {

    },
    methods: {
        onChange(event) {

        }
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((response) => {
            let disco = response.data.response;
            this.dischi = disco;

            this.dischi.forEach((element) => {
                if (!this.genere.includes(element.genre)) {
                    this.genere.push(element.genre);
                }
            });

        });

    }

});
