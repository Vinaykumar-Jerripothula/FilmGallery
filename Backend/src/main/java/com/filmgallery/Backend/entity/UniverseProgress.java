package com.filmgallery.Backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(
        name = "user_universe_progress",
        uniqueConstraints = {
                @UniqueConstraint(
                        columnNames = {"user_id", "content_id"}
                )
        }
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UniverseProgress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "content_id", nullable = false)
    private String contentId;

    @Column(name = "last_completed_position", nullable = false)
    private Integer lastCompletedPosition;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}