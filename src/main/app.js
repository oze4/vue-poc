Vue.component('v-select', VueSelect.VueSelect)

new Vue({
    el: '#root',
    components: {  
        'v-topbar-part': componentVTopbarPart,
        'v-select-provider-card': componentVSelectProviderCard,     
    },
    data: {
        /*counter: 0,
        secondCounter: 0,
        name: '',*/
    },
    computed: {
        /*result: function () {
            return this.counter > 5 ? "Greater than 5" : "Smaller than 5";
        },*/
    },
    watch: {
        /*counter: function () {
            let vm = this;
            setTimeout(function () {
                vm.counter = 0;
            }, 5000);
        },*/
    },
    methods: {
        /*result: function () {
            console.log('method()');
            return this.counter > 5 ? "Greater than 5" : "Smaller than 5";
        },*/
    },
});