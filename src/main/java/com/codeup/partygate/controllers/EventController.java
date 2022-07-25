package com.codeup.partygate.controllers;


import com.codeup.partygate.models.Event;
import com.codeup.partygate.repositories.EventRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class EventController {

    private final EventRepository eventsRepository;

    public EventController(EventRepository eventsRepository) {
        this.eventsRepository = eventsRepository;
    }

    @PostMapping(path = "/save-event/{event_id}")
    public String eventSave(@PathVariable String event_id) {
        Long eventId = Long.getLong(event_id);
        if (eventsRepository.findAll().contains(eventsRepository.getById(eventId))){
            String html = "parties/" + eventId;
            return html;
        }
        Event thisEvent = new Event();
        thisEvent.setId(eventId);
        eventsRepository.save(thisEvent);
        String html = "parties/" + eventId;
        return html;
    }
}