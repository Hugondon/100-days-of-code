#include <stdio.h>

#include "esp_event.h"
#include "esp_system.h"
#include "esp_wifi.h"
#include "freertos/FreeRTOS.h"
#include "nvs_flash.h"
#include "rgb_led.h"
#include "wifi_app.h"

void app_main(void) {
    // Initialize NVS
    esp_err_t ret = nvs_flash_init();
    if (ret == ESP_ERR_NVS_NO_FREE_PAGES || ret == ESP_ERR_NVS_NEW_VERSION_FOUND) {
        ESP_ERROR_CHECK(nvs_flash_erase());
        ret = nvs_flash_init();
    }
    ESP_ERROR_CHECK(ret);

    // for (;;) {
    //     rgb_led_wifi_app_started();
    //     vTaskDelay(300 / portTICK_PERIOD_MS);
    //     rgb_led_http_server_started();
    //     vTaskDelay(300 / portTICK_PERIOD_MS);
    //     rgb_led_wifi_connected();
    //     vTaskDelay(300 / portTICK_PERIOD_MS);
    // }
    wifi_app_start();
}
