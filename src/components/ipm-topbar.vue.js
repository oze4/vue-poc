let ipm_topbar = {     
    template: `
    <div>
        <v-app-bar color='primary' dark fixed flat app prominent> 
            <v-spacer></v-spacer>
            <a :href='logo.url' :rel='logo.rel' target='_blank' style='margin-top:5px;'>
                <img :src='logo.image' :alt='logo.alt' :style='logo.style'>
            </a>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-app-bar color='primary' dark flat :height='extensionHeight' ref='welcome_message'>
            <v-container fill-height>
                <v-layout text-center row>
                    <v-flex >
                        <span style='margin-right:30%;'>
                            {{ message.header }}
                        </span>
                        <v-flex class='display-3 font-weight-light font-italic'>
                            {{ message.subHeader }}
                        </v-flex>
                        <span class='caption' style='margin-left:30%;'>
                            {{ message.author }}
                        </span>
                    </v-flex>
                </v-layout>
            </v-container>       
        </v-app-bar>
    </div>
    `,
    props: {
        extensionHeight: {
            type: Number,
            default: 64,
        },
    },
    mounted() {
        this.centerWelcomeMessage;
    },
    computed: {},
    data() { 
        return {
            message: {
                header: "Welcome to v-ipmapper!",
                subHeader: "MAP PUBLIC IP ADDRESSES",
                author: "Made by Matthew Oestreich"
            },
            logo: {
                url: 'https://github.com/oze4',
                image: './docs/img/ostrike_logo.png',
                rel: 'noopener noreferrer',
                alt: 'matt_oestreich_github',
                style: 'width:56px; height:52px;',
            },
        }; 
    },
    computed: {
        centerWelcomeMessage() {
            /**
             * Sets CSS Style
             * 
             * Had to programmatically add style to the welcome message because
             * I was unable to figure out how to set the style on 'v-toolbar__content',
             * which is dynamically created by Vuetify and v-toolbar.
             */
            let e = this.$refs.welcome_message.$el.children[0];
            e.style.justifyContent = e.className === 'v-toolbar__content' ? 'center' : '';
        },
    },
    methods: {

    }
};
