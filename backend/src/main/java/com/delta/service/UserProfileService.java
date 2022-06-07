package com.delta.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.delta.dto.UserProfileDto;
import com.delta.entity.UserProfile;
import com.delta.entity.Registration;
import com.delta.repository.BasicJpaRepository;
import com.delta.repository.UserProfileRepository;
import com.delta.repository.RegistrationRepository;

import lombok.extern.slf4j.Slf4j;

/**
 * @author: ACE.CHIU
 * @create: 2021-02-22
 */
@Slf4j
@Service
public class UserProfileService extends BasicService<UserProfile> {

	@Autowired
	private UserProfileRepository repository;

	@Autowired
	private RegistrationRepository registrationRepository;

	@Transactional
	public UserProfile create(UserProfileDto dto) {
		try {
			UserProfile golfClass = new UserProfile();
			golfClass.setClassDate(dto.getClassDate());
			golfClass.setWeekDate(dto.getWeekDate());
			golfClass.setCoach(dto.getCoach());
			golfClass.setRemindAccount(dto.getRemindAccount());
			golfClass.setAdditional(dto.getAdditional());
			return repository.save(golfClass);
		} catch (Exception e) {
			log.error(e.toString(), e);
		}
		return null;
	}

	@Transactional
	public boolean update(String uuid, String name) {
		try {
			UserProfile golfClass = repository.findByUuid(uuid).orElse(new UserProfile());
			if (golfClass.getRemindAccount() == 0) {
				return false;
			} else {
				golfClass.setRemindAccount(golfClass.getRemindAccount() - 1);
				Registration registration = new Registration();
				registration.setName(name);
				registration.setGolfClass(golfClass);
				golfClass.getRegistrations().add(registration);
				repository.save(golfClass);
				return true;
			}
		} catch (Exception e) {
			log.error(e.toString(), e);
			return false;
		}
	}

	@Transactional
	public void addRemindAccound(String uuid, String classUuid) {
		try {
			if (registrationRepository.findByUuid(uuid).isPresent()) {
				registrationRepository.deleteByUuid(uuid);
				UserProfile golfClass = repository.findByUuid(classUuid).orElse(new UserProfile());
				golfClass.setRemindAccount(golfClass.getRemindAccount() + 1);
				repository.save(golfClass);
			}
		} catch (Exception e) {
			log.error(e.toString(), e);
		}
	}

	public UserProfile findByUuid(String uuid) {
		return repository.findByUuid(uuid).orElse(new UserProfile());
	}

	public List<UserProfile> findAll() {
		return repository.findAll();
	}

	public List<UserProfile> findByWeekDateAndAdditional(String weekDate, boolean additional) {
		return repository.findByWeekDateAndAdditional(weekDate, additional);
	}

	@Override
	public BasicJpaRepository<UserProfile> getRepository() {
		return repository;
	}
}
