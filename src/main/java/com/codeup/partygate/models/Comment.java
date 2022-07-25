package com.codeup.partygate.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    @Column(length = 1000, nullable = false)
    private String comment_content;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "party_id")
    private Party party;

    public Comment() {}

    public Comment(long id) {
        this.id = id;
    }

    public Comment(String comment_content) {
        this.comment_content = comment_content;
    }

    public Comment(String comment_content, User user, Party party) {
        this.comment_content = comment_content;
        this.user = user;
        this.party = party;
    }

    public Comment(long id, String comment_content, User user, Party party) {
        this.id = id;
        this.comment_content = comment_content;
        this.user = user;
        this.party = party;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getComment_content() {
        return comment_content;
    }

    public void setComment_content(String comment_content) {
        this.comment_content = comment_content;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Party getParty() {
        return party;
    }

    public void setParty(Party party) {
        this.party = party;
    }

    public void setParty(long id) {
        this.id = id;
    }
}
