/**
* Creates the app info for this installed app.
*/
function createConfigInitializeSetting() {
  return {
    name: 'Weather bulb color',
    description: 'Bulb color by current temp',
    id: 'app',
    firstPageId: '1'
  }
}

/**
* Creates the configuration page for end user to configure this installation.
* @param pageId name of page to send to user
* @param currentConfig the values of the currently set configurations by the user for the settings
*/
function createConfigPage(pageId, currentConfig) {
  if (pageId !== '1') {
    throw new Error(`Unsupported page name: ${pageId}`);
  }

  return {
    pageId: '1',
    name: 'Bulb color by temperature',
    nextPageId: null,
    previousPageId: null,
    complete: true,
    sections: [
      {
        name: 'For the temperature at this zip code',
        settings: [
          {
            id: 'area',
            name: 'Which Area',
            description: 'Select Area to monitor',
            type: 'ENUM',
            required: true,
            multiple: false,
            options: [
              {
                "id": "Ang Mo Kio",
                "name": "Ang Mo Kio"
              },
              {
                "id": "Bedok",
                "name": "Bedok"
              },
              {
                "id": "Bishan",
                "name": "Bishan"
              },
              {
                "id": "Boon Lay",
                "name": "Boon Lay"
              },
              {
                "id": "Bukit Batok",
                "name": "Bukit Batok"
              },
              {
                "id": "Bukit Merah",
                "name": "Bukit Merah"
              },
              {
                "id": "Bukit Panjang",
                "name": "Bukit Panjang"
              },
              {
                "id": "Bukit Timah",
                "name": "Bukit Timah"
              },
              {
                "id": "Central Water Catchment",
                "name": "Central Water Catchment"
              },
              {
                "id": "Changi",
                "name": "Changi"
              },
              {
                "id": "Choa Chu Kang",
                "name": "Choa Chu Kang"
              },
              {
                "id": "Clementi",
                "name": "Clementi"
              },
              {
                "id": "City",
                "name": "City"
              },
              {
                "id": "Geylang",
                "name": "Geylang"
              },
              {
                "id": "Hougang",
                "name": "Hougang"
              },
              {
                "id": "Jalan Bahar",
                "name": "Jalan Bahar"
              },
              {
                "id": "Jurong East",
                "name": "Jurong East"
              },
              {
                "id": "Jurong Island",
                "name": "Jurong Island"
              },
              {
                "id": "Jurong West",
                "name": "Jurong West"
              },
              {
                "id": "Kallang",
                "name": "Kallang"
              },
              {
                "id": "Lim Chu Kang",
                "name": "Lim Chu Kang"
              },
              {
                "id": "Mandai",
                "name": "Mandai"
              },
              {
                "id": "Marine Parade",
                "name": "Marine Parade"
              },
              {
                "id": "Novena",
                "name": "Novena"
              },
              {
                "id": "Pasir Ris",
                "name": "Pasir Ris"
              },
              {
                "id": "Paya Lebar",
                "name": "Paya Lebar"
              },
              {
                "id": "Pioneer",
                "name": "Pioneer"
              },
              {
                "id": "Pulau Tekong",
                "name": "Pulau Tekong"
              },
              {
                "id": "Pulau Ubin",
                "name": "Pulau Ubin"
              },
              {
                "id": "Punggol",
                "name": "Punggol"
              },
              {
                "id": "Queenstown",
                "name": "Queenstown"
              },
              {
                "id": "Seletar",
                "name": "Seletar"
              },
              {
                "id": "Sembawang",
                "name": "Sembawang"
              },
              {
                "id": "Sengkang",
                "name": "Sengkang"
              },
              {
                "id": "Sentosa",
                "name": "Sentosa"
              },
              {
                "id": "Serangoon",
                "name": "Serangoon"
              },
              {
                "id": "Southern Islands",
                "name": "Southern Islands"
              },
              {
                "id": "Sungei Kadut",
                "name": "Sungei Kadut"
              },
              {
                "id": "Tampines",
                "name": "Tampines"
              },
              {
                "id": "Tanglin",
                "name": "Tanglin"
              },
              {
                "id": "Tengah",
                "name": "Tengah"
              },
              {
                "id": "Toa Payoh",
                "name": "Toa Payoh"
              },
              {
                "id": "Tuas",
                "name": "Tuas"
              },
              {
                "id": "Western Islands",
                "name": "Western Islands"
              },
              {
                "id": "Western Water Catchment",
                "name": "Western Water Catchment"
              },
              {
                "id": "Woodlands",
                "name": "Woodlands"
              },
              {
                "id": "Yishun",
                "name": "Yishun"
              }
            ]
          },
          {
            id: "forecastInterval",
            name: "How many hours in the future to check?",
            description: "Tap to set",
            type: "ENUM",
            required: true,
            multiple: false,
            options: [
              {
                id: "2-hour-weather-forecast",
                name: "2 Hours"
              },
              {
                id: "24-hour-weather-forecast",
                name: "24 Hours"
              },
              {
                id: "4-day-weather-forecast",
                name: "4 day"
              }
            ]
          },
          {
            id: "scheduleInterval",
            name: "How often to check forecast?",
            description: "Tap to set",
            type: "ENUM",
            required: true,
            multiple: false,
            options: [
              {
                id: "schedule-interval-15-minutes",
                name: "15 Minutes"
              },
              {
                id: "schedule-interval-30-minutes",
                name: "30 Minutes"
              },
              {
                id: "schedule-interval-45-minutes",
                name: "45 Minutes"
              },
              {
                id: "schedule-interval-60-minutes",
                name: "60 Minutes"
              }
            ]
          }
        ]
      },
      {
        name: 'Set the color of this light',
        settings: [
          {
            id: 'colorLight', // ID of this field
            name: 'Which color light?',
            description: 'Tap to set',
            type: 'DEVICE',
            required: true,
            multiple: false,
            capabilities: ['colorControl', 'switch', 'switchLevel'],
            permissions: ['r', 'x']
          }
        ]
      }
    ]
  };
}

module.exports = {
  /**
  * Creates the configuration required to install this app.
  * @param event - the event object.
  */
  handle: function(event) {
    if (!event.config) {
      throw new Error('No config section set in request.');
    }
    let config = {};
    const phase = event.phase;
    const pageId = event.pageId;
    const settings = event.config;
    switch (phase) {
      case 'INITIALIZE':
        config.initialize = createConfigInitializeSetting();
        break;
      case 'PAGE':
        config.page = createConfigPage(pageId, settings);
        break;
      default:
        throw new Error(`Unsupported config phase: ${phase}`);
        break;
    }
    return config;
  },

  /**
  * Gets the number of forecast chunks to retrieve from the weather API
  * @param intervalSetting - the selected interval from configuration
  * @return chunks - the number of forecast chunks to retrieve.
  */
  getForecastChunks: function(intervalSetting) {
    let chunks = null;
    switch(intervalSetting) {
      case 'forecast-hours-3': {
        chunks = 1;
        break;
      }
      case 'forecast-hours-6': {
        chunks = 2;
        break;
      }
      case 'forecast-hours-9': {
        chunks = 3;
        break;
      }
      case 'forecast-hours-12': {
        chunks = 4;
        break;
      }
      default: {
        chunks = 4;
        break;
      }
    }
    return chunks;
  },

  /**
  * Gets the number of minutes to check the forecast
  * @param selectedOption - the selected schedule interval from configuration
  * @return interval - the number of minutes for a scheduled execution
  */
  getScheduleInterval(selectedOption) {
    let interval = null;
    switch(selectedOption) {
      case 'schedule-interval-15-minutes': {
        interval = 15;
        break;
      }
      case 'schedule-interval-30-minutes': {
        interval = 30;
        break;
      }
      case 'schedule-interval-45-minutes': {
        interval = 45;
        break;
      }
      case 'schedule-interval-60-minutes': {
        interval = 60;
        break;
      }
      default: {
        interval = 60;
        break;
      }
    }
    return interval;
  }
};
