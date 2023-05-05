package com.example.meramot_back.controllers.userManagement;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @PostMapping("/login")
    public ResponseEntity<String> login(){
        System.out.println("Login successful");
        return ResponseEntity.ok("Login successful");
    }
}
