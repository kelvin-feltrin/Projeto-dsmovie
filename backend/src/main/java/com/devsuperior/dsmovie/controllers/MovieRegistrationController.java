package com.devsuperior.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.services.MovieRegistrationService;

@RestController
@RequestMapping(value = "/movieregistration")
public class MovieRegistrationController {
	@Autowired
	private MovieRegistrationService service;
	
	@PostMapping
	public MovieDTO saveMovie(@RequestBody MovieDTO dto) {
		MovieDTO movieDTO = service.saveMovie(dto);
		return movieDTO;
	}
}
