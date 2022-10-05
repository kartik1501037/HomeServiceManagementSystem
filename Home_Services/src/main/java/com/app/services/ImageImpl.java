package com.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.IImageRepository;
import com.app.dao.IServiceRepository;
import com.app.pojos.HomeService;
import com.app.pojos.Images;


@Service
@Transactional
public class ImageImpl implements IImageService {
	
	@Autowired
	private IImageRepository imgRepo;
	@Autowired
	private IServiceRepository serviceRepo;

	@Override
	public Images getImage(long serid) {
		
		HomeService service = serviceRepo.findById(serid).orElseThrow();
		long imgid = service.getServiceImage().getId();
		
		return imgRepo.findById(imgid).orElseThrow(()-> new ResourceNotFoundException("Cannot get Image "+imgid)) ;
	}

}
