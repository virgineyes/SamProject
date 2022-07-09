package com.delta.repository;

import org.springframework.stereotype.Repository;

import com.delta.entity.Course;

/**
 * @author: ACE.CHIU
 * @create: 2022-07-03
 */
@Repository
public interface CourseRepository extends BasicJpaRepository<Course> {
//  Optional<Teacher> findByUserProfile(UserProfile userProfile);
}
