package com.filmgallery.Backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovieProgressRequest {

    private Long userId;
    private String contentId;
}