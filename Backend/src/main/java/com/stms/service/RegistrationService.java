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
        
        if (userRepo.findByEmailId(user.getEmailId()) != null) {
            return false; 
        }
        userRepo.save(user);
        return true; 
    }
}
