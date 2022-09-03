#include <stdio.h>

#include "driver/gpio.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"

#define GPIO_LED 2

static uint8_t led_state = 0;

esp_err_t init_led(void);
esp_err_t blink_led(void);

void app_main() {
    init_led();

    while (1) {
        vTaskDelay(200 / portTICK_PERIOD_MS);
        blink_led();
        printf("Led level: %u\n", led_state);
    }
}

esp_err_t init_led(void) {
    gpio_reset_pin(GPIO_LED);
    gpio_set_direction(GPIO_LED, GPIO_MODE_OUTPUT);
    return ESP_OK;
}
esp_err_t blink_led(void) {
    led_state = !led_state;
    gpio_set_level(GPIO_LED, led_state);
    return ESP_OK;
}
