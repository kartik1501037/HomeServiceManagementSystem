package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.User;

public interface UserRepository extends JpaRepository<User,Long>{
	
	Optional<User> findByEmailAndPassword(String email, String pass);
	Optional<User> findByEmail(String email);
}

