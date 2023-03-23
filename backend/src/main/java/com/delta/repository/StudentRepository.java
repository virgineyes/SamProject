package com.delta.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.delta.entity.Student;
import com.delta.entity.UserProfile;

/**
 * @author: ACE.CHIU
 * @create: 2022-07-03
 */
@Repository
public interface StudentRepository extends BasicJpaRepository<Student> {
  Optional<Student> findByUserProfile(UserProfile userProfile);
}
