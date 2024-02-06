package com.stms.service;

import com.stms.bean.User;
import com.stms.repo.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepo userDao;
    User user;

    public void saveOrUpdateUser(User user) {
        userDao.save(user);
    }

    public void deleteUserById(Long userId) {
        userDao.deleteById(userId);
    }

    public List<User> getAllUsers() {
        Iterator<User> iterator = userDao.findAll().iterator();
        List<User> userList = new ArrayList<>();
        while (iterator.hasNext()) {
            userList.add(iterator.next());
        }
        return userList;
    }
    
    public List<User> getAllSuppliers(String userType) {
        Iterator<User> iterator = userDao.findByUserType("supplier").iterator();
        List<User> supplierList = new ArrayList<>();
        while (iterator.hasNext()) {
            supplierList.add(iterator.next());
        }
        return supplierList;
    }
}

