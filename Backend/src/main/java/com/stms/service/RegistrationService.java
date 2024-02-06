package com.stms.service;

import com.stms.bean.User;
import com.stms.repo.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    @Autowired
    private UserRepo userRepo;

    public boolean registerUser(User user) {
        // Check if the user with the provided email already exists
        if (userRepo.findByEmailId(user.getEmailId()) != null) {
            return false; // User already exists
        }

        // Save the new user to the database
        userRepo.save(user);
        return true; // Registration successful
    }
}
