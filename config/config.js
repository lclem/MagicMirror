/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.0.1/120", "192.168.0.1/24"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],
	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true
	// httpsPrivateKey: "ssl/key.pem", 	// HTTPS private key path, only require when useHttps is true
	// httpsCertificate: "ssl/cert.pem", 	// HTTPS Certificate path, only require when useHttps is true
	// tls: true,

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR", "DEBUG"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		// {
		// 	module: "calendar",
		// 	header: "US Holidays",
		// 	position: "top_left",
		// 	config: {
		// 		calendars: [
		// 			{
		// 				symbol: "calendar-check",
		// 				url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
		// 		]
		// 	}
		// },
		//{
		//	module: "compliments",
		//	position: "lower_third"
		//},
		{
			module: "currentweather",
			position: "top_right",
			header: "Current Weather",
			config: {
				type: "current",
				location: "Warsaw,Poland",
				locationID: "", // "756135", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "caba07b6871101211242b40c6edb3511"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				type: "forecast",
				location: "Warsaw,Poland",
				locationID: "", // "756135", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "caba07b6871101211242b40c6edb3511"
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				type: "current",
				location: "Rome,Italy",
				locationID: "3169070", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "caba07b6871101211242b40c6edb3511"
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				type: "current",
				location: "Mattinata,Italy",
				locationID: "3173699", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "caba07b6871101211242b40c6edb3511"
			}
		},
		{
			module: 'MMM-MQTT',
			position: 'top_right',
			header: 'LIVING ROOM',
			config: {
			  logging: false,
			  useWildcards: false,
			  mqttServers: [
				{
				  address: '192.168.0.14',  // Server address or IP address
				  port: '1883',          // Port number if other than default
				  user: 'mqtt_user2',          // Leave out for no user
				  password: 'mqtt_password',      // Leave out for no password
				  subscriptions: [
					{
						topic: 'living_room_temperature', // Topic to look for
						label: 'temperature', // Displayed in front of value
						suffix: '°C',         // Displayed after the value
						decimals: 1,          // Round numbers to this number of decimals
						sortOrder: 10,        // Can be used to sort entries in the same table
						maxAgeSeconds: 60,    // Reduce intensity if value is older
						broadcast: true,      // Broadcast messages to other modules
					},
					{
						topic: 'living_room_humidity', // Topic to look for
						label: 'humidity', // Displayed in front of value
						suffix: '%',         // Displayed after the value
						decimals: 1,          // Round numbers to this number of decimals
						sortOrder: 10,        // Can be used to sort entries in the same table
						maxAgeSeconds: 60,    // Reduce intensity if value is older
						broadcast: true,      // Broadcast messages to other modules
					},
				  ]
				}
			  ],
			}
		},
		{
			module: 'MMM-MQTT',
			position: 'top_right',
			header: 'TERRACE GREENHOUSE',
			config: {
			  logging: false,
			  useWildcards: false,
			  mqttServers: [
				{
				  address: '192.168.0.14',  // Server address or IP address
				  port: '1883',          // Port number if other than default
				  // ca: '/path/to/ca/cert.crt', // Path to trusted CA certificate file (optional)
				  // clientId: 'mirror',     // Custom MQTT client ID (optional)
				  user: 'mqtt_user2',          // Leave out for no user
				  password: 'mqtt_password',      // Leave out for no password
				  subscriptions: [
					{
					  topic: 'solar_temperature_sensor_temperature', // Topic to look for
					  label: 'temperature', // Displayed in front of value
					  suffix: '°C',         // Displayed after the value
					  decimals: 1,          // Round numbers to this number of decimals
					  sortOrder: 10,        // Can be used to sort entries in the same table
					  maxAgeSeconds: 600,    // Reduce intensity if value is older
					  broadcast: true,      // Broadcast messages to other modules
					//   colors: [             // Value dependent colors
					// 	{ upTo: 0, value: "blue", suffix: "blue", label: "blue"},
					// 	{ upTo: 10, value: "yellow", suffix: "yellow", label: "yellow"},
					// 	{ upTo: 20, value: "green", suffix: "green", label: "green"},
					// 	{ upTo: 100, value: "red", suffix: "red", label: "red"}, // The last one is used for higher values too
					//   ],
					},
					{
						topic: 'solar_temperature_sensor_humidity', // Topic to look for
						label: 'humidity', // Displayed in front of value
						suffix: '%',         // Displayed after the value
						decimals: 1,          // Round numbers to this number of decimals
						sortOrder: 10,        // Can be used to sort entries in the same table
						maxAgeSeconds: 1200,    // Reduce intensity if value is older
						broadcast: true,      // Broadcast messages to other modules
					  },
					  {
						topic: 'solar_temperature_sensor_voltage', // Topic to look for
						label: 'battery', // Displayed in front of value
						suffix: 'mV',         // Displayed after the value
						decimals: 0,          // Round numbers to this number of decimals
						sortOrder: 10,        // Can be used to sort entries in the same table
						maxAgeSeconds: 1200,    // Reduce intensity if value is older
						broadcast: true,      // Broadcast messages to other modules
						// colors: [             // Value dependent colors
						// 	{ upTo: 4000, value: "red", suffix: "red", label: "red"},
						// 	{ upTo: 5000, value: "yellow", suffix: "yellow", label: "yellow"},
						// 	{ upTo: 10000, value: "green", suffix: "green", label: "green"},
						// ],
					  },
					  {
						topic: 'solar_temperature_sensor_voltage',
						maxAgeSeconds: -1,    // display age instead
					  },
				  ]
				}
			  ],
			}
		},
		{
			module: 'MMM-MQTT',
			position: 'top_right',
			header: 'GREENHOUSE',
			config: {
			  logging: false,
			  useWildcards: false,
			  mqttServers: [
				{
				  address: '192.168.0.14',  // Server address or IP address
				  port: '1883',          // Port number if other than default
				  user: 'mqtt_user2',          // Leave out for no user
				  password: 'mqtt_password',      // Leave out for no password
				  subscriptions: [
					{
					  topic: 'v3/remote-solar-station@ttn/devices/eui-0004a30b001b2a9b/up', // Topic to look for
					  jsonpointer: '/uplink_message/decoded_payload/temperature',
					  label: 'temperature',
					  suffix: '°C',         // Displayed after the value
					  decimals: 1,          // Round numbers to this number of decimals
					  sortOrder: 10,        // Can be used to sort entries in the same table
					  maxAgeSeconds: 1200,    // Reduce intensity if value is older
					  broadcast: true,      // Broadcast messages to other modules
					},
					{
						topic: 'v3/remote-solar-station@ttn/devices/eui-0004a30b001b2a9b/up', // Topic to look for
						jsonpointer: '/uplink_message/decoded_payload/humidity',
						label: 'humidity', // Displayed in front of value
						suffix: '%',         // Displayed after the value
						decimals: 1,          // Round numbers to this number of decimals
						sortOrder: 10,        // Can be used to sort entries in the same table
						maxAgeSeconds: 1200,    // Reduce intensity if value is older
						broadcast: true,      // Broadcast messages to other modules
					  },
					  {
						topic: 'v3/remote-solar-station@ttn/devices/eui-0004a30b001b2a9b/up', // Topic to look for
						jsonpointer: '/uplink_message/decoded_payload/battery',
						label: 'battery', // Displayed in front of value
						suffix: 'mV',         // Displayed after the value
						decimals: 0,          // Round numbers to this number of decimals
						sortOrder: 10,        // Can be used to sort entries in the same table
						maxAgeSeconds: 1200,    // Reduce intensity if value is older
						broadcast: true,      // Broadcast messages to other modules
					  },
					  {
						topic: 'dzialka_alarm', // Topic to look for
						jsonpointer: '/status_str',
						label: 'altana', // Displayed in front of value
						maxAgeSeconds: 1200,    // Reduce intensity if value is older
						broadcast: true,      // Broadcast messages to other modules
					  },
					  {
						topic: 'v3/remote-solar-station@ttn/devices/eui-0004a30b001b2a9b/up',
						jsonpointer: '/uplink_message/decoded_payload/battery',
						maxAgeSeconds: -1,    // show age when this is -1
					  },

				  ]
				}
			  ],
			}
		},
		{
			module: 'MMM-MQTT',
			position: 'top_right',
			header: 'Muratico',
			config: {
			  logging: false,
			  useWildcards: false,
			  mqttServers: [
				{
				  address: '192.168.0.14',  // Server address or IP address
				  port: '1883',          // Port number if other than default
				  user: 'mqtt_user2',          // Leave out for no user
				  password: 'mqtt_password',      // Leave out for no password
				  subscriptions: [
					{
						topic: 'zerotier_muratico_ping',
						label: 'online',
						// jsonpointer: '/water_level',
						maxAgeSeconds: 1200,    // Reduce intensity if value is older
						broadcast: true,      // Broadcast messages to other modules
					},
					{
						topic: 'water-tank-sensor', // Topic to look for
						jsonpointer: '/water_level',
						label: 'water',
						suffix: '%',         // Displayed after the value
						maxAgeSeconds: 1200,    // Reduce intensity if value is older
						broadcast: true,      // Broadcast messages to other modules
					},
					{
						topic: 'water-tank-sensor', // Topic to look for
						jsonpointer: '/voltage',
						label: 'battery', // Displayed in front of value
						suffix: 'mV',         // Displayed after the value
						maxAgeSeconds: 1200,    // Reduce intensity if value is older
						broadcast: true,      // Broadcast messages to other modules
					  },
					  {
						topic: 'water-tank-sensor',
						jsonpointer: '/water_level',
						maxAgeSeconds: -1,    // show age when this is -1
					  }
				  ]
				}
			  ],
			}
		},
		{
			module: 'MMM-MQTT',
			position: 'bottom_left',
			header: 'KORO',
			config: {
			  logging: false,
			  useWildcards: false,
			  mqttServers: [
				{
					address: '192.168.0.14',  // Server address or IP address
					port: '1883',          // Port number if other than default
					user: 'mqtt_user2',          // Leave out for no user
					password: 'mqtt_password',      // Leave out for no password
					subscriptions: [
						{
							topic: 'status_windows', // Topic to look for
							label: '#windows',
							maxAgeSeconds: 1200,    // Reduce intensity if value is older
							broadcast: true,      // Broadcast messages to other modules
							colors: [             // Value dependent colors
								{ upTo: 1, value: "white", label: "white", suffix: "white" },
								{ upTo: 100, label: "red" , label: "red", suffix: "red" }
							],
						}
					]
				}
			  ],
			}
		},
		// {
		// 	module: "newsfeed",
		// 	position: "bottom_bar",
		// 	config: {
		// 		feeds: [
		// 			{
		// 				title: "New York Times",
		// 				url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
		// 			}
		// 		],
		// 		showSourceTitle: true,
		// 		showPublishDate: true,
		// 		broadcastNewsFeeds: true,
		// 		broadcastNewsUpdates: true
		// 	}
		// },

// 		{
// 			module: "MMM-GooglePhotos",
// 			//position: "fullscreen_below",
// 			position: "lower_third",
// //			position: "middle_center",
// 			config: {
// 				  albums: ["MagicMirror"], // Set your album name. like ["My wedding", "family share", "Travle to Paris"]
// 				  updateInterval: 1000 * 60 * 60 * 24, // minimum 10 seconds.
// 				  scanInterval: 1000 * 60 * 10,
// 				  sort: "random", // "old", "random"
// 				  uploadAlbum: null, // Only album created by `create_uploadable_album.js`.
// 				  condition: {
// 					  fromDate: null, // Or "2018-03", RFC ... format available
// 					  toDate: null, // Or "2019-12-25",
// 					  minWidth: null, // Or 400
// 					  maxWidth: null, // Or 8000
// 					  minHeight: null, // Or 400
// 					  maxHeight: null, // Or 8000
// 					  minWHRatio: null,
// 					  maxWHRatio: null,
// 					  // WHRatio = Width/Height ratio ( ==1 : Squared Photo,   < 1 : Portraited Photo, > 1 : Landscaped Photo)
// 				  },
// 				  showWidth: 850, // These values will be used for quality of downloaded photos to show. real size to show in your MagicMirror region is recommended.
// 				  showHeight: 650,
// 				  timeFormat: "relative", // "YYYY/MM/DD HH:mm", // Or `relative` can be used.
// 				  autoInfoPosition: false,
// 			}
// 		  },
	// {
	// 	module: "octomirror-module",
	// 	position: "bottom_right",
	// 	config: {
	// 		printerName: "Artillery Genius",
	// 		updateInterval: 10,
	// 		retryDelay: 250,
	// 		showStream: false,
	// 		showTemps: true,
	// 		showDetailsWhenOffline: false,
	// 		interactive: false,
	// 		debugMode: true,
	// 		url: "http://192.168.0.16",
	// 		api_key: "CA0E6ED1EB3F446897A9F4EDBFFA8D20"
	// 	}
	// },
	// {
	// 	module: 'MMM-CurrencyExchange',
	// 	position: 'bottom_left',
	// 	config: {
	// 	  access_key: 'asnSWoVVKn9YVo9FZzJ9ER9tAcV4aw3T',
	// 	  base: 'PLN',
	// 	  symbols: ['EUR', 'USD']
	// 	}
	// },
	// { // doesn't work
	// 	module: 'MMM-LICE',
	// 	position: 'middle_left',                 // Best in left, center, or right regions
	// 	config: { 
	// 		accessKey: "asnSWoVVKn9YVo9FZzJ9ER9tAcV4aw3T", // Free account & API Access Key at currencylayer.com
	// 		source: "USD",                    // USD unless you upgrade from free account
	// 		symbols: "EUR",       // Currency symbols
	// 		useHeader: false,                 
	// 		header: "Show me the money",
	// 		maxWidth: "300px",
	// 	}
	// },
	{
	 	module: 'MMM-SmartWebDisplay',
	 	position: 'top_center',	// This can be any of the regions.
	 	config: {
	 		// See 'Configuration options' for more information.
	 		logDebug: true, //set to true to get detailed debug logs. To see them : "Ctrl+Shift+i"
	 		height:"1520px", //hauteur du cadre en pixel ou %
	 		width:"1050px", //largeur
			updateInterval: 0, //in min. Set it to 0 for no refresh (for videos)
			NextURLInterval: 0, //in min, set it to 0 not to have automatic URL change. If only 1 URL given, it will be updated
			displayLastUpdate: false, //to display the last update of the URL
			// displayLastUpdateFormat: 'ddd - HH:mm:ss', //format of the date and time to display
			url: ["http://192.168.0.56:8096/"], //source of the URL to be displayed
			scrolling: "yes", // allow scrolling or not. html 4 only
			// shutoffDelay: 0 //delay in miliseconds to video shut-off while using together with MMM-PIR-Sensor 
	 		}
	},
// 	{
// 		module: 'MMM-SmartWebDisplay2',
// 		position: 'top_center',	// This can be any of the regions.
// 		config: {
// 			logDebug: true, //set to true to get detailed debug logs. To see them : "Ctrl+Shift+i"
// 			height:"1520px", //hauteur du cadre en pixel ou %
// 			width:"1050px", //largeur
// 			updateInterval: 0, //in min. Set it to 0 for no refresh (for videos)
// 			NextURLInterval: 0, //in min, set it to 0 not to have automatic URL change. If only 1 URL given, it will be updated
// 			displayLastUpdate: false, //to display the last update of the URL
// 			url: ["http://192.168.0.14:8123/"], //source of the URL to be displayed
// 			scrolling: "yes", // allow scrolling or not. html 4 only
// 			}
//    },
	{
		module: 'MMM-iFrame',
		position: 'middle_center',	// This can be any of the regions.
		config: {
				url: ["http://192.168.0.14:8123/"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
				updateInterval: 10 * 365 * 24 * 60 * 60 * 1000, // rotate URLs every 10 years // 30 seconds
				// 60 * 60 * 1000, // each hour
				width: "1140", // width of iframe
				height: "1340", // height of iframe
				frameWidth: "1000" // width of embedded iframe, height is beeing calculated by aspect ratio of iframe
			}
	},

	// {
	// 	module: 'MMM-Screencast',
	// 	position: 'center', // This position is for a hidden <div /> and not the screencast window
	// 	config: {
	// 		position: 'center',
	// 		height: 800,
	// 		width: 1200,
	// 	}
	// },

	// {
	// 	module: 'MMM-OnScreenMenu',
	// 	position: 'bottom_right',
	// 	/* Valid positions: 'top_right', 'top_left', 'bottom_right', 'bottom_left' */
	// 	config: {
	// 		touchMode: true,

	// 	}
	// },


	// {
	// 	module: "MMM-Touch",
	// 	position: "top_right",
	// 	gestureCommands: {
	// 		"defaultino": {
	// 		  "TAP_1": (commander) => {
	// 			commander.sendNotification("SHOW_ALERT", {
	// 			  title: "TOUCH Test.",
	// 			  timer: 3000,
	// 			})
	// 		  },
	// 		  "PRESS_1": (commander) => {
	// 			commander.getModules().forEach((m)=>{m.hide()})
	// 			commander.setMode("hidden")
	// 		  }
	// 		},
	// 		"hidden": {
	// 		  "PRESS_1": (commander) => {
	// 			commander.getModules().forEach((m)=>{m.show()})
	// 			commander.setMode("default")
	// 		  }
	// 		}
	// 	  },
	//   },

	// {
	// 	module: 'MMM-SystemStats',
	// 	position: 'bottom_left', // This can be any of the regions.
	// 	classes: 'small dimmed', // Add your own styling. OPTIONAL.
	// 	// header: 'System Stats', // Set the header text OPTIONAL
	// 	config: {
	// 		updateInterval: 100, // every 10 seconds
	// 		align: 'right', // align labels
	// 		//header: 'System Stats', // This is optional
	// 		units: 'metric', // default, metric, imperial
	// 		view: 'textAndIcon',
	// 	},
	// },

	{
        module: 'MMM-page-indicator',
        position: 'bottom_bar',
        config: {
            pages: 2,
        }
    },

	{
		module: 'MMM-SmartTouch',
		position: 'bottom_center',    // This can be any of the regions.(bottom-center Recommended)
		config: {
			// The config property is optional.
			}

	},
	{
		module: 'MMM-Remote-Control',
		// uncomment the following line to show the URL of the remote control on the mirror
		position: 'bottom_center',
		// you can hide this module afterwards from the remote control itself
		config: {
			customCommand: {},  // Optional, See "Using Custom Commands" below
			showModuleApiMenu: true, // Optional, Enable the Module Controls menu
			secureEndpoints: true, // Optional, See API/README.md
			// uncomment any of the lines below if you're gonna use it
			// customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
			// apiKey: "", // Optional, See API/README.md for details
			// classes: {} // Optional, See "Custom Classes" below
		}
	},
// 	{
// 		module: 'MMM-Buttons',
// 		config: {
// 			buttons: [
// 				{
// 					pin: 22,
// 					name: "monitor_control",
// 					longPress: {
// 						notification: "PAGE_INCREMENT",
// //						payload: 2
// 					},
// 					// shortPress: {
// 					// 	notification: "PAGE_INCREMENT",
// 					// }
// 				}
// 			]
// 		}
// 	},
	// {
    //     module: 'MMM-flick-gestures'
    // },

	// {
	// 	module: 'MMM-PIR-Sensor',
	// 	position: "lower_third",
	// 	config: {
	// 		sensorPin: 22,
	// 		powerSaving: false,
	// 		presenceIndicator: "fa-eye", // Customizing the indicator
	// 		presenceOffIndicator: "fa-eye", // Customizing the indicator
	// 		presenceIndicatorColor: "#f51d16", // Customizing the indicator
	// 		presenceOffIndicatorColor: "#2b271c" // Customizing the indicator
	// 	}
	// },

	// {
	// 	module: 'MMM-PIR',
	// 	position: "lower_third",
	// 	config: {
	// 		sensorPin: 22,
	// 		delay: 10000,
	// 		turnOffDisplay: false,
	// 		showCountdown: false,
	// 		callbackScripts: ["callback.py"]
	// 	}
	// },
	{
		module: 'MMM-HomeAssistantDisplay',
		position: 'top_right',
		config: {
			host: "yossarian.ddns.net",
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI5Yzg2NTlmZmE5MzE0YTI4YTcwOWVkMmJkOGY1MmNlYSIsImlhdCI6MTY5MTM4ODIwOCwiZXhwIjoyMDA2NzQ4MjA4fQ.5hK0HFupGgduBNnGckIrGF_DoIWL2vxHeZIlnyZot4s",
			port: 8123,
			useTLS: true,
			title: "homeassistant",
			debuglogging: true,
			useModuleTigger: false,
//			moduleTriggerTemplate: `{{ True }}`,
//			moduleTriggerEntities: [],
			class: "HAvalues",
			sections: [{
//				triggerEntities: [
//					"binary_sensor.put_recycle_out",
//					"binary_sensor.put_trash_out"
//				],
				displayTemplate: `
					<i class='mdi mdi-trash-can'></i>
					<i class='mdi mdi-recycle'></i>
					`
			}]
		},
	},
	{
        module: 'MMM-NetworkScanner',
        position: 'top_right', 
        config: {
            devices: [
                    // { ipAddress: "github.com", name: "Github", icon: "globe"},
                    // { macAddress: "1a:1b:1c:1a:1b:1c", name: "Server", icon: "server"},
                    // { macAddress: "2a:2b:2c:2a:2b:2c", name: "Desktop", icon: "desktop"},
                    { ipAddress: "192.168.0.209", name: "Laptop", icon: "laptop"},
                    // { macAddress: "4a:4b:4c:4a:4b:4c", name: "Mobile", icon: "mobile"},
                ],
            showUnknown: false,
            showOffline: true,
            keepAlive: 300,
            updateInterval: 5
        }        
    },
	{
        module: 'MMM-pages',
        config: {
                modules:
                    [
						[
							"clock",
							"currentweather",
							"weatherforecast",
							"MMM-MQTT",
							"MMM-Remote-Control",
							// "MMM-NetworkScanner",
							// "MMM-HomeAssistantDisplay",
							// "MMM-iFrame"
							/* "MMM-PIR-Sensor", "MMM-GooglePhotos", */
							// "MMM-SystemStats",
							// 'MMM-CurrencyExchange',
							// 'MMM-LICE', // doen't work
							// "octomirror-module"
						],
						[ "MMM-iFrame" ],
						[ "MMM-SmartWebDisplay" ],
						[ "MMM-Remote-Control" ],
						// [ "MMM-SmartWebDisplay2" ]
						//["clock", "weatherforecast"]
					],
                fixed: [/* "MMM-SmartTouch", */ "MMM-page-indicator",  /* "MMM-PIR", */ /* "MMM-Buttons", */ ], // "MMM-OnScreenMenu"],

        }
    },

]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}