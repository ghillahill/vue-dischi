var app = new Vue({
    el: '#root',
    data: {
        dischi: []
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
        });

    }

});
