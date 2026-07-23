package com.jwtapplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cognizant.jwthandson.model.JwtResponse;
import com.cognizant.jwthandson.model.User;
import com.cognizant.jwthandson.util.JwtUtil;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/")
    public String home() {
        return "JWT Handson Application";
    }
@PostMapping("/authenticate")
public JwtResponse authenticate(@RequestBody User user) {

    System.out.println("Controller reached");

    String token = jwtUtil.generateToken(user.getUsername());

    return new JwtResponse(token);
}
}