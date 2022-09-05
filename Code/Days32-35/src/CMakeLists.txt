# This file was automatically generated for projects
# without default 'CMakeLists.txt' file.
# FILE(GLOB_RECURSE app_sources ${CMAKE_SOURCE_DIR}/src/*.*)
# # idf_component_register(SRCS ${app_sources})
idf_component_register(SRCS main.c rgb_led.c wifi_app.c http_server.c
						INCLUDE_DIRS "."
						EMBED_FILES app.css app.js favicon.ico index.html jquery-3.3.1.min.js)
