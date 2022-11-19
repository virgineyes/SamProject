package com.delta.entity;

import javax.persistence.Entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;


/**
 * @author: ACE.CHIU
 * @create: 2022-06-30
 */
@Entity
@Getter 
@Setter
@ApiModel(value = "User Profile", description = "使用者資調")
public class UserProfile extends BaseEntity {

  private static final long serialVersionUID = 3138912709489043965L;
  
  @ApiModelProperty(value = "GOOGLE ID")
  private String googleId;

  @ApiModelProperty(value = "姓氏")
  private String family_name;
  
  @ApiModelProperty(value = "名子")
  private String given_name;
  
  @ApiModelProperty(value = "生日")
  private String birthday;
  
  @ApiModelProperty(value = "Email")
  private String email;
  
  @ApiModelProperty(value = "學校名稱")
  private String school;
  
  @ApiModelProperty(value = "電話")
  private String phone;
  
  @ApiModelProperty(value = "監護人姓名")
  private String guardianName;

  @ApiModelProperty(value = "監護人連絡電話")
  private String guardianPhone;
  
  @ApiModelProperty(value = "監護人連絡Email")
  private String guardianEmail;
  
  @ApiModelProperty(value = "連絡地址")
  private String address;
}
