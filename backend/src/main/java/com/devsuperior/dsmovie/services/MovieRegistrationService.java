package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.User;
import com.devsuperior.dsmovie.repositories.MovieRepository;

@Service
public class MovieRegistrationService {
	@Autowired
	private MovieRepository movieRepository;
	
	@Transactional
	public MovieDTO saveMovie(MovieDTO dto) {
		
		Movie movie = new Movie();
		
		movie.setTitle(dto.getTitle());
		movie.setScore(dto.getScore());
		movie.setCount(dto.getCount());
		movie.setImage(dto.getImage());
		
		movie = movieRepository.saveAndFlush(movie);
		
		return new MovieDTO(movie);
	}
}