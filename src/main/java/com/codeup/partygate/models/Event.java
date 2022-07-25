package com.codeup.partygate.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "events")
public class Event {

    @Id
    private long id;

//    @NotBlank
//    @Column(length = 400, nullable = false)
//    private String event_name;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "event")
    private List<Party> parties;

    public Event() {}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

//    public String getEvent_name() {
//        return event_name;
//    }
//
//    public void setEvent_name(String event_name) {
//        this.event_name = event_name;
//    }


}
