package com.stms.service;

import com.stms.bean.Response;
import com.stms.bean.User;
import com.stms.repo.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

	@Autowired
	UserRepo repo;
	User user;
	
	public Response login(User user) {
		User ref=repo.findByUserName(user.getUserName());
		User pass=repo.findByPassword(user.getPassword());
		if(ref!=null && pass!=null) {
			String value=ref.getPassword();
			String word=pass.getPassword();
			if (value.equals(word)) {
				String res=ref.getUserType();
			if(res.equalsIgnoreCase("admin")) {
				return new Response("Admin Success");
			} else {
				return new Response("User Success");
			}
			}
			else {
				return new Response("Login Fail");
			}
		}  else {
			return new Response("Login Fail");
		}
		
	}	
}
