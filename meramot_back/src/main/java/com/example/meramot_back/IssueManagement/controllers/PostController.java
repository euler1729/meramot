package com.example.meramot_back.IssueManagement.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PostController {
        @GetMapping("/hello")
        public String hello() {
            return "Hello World!";
        }
        @PostMapping("/create-post")
        public ResponseEntity<String> makePost() {
            return new ResponseEntity<String>( "Post has been created", HttpStatus.CREATED);
        }
}
