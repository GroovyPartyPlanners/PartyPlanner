package com.codeup.partygate.repositories;


import com.codeup.partygate.models.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}
