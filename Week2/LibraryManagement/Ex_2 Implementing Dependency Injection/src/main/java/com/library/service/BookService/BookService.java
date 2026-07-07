package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    // Setter method - Spring uses this to "inject" BookRepository
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void runService() {
        System.out.println("Exercise 2: BookService is running...");
        bookRepository.saveData();
    }
}