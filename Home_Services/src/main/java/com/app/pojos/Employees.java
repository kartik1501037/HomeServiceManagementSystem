package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;

import org.hibernate.annotations.ForeignKey;
import org.hibernate.annotations.Formula;
import org.hibernate.engine.spi.SessionFactoryImplementor.DeserializationResolver;
import org.springframework.data.annotation.Transient;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.json.JsonWriteFeature;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.deser.AbstractDeserializer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = "service")


@Entity
@Table(name="employee_tb")

public class Employees extends BaseEntity {
	@Column(length = 30)
	private String firstName;
	@Column(length = 30)
	private String lastName;
	private long phoneNum;
	@Column(length = 50)
	private String deptName;
	@DateTimeFormat(iso=ISO.DATE)
	private LocalDate hireDate;
	private double salary;
//	@JsonIgnore
//	@OneToMany(fetch=FetchType.LAZY,mappedBy = "servedBy")
//	private List<Orders> order; 
//	//employee and service
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JoinColumn(name="serviceid",updatable = false)
	@JsonBackReference
	private HomeService service;
	
	@Column(columnDefinition = "varchar(20) default 'FREE'")
	private String empStatus="FREE";
	

	
}
