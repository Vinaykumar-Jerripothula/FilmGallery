package com.filmgallery.Backend.dto;

public class LoginResponse {

    private Long userId;
    private String username;
    private String email;
    private String message;

    public LoginResponse(Long userId,
                         String username,
                         String email,
                         String message) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.message = message;
    }

    public Long getUserId() {
        return userId;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getMessage() {
        return message;
    }
}