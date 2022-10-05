package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Orders;
import com.app.services.IOrderService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/admin/orders")
public class OrderController {

	public OrderController() {
		System.out.println("in admin/order controller");
	}

	@Autowired
	private IOrderService orderService;

	// to see all the orders placed
	@GetMapping("/showorders")
	public List<Orders> showAllOrders() {
		System.out.println("in show all orders");
		return orderService.getAllOrders();
	}


	@PutMapping("/updatestatus/{ordid}")
	public ResponseEntity<?> updateStatus(@RequestBody Orders order, @PathVariable long ordid) {
		System.out.println("in update status");
		Orders order1 =orderService.update(order, ordid);
		return  ResponseEntity.ok(order1);
	}

//to fetch all pending request//a button show pending will be connected to this api
	@GetMapping("/pending")
	public ResponseEntity<List<Orders>> fetchPending() {
		System.out.println("in pending order");
		return new ResponseEntity<List<Orders>>(orderService.findAllByStatus(), HttpStatus.OK);
	}

//to fetch all completed request//a button show pending will be connected to this api
	@GetMapping("/completed")
	public ResponseEntity<List<Orders>> fetchCompleted() {
		System.out.println("in completed order");
		return new ResponseEntity<List<Orders>>(orderService.findByStatus(), HttpStatus.OK);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@GetMapping("/{ordid}")
	public ResponseEntity<?> getOrder(@PathVariable long ordid){
	
		return new ResponseEntity(orderService.getOrder(ordid),HttpStatus.OK);
	}
	
//	@PutMapping("/{ordid}/assignemp")
//	public ResponseEntity<?> assignEmp(@PathVariable long ordid,@RequestBody Orders order){
//	
//		return new ResponseEntity(orderService.assignEmp(order,ordid),HttpStatus.OK);
//	}


	
}
