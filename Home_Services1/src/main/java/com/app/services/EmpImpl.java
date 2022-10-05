package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.IEmployeeRepository;
import com.app.dao.IFeedbackRepository;
import com.app.dao.IServiceRepository;
import com.app.pojos.Employees;
import com.app.pojos.Feedback;
import com.app.pojos.HomeService;

@Service
@Transactional
public class EmpImpl implements IEmpService {
	@Autowired
	private IEmployeeRepository emprepo;
	@Autowired
	private IServiceRepository serviceRepo;
	@Autowired
	private IFeedbackRepository feedbackRepo;

	@Override
	public Employees addNewEmployee(Employees emp) {
		System.out.println("in add employee service layer " + emp);
		// code added : madhura
		// get service name n find service pojo ref from it
		HomeService service = serviceRepo.findByServiceName(emp.getDeptName())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Service Name!!!!!"));
		//=> service exists !
		//establish uni dir link from Emp ---> service
		emp.setService(service);
		System.out.println("servic e" +service.getId());
		Employees e = emprepo.save(emp);
		return e;
	}

	@Override
	public List<Employees> showAllEmp() {

		return emprepo.findAll();
	}

	@Override
	public Employees getDetails(long empid) {

		return emprepo.findById(empid).orElseThrow();
	}

	@Override
	public Employees updateService(Employees emp, long empid) {
		emp.setId(empid);
		emprepo.findById(empid).orElseThrow();
		return emprepo.save(emp);
	}

	@Override
	public String removeService(long empid) {
		String msg = "deletion of employee of id: " + empid + " failed!!";
		if (emprepo.existsById(empid)) {
			emprepo.deleteById(empid);
			return "deletion of employee of id: " + empid + " successfull!!";
		}
		return msg;
	}

	@Override
	public Employees changeStatus(Employees emp, long empid) {
		emp.setId(empid);
		emp.setEmpStatus("FREE");
		return emprepo.save(emp);
	}

	@Override
	public List<Feedback> showAllFeedback() {

		return feedbackRepo.findAll();
	}

}
