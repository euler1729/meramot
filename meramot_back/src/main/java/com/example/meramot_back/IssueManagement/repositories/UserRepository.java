package com.example.meramot_back.IssueManagement.repositories;

import com.example.meramot_back.IssueManagement.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
    List<User> findUsersByName(String name);
    User findUserEmail(String email);
    User findUserById(UUID id);
}
