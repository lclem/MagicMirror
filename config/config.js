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
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

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
			config: {
				location: "Warsaw",
				locationID: "756135", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "caba07b6871101211242b40c6edb3511"
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			//header: "Weather Forecast",
			config: {
				location: "Rome",
				locationID: "3169070", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "caba07b6871101211242b40c6edb3511"
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			//header: "Weather Forecast",
			config: {
				location: "Mattinata",
				locationID: "3173699", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "caba07b6871101211242b40c6edb3511"
			}
		},
		{
			module: "weatherforecast",
			position: "top_left",
			header: "Weather Forecast",
			config: {
				location: "Warsaw",
				locationID: "756135", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "caba07b6871101211242b40c6edb3511"
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

		{
			module: "MMM-GooglePhotos",
			//position: "fullscreen_below",
			position: "lower_third",

			config: {
				  albums: ["MagicMirror"], // Set your album name. like ["My wedding", "family share", "Travle to Paris"]
				  updateInterval: 1000 * 60 * 60 * 24, // minimum 10 seconds.
				  scanInterval: 1000 * 60 * 10,
				  sort: "random", // "old", "random"
				  uploadAlbum: null, // Only album created by `create_uploadable_album.js`.
				  condition: {
					  fromDate: null, // Or "2018-03", RFC ... format available
					  toDate: null, // Or "2019-12-25",
					  minWidth: null, // Or 400
					  maxWidth: null, // Or 8000
					  minHeight: null, // Or 400
					  maxHeight: null, // Or 8000
					  minWHRatio: null,
					  maxWHRatio: null,
					  // WHRatio = Width/Height ratio ( ==1 : Squared Photo,   < 1 : Portraited Photo, > 1 : Landscaped Photo)
				  },
				  showWidth: 850, // These values will be used for quality of downloaded photos to show. real size to show in your MagicMirror region is recommended.
				  showHeight: 650,
				  timeFormat: "relative", // "YYYY/MM/DD HH:mm", // Or `relative` can be used.
				  autoInfoPosition: false,
			}
		  },

		  {
			module: 'MMM-iFrame',
			position: 'middle_center',	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
					url: ["https://paveldogreat.github.io/WebGL-Fluid-Simulation/"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 10 * 365 * 24 * 60 * 60 * 1000, // rotate URLs every 10 years // 30 seconds
					width: "1280", // width of iframe
					height: "720", // height of iframe
					frameWidth: "1000" // width of embedded iframe, height is beeing calculated by aspect ratio of iframe
				}
			},

{
	module: 'MMM-Screencast',
	position: 'center', // This position is for a hidden <div /> and not the screencast window
	config: {
		position: 'center',
		height: 800,
		width: 1200,
	}
	},

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
	{
		module: 'MMM-SystemStats',
		position: 'bottom_left', // This can be any of the regions.
		classes: 'small dimmed', // Add your own styling. OPTIONAL.
		// header: 'System Stats', // Set the header text OPTIONAL
		config: {
			updateInterval: 100, // every 10 seconds
			align: 'right', // align labels
			//header: 'System Stats', // This is optional
			units: 'metric', // default, metric, imperial
			view: 'textAndIcon',
		},
	},
	{
        module: 'MMM-page-indicator',
        position: 'bottom_bar',
        config: {
            pages: 3,
        }
    },

	{
		module: 'MMM-SmartTouch',
		position: 'bottom_center',    // This can be any of the regions.(bottom-center Recommended)
		config: {
			// The config property is optional.
			}

	},
	// {
    //     module: 'MMM-flick-gestures'
    // },

	{
        module: 'MMM-pages',
        config: {
                modules:
                    [
						["clock", "currentweather", "MMM-GooglePhotos", "MMM-SystemStats"],
						["clock", "weatherforecast"],
						["MMM-iFrame"]
					],
                fixed: ["MMM-SmartTouch", "MMM-page-indicator"], // "MMM-OnScreenMenu"],

        }
    },
	// {
	// 	module: 'MMM-PIR-Sensor',
	// 	config: {
	// 		// See 'Configuration options' for more information.
	// 	}
	// },

]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
