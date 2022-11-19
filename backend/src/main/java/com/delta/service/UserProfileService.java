package com.delta.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.delta.dto.UserProfileDto;
import com.delta.entity.UserProfile;
import com.delta.exception.SystemDataExistsException;
import com.delta.repository.BasicJpaRepository;
import com.delta.repository.UserProfileRepository;

/**
 * @author: ACE.CHIU
 * @create: 2021-02-22
 */
//@Slf4j
@Service
public class UserProfileService extends BasicService<UserProfile> {

	@Autowired
	private UserProfileRepository repository;

	public UserProfile update(UserProfileDto userProfileDto) {
	    UserProfile userProfile = repository.findByEmail(userProfileDto.getEmail()).orElse(new UserProfile());
		if (userProfile == null) {
		  throw new SystemDataExistsException("This account is not exist: " + userProfileDto.getEmail());
		} else {
		  userProfile.setAddress(userProfileDto.getAddress());
		  userProfile.setBirthday(userProfileDto.getBirthday());
		  userProfile.setGuardianEmail(userProfileDto.getGuardianEmail());
		  userProfile.setGuardianName(userProfileDto.getGuardianName());
		  userProfile.setGuardianPhone(userProfileDto.getGuardianPhone());
		  userProfile.setSchool(userProfileDto.getSchool());
		  return repository.save(userProfile);
		}
	}

	public UserProfile findByEmail(String email) {
		return repository.findByEmail(email).orElse(null);
	}
	
    public UserProfile findByGoogleId(String googleId) {
      return repository.findByGoogleId(googleId).orElse(null);
    }	
    
	@Override
	public BasicJpaRepository<UserProfile> getRepository() {
		return repository;
	}
}
