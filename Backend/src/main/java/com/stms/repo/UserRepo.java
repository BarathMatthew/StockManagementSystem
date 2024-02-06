package com.stms.repo;


import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.stms.bean.User;

public interface UserRepo extends CrudRepository<User, Long> {

	List<User> findByUserType(String userType);
	User findByEmailId(String emailId);
	User findByUserName(String userName);
	User findByPassword(String password);
	
}

