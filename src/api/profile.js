import {
    mdiAccountCircleOutline,
    mdiCashLock
} from "@mdi/js";

const profiles = [
    {
        name: "Profile",
        path: "/dashboard/profile",
        icon: mdiAccountCircleOutline,
    },
    {
        name: "My Investments",
        path: "/dashboard/investments",
        icon: mdiCashLock,
    }
];

export default profiles;