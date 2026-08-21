package com.filmgallery.Backend.repository;

import com.filmgallery.Backend.entity.MovieProgress;
import com.filmgallery.Backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MovieProgressRepository
        extends JpaRepository<MovieProgress, Long> {

    List<MovieProgress> findByUser(User user);

    Optional<MovieProgress> findByUserAndContentId(
            User user,
            String contentId
    );
}