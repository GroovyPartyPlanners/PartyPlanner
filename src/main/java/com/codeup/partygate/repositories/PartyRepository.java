package com.codeup.partygate.repositories;

import com.codeup.partygate.models.Party;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;

public interface PartyRepository extends JpaRepository<Party, Long> {
//    Party findByPartyName(String party_name);
    ArrayList<Party> findAll();

}