package com.app.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Employees;

public interface IEmployeeRepository extends JpaRepository<Employees,Long> {

	
	@Query(value="select * from employee_tb  where serviceId = :serid and emp_status= 'FREE' Limit 1",nativeQuery = true)
	Employees findByServiceId(long serid);
	



}
