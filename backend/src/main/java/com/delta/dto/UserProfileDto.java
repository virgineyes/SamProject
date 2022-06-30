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

  private String name;
  
  private String birthday;
  
  private String email;
  
  private String school;
  
  private String phone;
  
  private String guardianName;

  private String guardianPhone;
  
  private String guardianEmail;
  
  private String address;
}
