import {
  mdiAlphaDBox,
  mdiAccountCircleOutline,
  mdiCashLock,
  mdiCashPlus,
  mdiCartPlus,
  mdiCashMinus,
  mdiCellphoneWireless,
} from "@mdi/js";

const menus = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: mdiAlphaDBox,
  },
  {
    name: "Profile",
    path: "/dashboard/profile",
    icon: mdiAccountCircleOutline,
  },
  {
    name: "My Investment",
    path: "/dashboard/investments",
    icon: mdiCashLock,
  },
  {
    name: "Investment Plans",
    path: "/dashboard/plans",
    icon: mdiCartPlus,
  },
  {
    name: "Deposit Funds",
    path: "/dashboard/deposit",
    icon: mdiCashPlus,
  },
  {
    name: "Request Payout",
    path: "/dashboard/withdraw",
    icon: mdiCashMinus,
  },
  {
    name: "Transactions",
    path: "/dashboard/transactions",
    icon: mdiCellphoneWireless,
  },
];

export default menus