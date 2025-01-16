import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: "com.Radix.RadixMobile2",
	appName: "Cardinalstone Pension",
	loggingBehavior: 'none',
	webDir: 'www/browser',
	plugins: {
		CapacitorCookies: {
			enabled: false
		},
		SplashScreen: {
			launchShowDuration: 1500,
			launchAutoHide: true,
			launchFadeOutDuration: 500,
			splashFullScreen: true,
			splashImmersive: true,
			backgroundColor: '#ffffffff',
		},
		LocalNotifications: {
			smallIcon: 'ic_stat_icon_config_sample',
			iconColor: '#488AFF',
			sound: 'beep.wav'
		},
	},
	android: {
		minWebViewVersion: 55,
		allowMixedContent: true
	},
	server: {
		cleartext: true,
		androidScheme: 'https',
		iosScheme: 'capacitor'
	}
};

export default config;
