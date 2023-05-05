package com.example.meramot_back.controllers.issueManagement;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;

@RestController
@RequestMapping("/issue")
public class PostController {

        @PostMapping("/create-post")
        public ResponseEntity<String> makePost(HttpServletRequest request) throws IOException {
            String requestBody = request.getReader().lines().reduce("", (accumulator, actual) -> accumulator + actual);
            System.out.println(requestBody);
            return new ResponseEntity<String>( "Post has been created", HttpStatus.CREATED);
        }
}
