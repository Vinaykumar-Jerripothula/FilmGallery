package com.filmgallery.Backend.repository;

import com.filmgallery.Backend.entity.UniverseProgress;
import com.filmgallery.Backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UniverseProgressRepository
        extends JpaRepository<UniverseProgress, Long> {

    List<UniverseProgress> findByUser(User user);

    Optional<UniverseProgress> findByUserAndContentId(
            User user,
            String contentId
    );
}