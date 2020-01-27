import {NbMenuItem} from '@nebular/theme';
import {environment} from '../../environments/environment';

export const MenuItems: NbMenuItem[] = [
	{
		title: 'Dashboard',
		icon: 'home-outline',
		link: environment.HOME_URL,
	},
	{
		title: 'Leads',
		icon: 'people-outline',
		link: environment.LEADS_URL
	},
	{
		title: 'Settings',
		icon: 'settings-2-outline',
		link: environment.SETTINGS_URL
	}
];

