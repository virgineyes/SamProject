package com.delta.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.delta.common.ClarifyEnum;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * @author: ACE.CHIU
 * @create: 2022-07-03
 */
@Entity
@ApiModel(value = "Teacher", description = "老師")
public class Teacher extends BaseEntity {
  private static final long serialVersionUID = -66606257433452604L;

  @Getter
  @Setter
  @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @ApiModelProperty(value = "使用者")
  private UserProfile userProfile;
  
  @Getter
  @Setter
  @ApiModelProperty(value = "照片")
  private String imgUrl;  
  
  @Getter
  @Setter
  @ApiModelProperty(value = "技能")
  private String skill;
  
  @Getter
  @Setter
  @ApiModelProperty(value = "經歷")
  private String experience;  
  
  @Getter
  @Setter
  @ApiModelProperty(value = "所屬公司")
  private String partOfCompany; 
  
  /*
   *  尚未認證，測試中，驗證成功
   *  測試中可以開課，但只能開體驗課
   *  驗證成功，所有客都可以開
   */
  
  @Getter
  @Setter
  @ApiModelProperty(value = "認證")
  private ClarifyEnum clarify;
  
  @Getter
  @ApiModelProperty(value = "課程")
  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = Course_.TEACHER)
  private List<Course> courses;
}
