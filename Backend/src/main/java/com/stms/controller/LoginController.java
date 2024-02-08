package com.stms.controller;

import com.stms.bean.Response;
import com.stms.bean.User;
import com.stms.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200/")
public class LoginController {

	@Autowired
	LoginService service;
	
	@RequestMapping("/login")
	public ResponseEntity<?> performLogin(@RequestBody User user) {
		Response res=service.login(user);
			return ResponseEntity.ok(res);
	}

}
