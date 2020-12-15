const RootComponent = {
    data() {
        return {
            title: "TD Carousel",
            count: 0,
            index: 0,
            slides:[
                {
                    src:"Rickroll.jpg"
                },
                {
                    src:"pull.jpeg"
                },
                {
                    src:"téléchargement.jpeg"
                }
            ]
        }
    },
    methods: {

    },
    mounted(){
        setInterval( () => {
            if (this.index < this.slides.length - 1) {
                this.index++
            } else {
                this.index = 0
            }
            this.count++
            }, 2000);
    }
};

const app = Vue.createApp(RootComponent);
