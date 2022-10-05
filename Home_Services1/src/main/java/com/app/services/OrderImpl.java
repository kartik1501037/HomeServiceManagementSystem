package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.IEmployeeRepository;
import com.app.dao.IOrderRepository;
import com.app.dao.IServiceRepository;
import com.app.dao.UserRepository;
import com.app.pojos.Employees;
import com.app.pojos.HomeService;
import com.app.pojos.Orders;
import com.app.pojos.User;

@Service
@Transactional
public class OrderImpl implements IOrderService {

	@Autowired
	private IOrderRepository orderRepo;
	@Autowired
	private IEmployeeRepository empRepo;
	@SuppressWarnings("unused")
	@Autowired
	private IEmpService empService;
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private IServiceRepository serviceRepo;

	@Override
	public List<Orders> getAllOrders() {

		return orderRepo.findAll();
	}

	@Override
	public Orders update(Orders order, long ordid) {
		order.setId(ordid);
		order.setStatus("Completed");
		System.out.println("orders"+order);
		Orders order1 = orderRepo.findById(ordid).orElseThrow() ;
		System.out.println("orders"+order1);
		long empid = orderRepo.findByEmpId(ordid);
		System.out.println("EMP id"+empid);
		Employees emp = empRepo.findById(empid).orElseThrow();
		System.out.println("emp status "+emp.getEmpStatus());
		emp.setEmpStatus("FREE");
		System.out.println("emp status "+emp.getEmpStatus());
		return orderRepo.save(order);
	}

	@Override
	public List<Orders> findAllByStatus() {

		return orderRepo.findAllByStatus("pending");
	}

	@Override
	public List<Orders> findByStatus() {

		return orderRepo.findByStatus("Completed");
	}

	@Override
	public Orders placeOrder(Orders order, long custid, long serid) {
		User user = userRepo.findById(custid).orElseThrow();
		HomeService service = serviceRepo.findById(serid).orElseThrow();

		order.setUser(user);
		System.out.println("cust called");
		order.setService(service);
		System.out.println("service called");
		Employees emp = empRepo.findByServiceId(serid);
		System.out.println("in employee details "+emp);
		System.out.println(" emp status "+ emp.getEmpStatus());
		order.setEmp( emp);
		emp.setEmpStatus("WORKING");
		System.out.println(" emp status "+ emp.getEmpStatus());
		
		return orderRepo.save(order);
	}

	@Override
	public Orders getOrder(long ordid) {
		Orders ord1 = orderRepo.findById(ordid).orElseThrow();
		return orderRepo.save(ord1);
	}

	@Override
	public List<Orders> getOrders(long custid) {
		User user1 = userRepo.findById(custid).orElseThrow(()-> new ResourceNotFoundException("Invalid User"));
		System.out.println("user deatils "+user1);
		List<Orders> order = orderRepo.findByUserId(custid);
		System.out.println("cust order"+order);
		return order;
	}


}
