// routes
import { ROUTES } from "@/constants/routers";
<<<<<<< HEAD
import EmployeeManage from "@/pages/Employee/pages/Manage";
import { Employee } from "@/pages/Employee/pages/List";
// pages
import Home from "@/pages/Home";
import Signin from "@/pages/SignIn";
import EmployeeAbsence from "@/pages/Employee/pages/Absence";
=======
import ChangePassword from "@/pages/ChangePassword/ChangePassword";
import ForgotPassword from "@/pages/ForgotPassword/ForgotPassword";
// pages
import Home from "@/pages/Home";
import Signin from "@/pages/SignIn/Signin";
import Signup from "@/pages/Signup/Signup";
>>>>>>> nghia_dev

/**
 * define main pages routes
 */
const appRoutes = [
  {
    path: ROUTES.HOME,
    exact: true,
    component: Home,
  },
  {
    path: ROUTES.SIGN_IN,
    exact: true,
    component: Signin,
  },
  {
<<<<<<< HEAD
    path: ROUTES.EMPLOYEE,
    exact: true,
    component: Employee,
  },
  {
    path: ROUTES.EMPLOYEE_CREATE,
    exact: true,
    component: EmployeeManage,
  },
  {
    path: ROUTES.EMPLOYEE_ABSENCE,
    exact: true,
    component: EmployeeAbsence,
=======
    path: ROUTES.SIGN_UP,
    exact: true,
    component: Signup,
  },
  {
    path: ROUTES.FORGOT_PASSWORD,
    exact: true,
    component: ForgotPassword,
  },
  {
    path: ROUTES.CHANGE_PASSWORD,
    exact: true,
    component: ChangePassword,
>>>>>>> nghia_dev
  },
];

export default appRoutes;
