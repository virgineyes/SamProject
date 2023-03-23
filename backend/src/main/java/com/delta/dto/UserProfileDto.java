package com.delta.dto;

import lombok.Getter;
import lombok.Setter;

/**
 * @author: ACE.CHIU
 * @create: 2022-06-30
 */
@Getter
@Setter
public class UserProfileDto {
  
  private String googleId;
  
  private String family_name;

  private String given_name;
  
  private String birthday;
  
  private String email;
  
  private String school;
  
  private String phone;
  
  private String address;
}
