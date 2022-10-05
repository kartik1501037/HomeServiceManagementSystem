package com.app.services;

import java.util.List;

import com.app.pojos.Orders;

public interface IOrderService {

	List<Orders> getAllOrders();


	Orders update(Orders order, long ordid);

	List<Orders> findAllByStatus();

	List<Orders> findByStatus();

	Orders placeOrder(Orders order, long custid, long serid);


	Orders getOrder(long ordid);


	List<Orders> getOrders(long custid);


//	Orders assignEmp(Orders order,long ordid);




}
