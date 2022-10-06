package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.criteria.Order;

import org.hibernate.annotations.ManyToAny;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity

@Table(name = "feedback_tb")
public class Feedback extends BaseEntity{
    
    @OneToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinColumn(name="img_id",referencedColumnName = "id")
    @JsonIgnoreProperties({"service"})
    private Orders order;
    
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn (name="fk_user_id",referencedColumnName = "id")
    private User user;
    
    
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "service_id", updatable = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler",
        "feedback","serviceImage"})
    private HomeService service;
    
//	@Column(length = 30)
//	private String firstName;
//	@Column(length = 30)
//	private String lastName;
//	@Column(length = 50)
//	private String emailId;
//	@Column(length = 50)
	private String title;
	@Column(length = 350)
	private String message;
	
	

}

