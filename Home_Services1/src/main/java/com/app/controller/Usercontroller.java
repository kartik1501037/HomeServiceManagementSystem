package com.app.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.app.pojos.Feedback;
import com.app.pojos.Orders;
import com.app.pojos.User;
import com.app.services.IOrderService;
import com.app.services.IUserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/user")
public class Usercontroller {

	public Usercontroller() {
		System.out.println("in user controller");
	}
	@Autowired
	private IUserService userService;
	@Autowired
	private IOrderService orderService;
	///////////////////////////////////////////////////////////////
//	
//	@GetMapping("/registration")
//	public String addNewUserForm() {
//		System.out.println("add new user form");
//		return "/registration";
//	}
//	
	@PostMapping("/signup")
	public ResponseEntity<?> addNewUser(@RequestBody User user) {
		
		User us=userService.addNewUser(user);
		return ResponseEntity.ok(us);
		//return "redirect:/user/login";
	}
	
	///////////////////////////////////////////////////////////////
	

	
	@PostMapping("/signin") 
	public User processLoginForm(@RequestBody User user, Model map,
			HttpSession session, RedirectAttributes flashMap) {
			System.out.println("entered processloginform"+user.getEmail()+ " "+user.getPassword());
			return userService.authenticateUser(user.getEmail(), user.getPassword());
            }
	
	@GetMapping("/{custid}")
	public User getUserDetails(@PathVariable long custid) {
		return userService.getUser(custid);
	}
	
	@PutMapping("/{custid}")
	public ResponseEntity<?> updateUserDetails(@RequestBody User user, @PathVariable long custid){
		User user1= userService.updateUser(user,custid);
		return ResponseEntity.ok(user1);
	}
	////////////////////////////////////////////////////////////////
    
	@GetMapping("/order/{custid}")
	public ResponseEntity<?> getOrders(@PathVariable long custid){
		List<Orders> user= orderService.getOrders(custid);
		return ResponseEntity.ok(user);
		
	}
	
	
	@GetMapping("/logout")
	public String userLogout(HttpSession session,
			Model map,HttpServletResponse resp,HttpServletRequest request)
	{
		map.addAttribute("user_details", session.getAttribute("user_details"));
		
		session.invalidate();

		resp.setHeader("refresh", "5;url="+request.getContextPath());
		return "/user/logout";
	}
	
	////////////////////////////////////////////////////////////////
	
	
	@PostMapping("/feedback")
	public ResponseEntity<?> getFeedback(@RequestBody Feedback feedback) {
		Feedback feedback1=userService.addNewFeedback(feedback);
		return ResponseEntity.ok(feedback1);
	////////////////////////////////////////////////////////////////
	}
	    
	@PostMapping("/forgetpassword")
	public ResponseEntity<?> resetPassword(@RequestBody User user){
	    return userService.forgotPasswordEmailCheck(user) ;
	}
	
	@PostMapping("/forgetpassword/change")
    public ResponseEntity<?> resetPassowrdChange(@RequestBody User user)
    {
	    return userService.changepassword(user);
    }
	
	@PostMapping("/forgetpassword/gar")
    public ResponseEntity<?> resetPa(@RequestBody User user)
    {
        return userService.changepassword(user);
    }
	
}
