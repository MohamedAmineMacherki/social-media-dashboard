package com.socialdashboard.analytics.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "analytics_data")
public class AnalyticsData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "platform")
    private String platform;

    @Column(name = "metric_type")
    private String metricType;

    @Column(name = "metric_value")
    private Long metricValue;

    @Column(name = "timestamp")
    private LocalDateTime timestamp;

    @Column(name = "post_id")
    private String postId;

    @Column(name = "additional_data", columnDefinition = "TEXT")
    private String additionalData;

    // Constructors
    public AnalyticsData() {
        this.timestamp = LocalDateTime.now();
    }

    public AnalyticsData(Long userId, String platform, String metricType, Long metricValue) {
        this();
        this.userId = userId;
        this.platform = platform;
        this.metricType = metricType;
        this.metricValue = metricValue;
    }

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getPlatform() { return platform; }
    public void setPlatform(String platform) { this.platform = platform; }

    public String getMetricType() { return metricType; }
    public void setMetricType(String metricType) { this.metricType = metricType; }

    public Long getMetricValue() { return metricValue; }
    public void setMetricValue(Long metricValue) { this.metricValue = metricValue; }

    public LocalDateTime getTimestamp() { return timestamp; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }

    public String getPostId() { return postId; }
    public void setPostId(String postId) { this.postId = postId; }

    public String getAdditionalData() { return additionalData; }
    public void setAdditionalData(String additionalData) { this.additionalData = additionalData; }
}