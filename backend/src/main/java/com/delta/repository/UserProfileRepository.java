package com.delta.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.delta.entity.UserProfile;

/**
 * @author: ACE.CHIU
 * @create: 2021-02-24
 */
@Repository
public interface UserProfileRepository extends BasicJpaRepository<UserProfile> {
	 List<UserProfile> findByWeekDateAndAdditional(String weekDate, boolean additional);
}
