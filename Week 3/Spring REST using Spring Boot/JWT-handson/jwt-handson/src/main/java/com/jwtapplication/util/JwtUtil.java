package com.cognizant.jwthandson.util;

import java.util.Date;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {


    private static final String SECRET_KEY =
"abcdefghijklmnopqrstuvwxyz123456";
    public String generateToken(String username) {

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
.signWith(
    Keys.hmacShaKeyFor(SECRET_KEY.getBytes()),
    SignatureAlgorithm.HS256
)                .compact();
    }
}


