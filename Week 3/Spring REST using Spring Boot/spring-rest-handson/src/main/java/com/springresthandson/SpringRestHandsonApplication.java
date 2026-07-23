package com.springresthandson;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ImportResource;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.springresthandson.model.Country;

@SpringBootApplication
@ImportResource("classpath:country.xml")
public class SpringRestHandsonApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringRestHandsonApplication.class, args);

		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

		Country country = context.getBean("country", Country.class);

		System.out.println(country);
	}

}

