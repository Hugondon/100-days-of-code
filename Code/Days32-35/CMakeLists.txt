cmake_minimum_required(VERSION 3.16.0)
include($ENV{IDF_PATH}/tools/cmake/project.cmake)
project(WebProject)

target_add_binary_data(WebProject.elf "src/app.css" BINARY)
target_add_binary_data(WebProject.elf "src/app.js" BINARY)
target_add_binary_data(WebProject.elf "src/favicon.ico" BINARY)
target_add_binary_data(WebProject.elf "src/index.html" BINARY)
target_add_binary_data(WebProject.elf "src/jquery-3.3.1.min.js" BINARY)