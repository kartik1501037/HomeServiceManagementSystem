package com.app.pojos;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

@Entity
@Table(name = "user_tb")
public class User extends BaseEntity {

	@Column(length = 30, name = "first_name")
	private String firstName;
	@Column(length = 30, name = "last_name")
	private String lastName;
	@Column(length = 50, unique = true)
	private String email;
	@Column(length = 350, nullable = false)
	private String password;
	@Column(length = 10, unique = true, nullable = false)
	private Long phone;

	@Column(nullable = false, updatable = false)
	@DateTimeFormat(pattern = "YYYY-MM-DD")
	private Date dob;

	@Column(length = 50)
	private String HouseNo;
	@Column(length = 60)
	private String Street;
	@Column(length = 30)
	private String City;
	@Column(length = 50)
	private String State;
	@Column(length = 20)
	private String Pincode;
	@Column(nullable = false, columnDefinition = "varchar(40) default 'USER'")
	private String role = "USER";



}
