package com.app.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Orders;

public interface IOrderRepository extends JpaRepository<Orders, Long> {
	@Modifying
	@Qualifier("select * from Orders o where o.status =:status")
	List<Orders> findAllByStatus(String status);

	@Modifying
	@Qualifier("select * from Orders o where o.status =:com")
	List<Orders> findByStatus(String com);

	@Modifying
	@Qualifier("select * from Orders o where o.UserId = :custid")
	List<Orders> findByUserId(long custid);

	//@Qualifier("select o.EmpId from Orders o where o.id=:ordid")
	@Query(value = "select employee_id from orders_tb where id=:ordid",nativeQuery = true)
	long findByEmpId(long ordid);


	
	


}
