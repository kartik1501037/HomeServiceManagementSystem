package com.app.custom_exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.app.pojos.ResponseClass;

@ControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler{

    @ExceptionHandler(value= {ResourceNotFoundException.class})
    public ResponseEntity<?> handleAccessResourceNotFoundException(
            Exception ex, WebRequest request) {
         ResponseClass rc=new ResponseClass(HttpStatus.NOT_FOUND,ex.getMessage());     
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(rc);
       }
}
