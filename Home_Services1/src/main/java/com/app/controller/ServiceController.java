package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.pojos.HomeService;
import com.app.services.IServices;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/admin/services")
public class ServiceController {

	public ServiceController() {
		System.out.println("in admin/service contoller ");
	}

	@Autowired
	private IServices homeservice;
	


//this method will submit the data from frontend
	@PostMapping("/addservices")
	public ResponseEntity<?> addNewServices(@RequestBody HomeService service) {
		// save the newly added service
		System.out.println("in add new services " + service);
		HomeService hs=homeservice.addNewService(service);
		 return ResponseEntity.ok(hs);
	}
	
	//@PostMapping(value={"/{serid}/image"},consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
	@PostMapping("/{serid}/upload")
	public ResponseEntity<?> addImg(@PathVariable long serid, @RequestParam("file") MultipartFile file){
		System.out.println("in upload images");
		
		       //Images images= uploadImg(file);
		       //service.setServiceImage(images);
		       HomeService hs=homeservice.addImage(serid,file); 
		       return ResponseEntity.ok(hs);
		
		
	}


//Show all the services
	@GetMapping("/showservices")
	public List<HomeService> getAllServices() {

		System.out.println("in show all services");

		return homeservice.showAllServices();

	}

//get service details to be updated
	@GetMapping("/{serid}")
	public HomeService getServiceDetails(@PathVariable long serid) {
		System.out.println("in get service detail for a specific service " + serid);

		return homeservice.getServiceDetails(serid);

	}

//to update service details
	@PutMapping("/{serid}")
	public HomeService updateServiceDetails(@RequestBody HomeService service, @PathVariable long serid) {
		System.out.println("in update serviec method " + service + serid);
		return homeservice.updateService(service, serid);

	}

	@DeleteMapping("/{serid}")
	public String deleteService(@PathVariable long serid) {
		System.out.println("in delete service method " + serid);
		return homeservice.removeService(serid);
	}
}
