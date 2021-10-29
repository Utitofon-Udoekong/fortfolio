const store = useStore();
const user = store.state.user.email;

const menus = [
    {
      name: "Dashboard",
      path: `/dashboard/${user}`,
    },
    {
      name: "Profile",
      path: `/dashboard/${user}/profile`,
    },
    {
      name: "Investments",
      path: `/dashboard/${user}/investments`,
    },
    {
      name: "Investment Plans",
      path: `/dashboard/${user}/plans`,
    },
    {
      name: "Deposit Funds",
      path: `/dashboard/${user}/deposit`,
    },
    {
      name: "Request Payout",
      path: `/dashboard/${user}/withdraw`,
    },
    {
      name: "Transactions",
      path: `/dashboard/${user}/transactions`,
    },
]

export default menus