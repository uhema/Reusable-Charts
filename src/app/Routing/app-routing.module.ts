import { HomepageComponent } from "../homepage/homepage.component";
import { FormComponent } from "../form/form.component";
import { UserdataComponent } from "../userdata/userdata.component";
import { ValidatorComponent } from "../validator/validator.component";
import { LoginpageComponent } from "../loginpage/loginpage.component";
import { UserlistpageComponent } from "../userlistpage/userlistpage.component";
import { ChartsComponent } from "../charts/charts.component";
import { PiechartComponent } from "../piechart/piechart.component";
import { DoughnutChartComponent } from "../doughnut-chart/doughnut-chart.component";
import { RadarchartComponent } from "../radarchart/radarchart.component";
import { BarchartComponent } from "../barchart/barchart.component";
import { PolarChartComponent } from "../polar-chart/polar-chart.component";
import { CustomChatComponent } from "../custom-chat/custom-chat.component";
import { SedometerChartComponent } from "../sedometer-chart/sedometer-chart.component";
import { LinechartComponent } from "../linechart/linechart.component";
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
        path: 'pieCharts',
        component: PiechartComponent
    },
    {
        path: 'doughnutChart',
        component: DoughnutChartComponent
    },
    {
        path: 'radarChart',
        component: RadarchartComponent
    },
    {
        path: 'barChart',
        component: BarchartComponent
    },
    {
        path: 'polarChart',
        component: PolarChartComponent
    },
    {
        path: 'customChart',
        component: CustomChatComponent
    },
    {
        path: 'spedometerChart',
        component: SedometerChartComponent
    },
    {
        path: 'lineChart',
        component: LinechartComponent
    },
    {
        path: '',
        redirectTo: '/charts',
        pathMatch: 'full'
    },
]

