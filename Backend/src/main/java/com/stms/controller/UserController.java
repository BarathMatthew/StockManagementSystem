package com.stms.controller;

import com.stms.bean.User;
import com.stms.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200/")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/insertUsers")
    public void performInsert(@RequestBody User user) {
        userService.saveOrUpdateUser(user);
    }

    @PutMapping("/updateUsers")
    public void performUpdate(@RequestBody User user) {
        userService.saveOrUpdateUser(user);
    }

    @DeleteMapping("/deleteUsers/{userId}")
    public void performDelete(@PathVariable Long userId) {
        userService.deleteUserById(userId);
    }

    @GetMapping("/findAllusers")
    public List<User> viewAllUsers() {
        return userService.getAllUsers();
    }
    
    @GetMapping("/findAllsupplier/{userType}")
    public List<User> viewAllUsers(@PathVariable String userType) {
        return userService.getAllSuppliers(userType);
    }
}
