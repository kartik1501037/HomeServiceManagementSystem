package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Images;
import com.app.services.IImageService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/admin/image")
public class ImageController {

	@Autowired
	private IImageService imgservice;
	
	public  ImageController() {
		System.out.println("in admin/images controller");
	}

	
	@GetMapping("/download/{serid}")
	public ResponseEntity<ByteArrayResource> downloadImg(@PathVariable long serid){
		System.out.println("in download image");
		Images img = imgservice.getImage(serid);
		return ResponseEntity.ok()
				.contentType(MediaType.parseMediaType(img.getType()))
				.header(org.springframework.http.HttpHeaders.CONTENT_DISPOSITION,
						"img; filename\""+img.getName()+ "\"")
				.body(new ByteArrayResource(img.getImpSize()));
	}
}
