import Vue from "vue"
import Vuetify from "vuetify/lib/framework"

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#106cc8",
            },
        },
    },
    breakpoint: {
        thresholds: {
            md: "760px",
            lg: "900px",
        },
    },
})
