
package com.delta.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.delta.entity.Teacher;
import com.delta.entity.UserProfile;
import com.delta.exception.SystemDataExistsException;
import com.delta.repository.BasicJpaRepository;
import com.delta.repository.TeacherRepository;
import com.delta.request.TeacherDtoRequest;

/**
 * @author: ACE.CHIU
 * @create: 2021-02-22
 */
@Service
public class TeacherService extends BasicService<Teacher> {
  
  @Autowired
  private UserProfileService userProfileService;

  @Autowired
  private TeacherRepository repository;

  @Override
  public BasicJpaRepository<Teacher> getRepository() {
    return repository;
  }
  
  public Teacher create(TeacherDtoRequest request) {
    Optional<UserProfile> userProfileOpt = userProfileService.findByEmail(request.getEmail());
    if (!userProfileOpt.isPresent()) {
      throw new SystemDataExistsException("E-mail Could not Find");
    } 
    Teacher teacher = new Teacher();
    teacher.setUserProfile(userProfileOpt.get());
    teacher.setImgUrl(request.getImgUrl());
    return repository.save(teacher);
  }
  
  public Teacher update(TeacherDtoRequest request) {
    Optional<Teacher> teacherOpt = repository.findByUuid(request.getUuid());
    if (!teacherOpt.isPresent()) {
      throw new SystemDataExistsException("Teacher Could not Find");
    } 
    Teacher teacher = teacherOpt.get();
    teacher.setImgUrl(request.getImgUrl());
    return repository.save(teacher);
  }
}
