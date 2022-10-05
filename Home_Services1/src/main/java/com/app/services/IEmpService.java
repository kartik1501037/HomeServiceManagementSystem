package com.app.services;

import java.util.List;

import com.app.pojos.Employees;
import com.app.pojos.Feedback;

public interface IEmpService {

	Employees addNewEmployee(Employees emp);

	List<Employees> showAllEmp();

	Employees getDetails(long empid);

	Employees updateService(Employees emp, long empid);

	String removeService(long empid);

	Employees changeStatus(Employees emp, long empid);

	List<Feedback> showAllFeedback();



}
