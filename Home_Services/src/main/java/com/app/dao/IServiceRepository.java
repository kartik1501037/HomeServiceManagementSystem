package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.HomeService;

public interface IServiceRepository extends JpaRepository<HomeService, Long> {
Optional<HomeService> findByServiceName(String serviceName);
}
