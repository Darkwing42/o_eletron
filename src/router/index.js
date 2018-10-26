import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Auftragserfassung from "@/components/Auftragserfassung";
import Proben from "@/components/Proben";
import Mikrobiologie from "@/components/Mikrobiologie";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/auftragserfassung",
      name: "Auftragserfassung",
      component: Auftragserfassung
    },
    {
      path: "/proben",
      name: "Proben",
      component: Proben
    },
    {
      path: "/mikrobiologie",
      name: "Mikrobiologie",
      component: Mikrobiologie
    }
  ]
});
