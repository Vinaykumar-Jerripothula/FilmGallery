package com.filmgallery.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MovieProgressResponse {

    private String contentId;
    private boolean watched;
}