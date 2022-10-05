package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Employees;
import com.app.pojos.Feedback;
import com.app.services.IEmpService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/admin/employee")
public class EmployeeController {
	
    public EmployeeController() {
    	System.out.println("in admin/employee controller ");
    }
  @Autowired
  private IEmpService empService;
//
//	//this method will show add employee form on the frontend
//		@GetMapping("/addemployee")
//		public String addEmployeeForm() {
//			System.out.println("in add employee form");
//			return "/addemployee";// frontend page
//		}

	//this method will submit the data from frontend
		@PostMapping("/addemployee")
		public ResponseEntity<?> addNewEmployee(@RequestBody Employees emp) {
			// save the newly added service
			
			System.out.println("in add new employee " + emp);
			System.out.println("attach service id "+emp.getService());
			Employees employee = empService.addNewEmployee(emp);			
			return ResponseEntity.ok(employee);

		}

	//Show all the services
		@GetMapping("/showemployees")
		public List<Employees> getAllServices() {

			System.out.println("in show all Employee details");

			return empService.showAllEmp();

		}

	//get employee details to be updated
		@GetMapping("/{empid}")
		public Employees getEmployeeDetails(@PathVariable long empid) {
			System.out.println("in get employee detail for a specific employee " + empid);
			return empService.getDetails(empid);
		}
//
//	//to update employee details
		@PutMapping("/{empid}")
		public Employees updateEmpDetails(@RequestBody Employees emp, @PathVariable long empid) {
			System.out.println("in update serviec method " + emp + empid);
			return empService.updateService(emp, empid);

		}

		@DeleteMapping("/{empid}")
		public String deleteService(@PathVariable long empid) {
			System.out.println("in delete service method " + empid);
			return empService.removeService(empid);
		}
		
		@PutMapping("/{empid}/free")
		public ResponseEntity<Employees>  changeStatus(@PathVariable long empid, @RequestBody Employees emp) {
			System.out.println("in change employee status working");
			return new ResponseEntity<Employees>(empService.changeStatus(emp,empid),HttpStatus.OK);
		}
		
		@GetMapping("/showfeedback")
		public List<Feedback> getAllFeedback() {

			return empService.showAllFeedback();

		}

	

}
