package com.filmgallery.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ProgressResponse {

    private String contentId;
    private Integer lastCompletedPosition;
}