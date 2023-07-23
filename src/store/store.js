import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/LoginView.vue";
import LoginSuccess from "../views/SuccessView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: import.meta.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: Login,
        },
        {
            path: "/success",
            component: LoginSuccess,
        },
    ],
});

export default router;
