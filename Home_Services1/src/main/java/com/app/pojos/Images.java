package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


@Entity
@Table(name="img_tb")
public class Images extends BaseEntity {

	public Images(String originalFilename) {
		// TODO Auto-generated constructor stub
	}
	
	private String name;
	private String type;
	@Lob
	private byte[] impSize;
	
	@OneToOne(mappedBy = "serviceImage")
	private HomeService service;
}
