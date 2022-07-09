package com.delta.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.delta.entity.Teacher;
import com.delta.entity.UserProfile;

/**
 * @author: ACE.CHIU
 * @create: 2022-07-03
 */
@Repository
public interface TeacherRepository extends BasicJpaRepository<Teacher> {
  Optional<Teacher> findByUserProfile(UserProfile userProfile);
}
