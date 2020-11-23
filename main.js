var app = new Vue({
    el: '#root',
    data: {
        dischi: []
    },
    methods: {

    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((response) => {
            let disco = response.data.response;
            this.dischi = disco;
        });

    }

});
