import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: "com.Radix.RadixMobile2",
	appName: "Cardinalstone Pension",
	backgroundColor: "#ffffffff",
	loggingBehavior: "none",
	bundledWebRuntime: false,
	webDir: 'www',
	plugins: {
		CapacitorCookies: {
			enabled: false
		},
		SplashScreen: {
			launchShowDuration: 1500,
			launchAutoHide: false,
			launchFadeOutDuration: 500,
			backgroundColor: "#ffffffff",
			splashFullScreen: false,
			splashImmersive: false,
			layoutName: "launch_screen",
		},
		LocalNotifications: {
			smallIcon: 'ic_stat_icon_config_sample',
			iconColor: '#488AFF',
			sound: 'beep.wav'
		}
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
