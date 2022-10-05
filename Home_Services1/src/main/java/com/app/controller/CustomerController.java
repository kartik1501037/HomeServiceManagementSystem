package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.HomeService;
import com.app.pojos.Orders;
import com.app.services.IOrderService;
import com.app.services.IServices;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/user/{custid}")
public class CustomerController {
	
	public CustomerController() {
		System.out.println("in customer controller");
	}
	@Autowired
	private IServices homeService;
	@Autowired
	private IOrderService orderService;

	//show all services
	@GetMapping("/services")
	public List<HomeService> allServices(@PathVariable long custid) {
		System.out.println("in show all services"+custid);
		return homeService.showAllServices();
	}
	
	@GetMapping("/services/{serid}")
	public HomeService getSpecificService(@PathVariable long serid,@PathVariable long custid) {
		System.out.println("in specific service customer controller "+serid+" "+custid);
		return homeService.getServiceDetails(serid);
	}
	
	@PostMapping("/services/{serid}/placeorder")
	public ResponseEntity<?> placeOrder(@RequestBody Orders order, @PathVariable long custid,@PathVariable long serid){
		System.out.println("cust id"+custid+" ser id "+serid);
		Orders order1= orderService.placeOrder(order,custid,serid);
		return ResponseEntity.ok(order1);
	}
}
