package com.example.meramot_back.controllers.userManagement;

import com.example.meramot_back.model.User;
import com.example.meramot_back.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.support.ScopeNotActiveException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final UserRepository userRepository;
    @Autowired
    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody Map<String, String >payload) throws IOException {
        String email = payload.get("email");
        String name = payload.get("name");
        String role = payload.get("role");
        String password = payload.get("password");
        String profile_pic = payload.get("photoURL");
        User user = userRepository.getReferenceByEmail(email);
        try{
            if (user == null) {
                user = new User(UUID.randomUUID(), email, name, role, password, profile_pic);
                userRepository.save(user);
                user.setPassword(null);
                return ResponseEntity.ok().body(user);
            }else if (!user.getPassword().equals(password)) {
                return ResponseEntity.badRequest().body(null);
            }else{
                user.setPassword(null);
                return ResponseEntity.ok().body(user);
            }
        }catch (ScopeNotActiveException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
