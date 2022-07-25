package com.codeup.partygate.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "parties")
public class Party {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    @Column(length = 100, nullable = false)
    private String party_name;

    @NotBlank
    @Column(length = 10000, nullable = false)
    private String description;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany (cascade = CascadeType.ALL, mappedBy = "party")
    private List<Comment> comments;

    @ManyToMany(mappedBy = "tailgateParties", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<User> attendees;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public Party() {}

    public Party(long id) {
        this.id = id;
    }

    public Party(long id, String name, String description) {
        this.id = id;
        this.party_name = name;
        this.description = description;
    }

    public Set<User> getAttendees() {
        return attendees;
    }

    public void setAttendees(Set<User> attendees) {
        this.attendees = attendees;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getParty_name() {
        return party_name;
    }

    public void setParty_name(String name) {
        this.party_name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

}
