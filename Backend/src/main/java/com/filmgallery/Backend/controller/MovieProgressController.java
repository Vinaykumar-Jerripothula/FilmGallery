package com.filmgallery.Backend.controller;

import com.filmgallery.Backend.dto.MovieProgressRequest;
import com.filmgallery.Backend.dto.MovieProgressResponse;
import com.filmgallery.Backend.service.MovieProgressService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movie-progress")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class MovieProgressController {

    private final MovieProgressService movieProgressService;

    @PostMapping("/toggle")
    public MovieProgressResponse toggleMovieProgress(
            @RequestBody MovieProgressRequest request
    ) {
        return movieProgressService.toggleMovieProgress(request);
    }

    @GetMapping("/{userId}")
    public List<String> getMovieProgress(
            @PathVariable Long userId
    ) {
        return movieProgressService.getUserMovieProgress(userId);
    }
}