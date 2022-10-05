package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Images;

public interface IImageRepository extends JpaRepository<Images,Long> {

}
