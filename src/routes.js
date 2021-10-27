import Home from "./Pages/Home"
import Report from "./Pages/Report"
import Settings from "./Pages/Settings"
import Login from "./Pages/Login"
import Payment from "./Pages/Payment"
import Offers from "./Pages/Offers"

var LayoutRoute = [
    {
        path: "/",
        exact: true,
        name: "Home",
        component: Home
    },
    {
        path: "/report",
        name: "Report",
        component: Report
    },
    {
        path: "/settings",
        name: "Settings",
        component: Settings
    },
    {
        path: "/payment",
        name: "Payment",
        component: Payment
    },
    {
        path: "/offers",
        name: "Offers",
        component: Offers
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
  

];

export default LayoutRoute