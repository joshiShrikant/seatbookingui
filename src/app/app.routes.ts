import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Employee } from './pages/employee/employee';
import { Register } from './pages/register/register';
import { Seat } from './pages/seat/seat';

export const routes: Routes = [

    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path:"login",
        component: Login
    },
    {
        path:"register",
        component: Register
    },
    {
        path:"",
        component:Layout,
        children: [
            {
                path: "dashboard",
                component: Dashboard
            },
            {
                path:"employee",
                component: Employee
            },
             {
                path:"seat",
                component: Seat
            },

        ]
    }

];
