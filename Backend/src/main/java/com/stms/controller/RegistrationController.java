package com.stms.controller;

import com.stms.bean.User;
import com.stms.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        if (registrationService.registerUser(user)) {
            return "Registration successful";
        } else {
            return "Email already exists";
        }
    }
}
