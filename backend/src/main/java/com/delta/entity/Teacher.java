package com.delta.entity;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * @author: ACE.CHIU
 * @create: 2022-07-03
 */
@Entity
@Getter
@Setter
@ApiModel(value = "Teacher", description = "老師")
public class Teacher extends BaseEntity {
  private static final long serialVersionUID = -66606257433452604L;

  @OneToOne
  @ApiModelProperty(value = "使用者")
  private UserProfile userProfile;
  
  @ApiModelProperty(value = "照片")
  private String imgUrl;  
  
  @ApiModelProperty(value = "技能")
  private String skill;
  
  @ApiModelProperty(value = "經歷")
  private String experience;  
}
