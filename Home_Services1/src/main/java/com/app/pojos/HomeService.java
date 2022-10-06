package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
@Table(name="service_tb")
public class HomeService extends BaseEntity{
	@Column(length = 50,unique = true)
	private String serviceName;
	@Column(length = 150)
	private String shortDesc;
	@Column(length = 400)
	private String longDesc;
	private double serviceCharge;
	private double serviceTax;

	@OneToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	@JoinColumn(name="img_id",referencedColumnName = "id")
	@JsonIgnoreProperties({"service"})
	private Images serviceImage;

	@OneToMany(mappedBy = "service")
	@JsonIgnoreProperties({"service","order","user"})
	private Set<Feedback> feedback=new HashSet<>();
	
}
