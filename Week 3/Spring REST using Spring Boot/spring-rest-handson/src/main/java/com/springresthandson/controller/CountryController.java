package com.springresthandson.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.springresthandson.model.Country;

@RestController
public class CountryController {

    @Autowired
    private Country country;

    @GetMapping("/country")
    public Country getCountry() {
        return country;
    }
    
    @GetMapping("/country/{code}")
    public Country getCountry(@PathVariable String code) {

        if(code.equalsIgnoreCase("IN")) {
            return country;
        }

        return null;
    }
}