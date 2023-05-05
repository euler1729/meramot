package com.example.meramot_back.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "categories")
public class Categories {
    @Id// ID of the post
    @Column(name = "post_id", nullable = false)
    private Long post_id;
    // Tag of the post
    @Column(name = "category")
    private String category;

    public Long getUid() {
        return post_id;
    }

    public void setUid(Long post_id) {
        this.post_id = post_id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "Categories{" + "post_id=" + post_id + ", category=" + category + '}';
    }
}
