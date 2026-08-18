package com.filmgallery.Backend.dto;

public class LoginResponse {

    private Long userId;
    private String username;
    private String email;
    private String accessToken;
    private String refreshToken;
    private String message;

    public LoginResponse(
            Long userId,
            String username,
            String email,
            String accessToken,
            String refreshToken,
            String message
    ) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
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

    public String getAccessToken() {
        return accessToken;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public String getMessage() {
        return message;
    }
}