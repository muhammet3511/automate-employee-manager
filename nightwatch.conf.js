const resourcePath = 'C:\\Users\\muhammet\\Desktop\\devmtn\\testing-resources\\'

module.exports = {
    "src_folders" : "nightwatch/tests",

    "selenium": {
        "start_process": true,
        "server_path": resourcePath + "selenium-server-standalone-3.7.1.jar",
        "log_path": "",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": resourcePath + "chromedriver.exe"
                }
    },

    "test_settings": {
        "default": {
            "launch_url": "http://localhost",
            "selenium_port": 4444,
            "selenium_host": "localhost",
            "silent": true,
            "screenshots": {
                "enabled": false,
                "path": ""
            },
            "desiredCapabilities": {
                "browserName": "chrome"
            }
        }
    }

}