package com.example.meramot_back.repositories;

import com.example.meramot_back.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    @Query("SELECT p FROM Post p WHERE p.post_id = ?1")
    Post findByPost_id(Long post_id);
}
