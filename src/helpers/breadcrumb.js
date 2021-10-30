import { useRoute } from "vue-router";
const route = useRoute();

const breadcrumbs = (menus) => menus.forEach(menu => {
    if(menu.path === route.path){
        return menu.name
    }
    return "Dashboard"
});

export default breadcrumbs;