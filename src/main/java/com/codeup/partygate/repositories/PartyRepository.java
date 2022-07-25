package com.codeup.partygate.repositories;

import com.codeup.partygate.models.Party;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PartyRepository extends JpaRepository<Party, Long> {
    List<Party> findAllByUserId(long id);
}