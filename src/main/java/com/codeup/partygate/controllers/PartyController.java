package com.codeup.partygate.controllers;

import com.codeup.partygate.models.Party;
import com.codeup.partygate.repositories.PartyRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;

@Controller
public class PartyController {

    private final PartyRepository partyRepository;

    public PartyController(PartyRepository partyRepository) {
        this.partyRepository = partyRepository;
    }

    @GetMapping(path = "/parties")
    public String showPartyForm(Model model) {
        model.addAttribute("party", new Party());
        ArrayList<Party> parties = partyRepository.findAll();
        model.addAttribute("parties" , parties);
        return "views/parties";
    }

    @PostMapping("/parties")
    public String saveParty(@ModelAttribute Party party){
//        if (party.getEvent_id() == null) {
//            party.setEvent_id("0");
//        }
        partyRepository.save(party);
        return "redirect:/parties";
    }

    @PostMapping("/party/{name}")
    public String showParty(@PathVariable String name) {
        return "redirect:/party";
    }

    @GetMapping("/party-form")
    public String formParty(@PathVariable )
}