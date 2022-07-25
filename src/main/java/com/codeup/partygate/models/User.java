package com.codeup.partygate.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    @Column(length = 50, nullable = false)
    private String first_name;

    @NotBlank
    @Column(length = 50, nullable = false)
    private String last_name;

    @NotBlank
    @Column(length = 75, nullable = false, unique = true)
    private String email;

    @NotBlank
    @Column(length = 50, nullable = false, unique = true)
    private String username;

    @Column(length = 75, nullable = true)
    private String group_name;

    @NotBlank
    @Column(length = 60, nullable = false)
    private String password;

    @Column(length = 100, nullable = true)
    private String user_pic_url;

    @OneToMany (cascade = CascadeType.ALL, mappedBy = "user")
    private List<Party> parties;

    @OneToMany (cascade = CascadeType.ALL, mappedBy = "user")
    private List<Comment> comments;

//    example from https://attacomsian.com/blog/spring-data-jpa-many-to-many-mapping
//    added missing referencedColumnName
    @ManyToMany
    @JoinTable(name = "attendees",
//            , nullable = true, updatable = true
            joinColumns = @JoinColumn(name = "user_id"),
//            , nullable = true, updatable = true
            inverseJoinColumns = @JoinColumn(name = "party_id"))
    private List<Party> tailgateParties;

    public User () {}

    //  NEW CONSTRUCTOR for authentication process (login/logout)
    public User(User copy) {
        id = copy.id; // This line is SUPER important! Many things won't work if it's absent
        first_name = copy.first_name;
        last_name = copy.last_name;
        email = copy.email;
        username = copy.username;
        group_name = copy.group_name;
        password = copy.password;
        user_pic_url = copy.user_pic_url;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getGroup_name() {
        return group_name;
    }

    public void setGroup_name(String group_name) {
        this.group_name = group_name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUser_pic_url() {
        return user_pic_url;
    }

    public void setUser_pic_url(String user_pic_url) {
        this.user_pic_url = user_pic_url;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public List<Party> getParties() {
        return parties;
    }

    public void setParties(List<Party> parties) {
        this.parties = parties;
    }

    public List<Party> getTailgateParties() {
        return tailgateParties;
    }

    public void setTailgateParties(List<Party> tailgateParties) {
        this.tailgateParties = tailgateParties;
    }
}
