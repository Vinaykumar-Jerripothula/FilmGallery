package com.filmgallery.Backend.controller;

import com.filmgallery.Backend.dto.ProgressResponse;
import com.filmgallery.Backend.dto.SaveProgressRequest;
import com.filmgallery.Backend.service.UniverseProgressService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/progress")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class UniverseProgressController {

    private final UniverseProgressService universeProgressService;

    @PostMapping("/save")
    public String saveProgress(
            @RequestBody SaveProgressRequest request
    ) {
        return universeProgressService.saveProgress(request);
    }
    @GetMapping("/{userId}")
    public List<ProgressResponse> getProgress(
            @PathVariable Long userId
    ) {
        return universeProgressService.getUserProgress(userId);
    }
}