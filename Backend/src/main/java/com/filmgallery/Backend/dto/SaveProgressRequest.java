package com.filmgallery.Backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SaveProgressRequest {

    private Long userId;
    private String contentId;
    private Integer lastCompletedPosition;
}