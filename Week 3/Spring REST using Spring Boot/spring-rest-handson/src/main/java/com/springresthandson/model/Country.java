package com.springresthandson.model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Country {

    private static final Logger LOGGER = LoggerFactory.getLogger(Country.class);

    private String code;
    private String name;

    public Country() {
        LOGGER.debug("Inside Country Constructor.");
    }

    // Getters and Setters ...

    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }

    // Temporary main method for standalone execution
    public static void main(String[] args) {
        Country country = new Country();
        country.setCode("IN");
        country.setName("India");
        LOGGER.debug("Created country: {}", country);
    }
}