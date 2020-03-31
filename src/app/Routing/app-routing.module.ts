import { HomepageComponent } from "../homepage/homepage.component";
import { FormComponent } from "../form/form.component";
import { UserdataComponent } from "../userdata/userdata.component";
import { ValidatorComponent } from "../validator/validator.component";
import { LoginpageComponent } from "../loginpage/loginpage.component";
import { UserlistpageComponent } from "../userlistpage/userlistpage.component";
import { ChartsComponent } from "../charts/charts.component";


export const MainRoute = [
    {
        path: 'charts',
        component: ChartsComponent
    },
    {
        path: 'home',
        component: HomepageComponent
    },
    {
        path: 'product',
        component: UserlistpageComponent,
    },
    {
        path: 'product/:id',
        component: UserdataComponent
    },
    {
        path: '',
        redirectTo: '/charts',
        pathMatch: 'full'
    },



]

