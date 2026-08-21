package com.filmgallery.Backend.service;

import com.filmgallery.Backend.dto.MovieProgressRequest;
import com.filmgallery.Backend.dto.MovieProgressResponse;
import com.filmgallery.Backend.entity.MovieProgress;
import com.filmgallery.Backend.entity.User;
import com.filmgallery.Backend.repository.MovieProgressRepository;
import com.filmgallery.Backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieProgressService {

    private final MovieProgressRepository movieProgressRepository;
    private final UserRepository userRepository;

    public MovieProgressResponse toggleMovieProgress(
            MovieProgressRequest request
    ) {

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        MovieProgress existingProgress =
                movieProgressRepository
                        .findByUserAndContentId(
                                user,
                                request.getContentId()
                        )
                        .orElse(null);

        if (existingProgress != null) {

            movieProgressRepository.delete(existingProgress);

            return new MovieProgressResponse(
                    request.getContentId(),
                    false
            );
        }

        MovieProgress progress =
                MovieProgress.builder()
                        .user(user)
                        .contentId(request.getContentId())
                        .build();

        movieProgressRepository.save(progress);

        return new MovieProgressResponse(
                request.getContentId(),
                true
        );
    }

    public List<String> getUserMovieProgress(
            Long userId
    ) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return movieProgressRepository
                .findByUser(user)
                .stream()
                .map(MovieProgress::getContentId)
                .toList();
    }
}