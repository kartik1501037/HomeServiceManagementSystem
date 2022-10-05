package com.app.pojos;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name = "orders_tb")
public class Orders extends BaseEntity {

	// private String CustName; take from customer table
	@ManyToOne
	@JoinColumn(name = "employee_id", updatable = false)
	// @Column(nullable=false,updatable=false)
	private Employees emp;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "service_id", updatable = false)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	// @Column(nullable=false,updatable=false)
	private HomeService service;
	@ManyToOne
	@JoinColumn(name = "user_id", updatable = false)

	private User user;
	@Column(columnDefinition = "varchar(50) default 'pending'")
	private String status = "pending";// pending/completed
	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false, updatable = false)
	private Date bookingtime;

	@PrePersist
	private void onCreate() {
		bookingtime = new Date();
	}
}
