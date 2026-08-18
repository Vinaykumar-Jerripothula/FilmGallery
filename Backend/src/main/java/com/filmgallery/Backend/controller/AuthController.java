package com.filmgallery.Backend.controller;

import com.filmgallery.Backend.dto.LoginRequest;
import com.filmgallery.Backend.dto.LoginResponse;
import com.filmgallery.Backend.dto.SignupRequest;
import com.filmgallery.Backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.filmgallery.Backend.dto.RefreshTokenRequest;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    public String signup(@RequestBody SignupRequest request) {
        return authService.signup(request);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }
    @PostMapping("/refresh-token")
    public LoginResponse refreshToken(
            @RequestBody RefreshTokenRequest request
    ) {
        return authService.refreshToken(
                request.getRefreshToken()
        );
    }
}