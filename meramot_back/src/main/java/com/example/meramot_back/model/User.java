package com.example.meramot_back.model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "userr")
public class User {
    @Id
    @Column(name = "uid", nullable = false, unique = true)
    private UUID uid;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "name")
    private String name;

    @Column(name = "role")
    private String role;

    public void setId(UUID id) {
        this.uid = id;
    }

    public UUID getId() {
        return uid;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }

    @Override
    public String toString() {
        return "User{" +
                "uid=" + uid +
                ", email='" + email + '\'' +
                ", name='" + name + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}
