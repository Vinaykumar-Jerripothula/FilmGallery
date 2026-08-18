package com.filmgallery.Backend.service;

import com.filmgallery.Backend.dto.LoginRequest;
import com.filmgallery.Backend.dto.LoginResponse;
import com.filmgallery.Backend.dto.SignupRequest;
import com.filmgallery.Backend.entity.User;
import com.filmgallery.Backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;


@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;




    public String signup(SignupRequest request) {

        System.out.println("========== SIGNUP START ==========");

        System.out.println("Username: " + request.getUsername());
        System.out.println("Email: " + request.getEmail());

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            System.out.println("Email already exists");
            return "Email already exists";
        }

        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        System.out.println("Before save");
        System.out.println("User ID before save: " + user.getId());

        User savedUser = userRepository.save(user);

        System.out.println("After save");
        System.out.println("User ID after save: " + savedUser.getId());
        System.out.println("Saved username: " + savedUser.getUsername());
        System.out.println("Saved email: " + savedUser.getEmail());

        System.out.println("========== SIGNUP END ==========");

        return "Signup successful";
    }

    public LoginResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElse(null);

        if (user == null) {
            return new LoginResponse(
                    null,
                    null,
                    null,
                    null,
                    null,
                    "User not found"
            );
        }

        boolean matched = passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        );

        if (!matched) {
            return new LoginResponse(
                    null,
                    null,
                    null,
                    null,
                    null,
                    "Invalid password"
            );
        }

        String accessToken =
                jwtService.generateAccessToken(user.getId());

        String refreshToken =
                jwtService.generateRefreshToken(user.getId());

        return new LoginResponse(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                accessToken,
                refreshToken,
                "Login successful"
        );
    }

    public LoginResponse refreshToken(String refreshToken) {

        if (!jwtService.isTokenValid(refreshToken)) {

            return new LoginResponse(
                    null,
                    null,
                    null,
                    null,
                    null,
                    "Refresh token expired"
            );
        }

        Long userId =
                jwtService.extractUserId(refreshToken);

        User user = userRepository
                .findById(userId)
                .orElse(null);

        if (user == null) {

            return new LoginResponse(
                    null,
                    null,
                    null,
                    null,
                    null,
                    "User not found"
            );
        }

        String newAccessToken =
                jwtService.generateAccessToken(userId);

        return new LoginResponse(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                newAccessToken,
                refreshToken,
                "Token refreshed"
        );
    }
}