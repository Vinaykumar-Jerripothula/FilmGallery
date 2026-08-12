package com.filmgallery.Backend.service;

import com.filmgallery.Backend.dto.ProgressResponse;
import com.filmgallery.Backend.dto.SaveProgressRequest;
import com.filmgallery.Backend.entity.UniverseProgress;
import com.filmgallery.Backend.entity.User;
import com.filmgallery.Backend.repository.UniverseProgressRepository;
import com.filmgallery.Backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UniverseProgressService {

    private final UniverseProgressRepository universeProgressRepository;
    private final UserRepository userRepository;

    public String saveProgress(SaveProgressRequest request) {

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        UniverseProgress progress =
                universeProgressRepository
                        .findByUserAndContentId(
                                user,
                                request.getContentId()
                        )
                        .orElse(
                                UniverseProgress.builder()
                                        .user(user)
                                        .contentId(request.getContentId())
                                        .lastCompletedPosition(0)
                                        .build()
                        );

        progress.setLastCompletedPosition(
                request.getLastCompletedPosition()
        );

        universeProgressRepository.save(progress);

        return "Progress Saved Successfully";
    }

    public List<ProgressResponse> getUserProgress(Long userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return universeProgressRepository.findByUser(user)
                .stream()
                .map(progress -> new ProgressResponse(
                        progress.getContentId(),
                        progress.getLastCompletedPosition()
                ))
                .toList();
    }

}