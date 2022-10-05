package com.app.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.pojos.HomeService;

public interface IServices {

	HomeService addNewService(HomeService service);

  	List<HomeService> showAllServices();

	HomeService getServiceDetails(long serid);

	HomeService updateService(HomeService service,long serid );

	String removeService(long serid);

	HomeService addImage(long serid,MultipartFile file);

}
