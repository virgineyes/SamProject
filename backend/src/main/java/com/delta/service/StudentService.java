package com.delta.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.delta.entity.Student;
import com.delta.repository.BasicJpaRepository;
import com.delta.repository.StudentRepository;

/**
 * @author: ACE.CHIU
 * @create: 2021-03-19
 */
@Service
public class StudentService extends BasicService<Student> {

  @Autowired
  private StudentRepository repository;

  @Override
  public BasicJpaRepository<Student> getRepository() {
    return repository;
  }
}
