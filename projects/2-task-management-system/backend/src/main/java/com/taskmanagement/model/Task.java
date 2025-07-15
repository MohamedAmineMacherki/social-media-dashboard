package com.taskmanagement.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "tasks")
public class Task {
    @Id
    private String id;
    
    private String title;
    private String description;
    private TaskStatus status;
    private TaskPriority priority;
    
    @DBRef
    private User assignee;
    
    @DBRef
    private User reporter;
    
    @DBRef
    private Project project;
    
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime dueDate;
    
    private List<String> tags;
    private List<Comment> comments;
    private List<Attachment> attachments;
    
    private int estimatedHours;
    private int loggedHours;

    public enum TaskStatus {
        TODO, IN_PROGRESS, IN_REVIEW, DONE
    }

    public enum TaskPriority {
        LOW, MEDIUM, HIGH, URGENT
    }

    // Constructors
    public Task() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        this.status = TaskStatus.TODO;
        this.priority = TaskPriority.MEDIUM;
    }

    public Task(String title, String description, User reporter, Project project) {
        this();
        this.title = title;
        this.description = description;
        this.reporter = reporter;
        this.project = project;
    }

    // Getters and setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public TaskStatus getStatus() { return status; }
    public void setStatus(TaskStatus status) { 
        this.status = status;
        this.updatedAt = LocalDateTime.now();
    }

    public TaskPriority getPriority() { return priority; }
    public void setPriority(TaskPriority priority) { this.priority = priority; }

    public User getAssignee() { return assignee; }
    public void setAssignee(User assignee) { this.assignee = assignee; }

    public User getReporter() { return reporter; }
    public void setReporter(User reporter) { this.reporter = reporter; }

    public Project getProject() { return project; }
    public void setProject(Project project) { this.project = project; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    public LocalDateTime getDueDate() { return dueDate; }
    public void setDueDate(LocalDateTime dueDate) { this.dueDate = dueDate; }

    public List<String> getTags() { return tags; }
    public void setTags(List<String> tags) { this.tags = tags; }

    public List<Comment> getComments() { return comments; }
    public void setComments(List<Comment> comments) { this.comments = comments; }

    public List<Attachment> getAttachments() { return attachments; }
    public void setAttachments(List<Attachment> attachments) { this.attachments = attachments; }

    public int getEstimatedHours() { return estimatedHours; }
    public void setEstimatedHours(int estimatedHours) { this.estimatedHours = estimatedHours; }

    public int getLoggedHours() { return loggedHours; }
    public void setLoggedHours(int loggedHours) { this.loggedHours = loggedHours; }

    // Nested classes
    public static class Comment {
        private String id;
        private String content;
        private User author;
        private LocalDateTime createdAt;

        public Comment() {
            this.createdAt = LocalDateTime.now();
        }

        // Getters and setters
        public String getId() { return id; }
        public void setId(String id) { this.id = id; }

        public String getContent() { return content; }
        public void setContent(String content) { this.content = content; }

        public User getAuthor() { return author; }
        public void setAuthor(User author) { this.author = author; }

        public LocalDateTime getCreatedAt() { return createdAt; }
        public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    }

    public static class Attachment {
        private String id;
        private String filename;
        private String contentType;
        private long size;
        private String url;
        private User uploadedBy;
        private LocalDateTime uploadedAt;

        public Attachment() {
            this.uploadedAt = LocalDateTime.now();
        }

        // Getters and setters
        public String getId() { return id; }
        public void setId(String id) { this.id = id; }

        public String getFilename() { return filename; }
        public void setFilename(String filename) { this.filename = filename; }

        public String getContentType() { return contentType; }
        public void setContentType(String contentType) { this.contentType = contentType; }

        public long getSize() { return size; }
        public void setSize(long size) { this.size = size; }

        public String getUrl() { return url; }
        public void setUrl(String url) { this.url = url; }

        public User getUploadedBy() { return uploadedBy; }
        public void setUploadedBy(User uploadedBy) { this.uploadedBy = uploadedBy; }

        public LocalDateTime getUploadedAt() { return uploadedAt; }
        public void setUploadedAt(LocalDateTime uploadedAt) { this.uploadedAt = uploadedAt; }
    }
}