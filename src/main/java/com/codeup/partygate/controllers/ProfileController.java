package com.codeup.partygate.controllers;

import com.codeup.partygate.models.User;
import com.codeup.partygate.repositories.PartyRepository;
import com.codeup.partygate.repositories.UserRepository;
import com.codeup.partygate.services.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;

@Controller
public class ProfileController {

    private final PartyRepository partyRepository;
    private final UserRepository usersRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserService userService;

    public ProfileController(PartyRepository partyRepository, UserRepository usersRepository, PasswordEncoder passwordEncoder, UserService userService) {
        this.partyRepository = partyRepository;
        this.usersRepository = usersRepository;
        this.passwordEncoder = passwordEncoder;
        this.userService = userService;
    }

    @GetMapping("/profile")
    public String showProfilePage(Model model) {
        User user = userService.loggedInUser();
        model.addAttribute("user", user);
        model.addAttribute("parties", partyRepository.findAllByUserId(user.getId()));
        return "views/profile";
    }

    @GetMapping("/profile/{id}")
    public String viewProfileInfo(@PathVariable long id, Model model) {
        User user = userService.loggedInUser();
        model.addAttribute("user", user);
        return "views/edit-profile";
    }

    @PostMapping("/profile/{id}/update")
    public String updateProfileInfo(@Valid User user, Errors validation, Model model) {
        if (validation.hasErrors()) {
            model.addAttribute("errors", validation);
            model.addAttribute("user", user);
            return "views/edit-profile";
        } else {
            String hash = passwordEncoder.encode(user.getPassword());
            user.setPassword(hash);
            usersRepository.saveAndFlush(user);
            return "redirect:/profile";
        }

    }
}