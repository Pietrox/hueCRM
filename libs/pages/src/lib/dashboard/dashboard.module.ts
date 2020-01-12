import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ThemeModule} from '@huecrm/theme';
import {
	NbActionsModule,
	NbButtonModule,
	NbCardModule,
	NbIconModule,
	NbListModule,
	NbRadioModule,
	NbSelectModule,
	NbTabsetModule,
	NbUserModule,
} from '@nebular/theme';
import {NgxEchartsModule} from 'ngx-echarts';
import {ContactsComponent} from './contacts/contacts.component';
import {DashboardComponent} from './dashboard.component';
import {ElectricityChartComponent} from './electricity/electricity-chart/electricity-chart.component';
import {ElectricityComponent} from './electricity/electricity.component';
import {KittenComponent} from './kitten/kitten.component';
import {PlayerComponent} from './rooms/player/player.component';
import {RoomSelectorComponent} from './rooms/room-selector/room-selector.component';
import {RoomsComponent} from './rooms/rooms.component';
import {SecurityCamerasComponent} from './security-cameras/security-cameras.component';
import {SolarComponent} from './solar/solar.component';
import {StatusCardComponent} from './status-card/status-card.component';
import {TemperatureDraggerComponent} from './temperature/temperature-dragger/temperature-dragger.component';
import {TemperatureComponent} from './temperature/temperature.component';
import {TrafficChartComponent} from './traffic/traffic-chart.component';
import {TrafficComponent} from './traffic/traffic.component';
import {WeatherComponent} from './weather/weather.component';

@NgModule({
	imports: [
		FormsModule,
		ThemeModule,
		NbCardModule,
		NbUserModule,
		NbButtonModule,
		NbTabsetModule,
		NbActionsModule,
		NbRadioModule,
		NbSelectModule,
		NbListModule,
		NbIconModule,
		NbButtonModule,
		NgxEchartsModule,
	],
	declarations: [
		DashboardComponent,
		StatusCardComponent,
		TemperatureDraggerComponent,
		ContactsComponent,
		RoomSelectorComponent,
		TemperatureComponent,
		RoomsComponent,
		KittenComponent,
		SecurityCamerasComponent,
		ElectricityComponent,
		ElectricityChartComponent,
		WeatherComponent,
		PlayerComponent,
		SolarComponent,
		TrafficComponent,
		TrafficChartComponent,
	],
})
export class DashboardModule {
}
