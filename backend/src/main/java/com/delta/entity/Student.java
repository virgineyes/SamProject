package com.delta.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;


/**
 * @author: ACE.CHIU
 * @create: 2023-03-19
 */
@Entity
@ApiModel(value = "Student", description = "學生")
public class Student extends BaseEntity {

  private static final long serialVersionUID = 1651345380729541023L;

  @Getter
  @Setter
  @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @ApiModelProperty(value = "使用者")
  private UserProfile userProfile;
  
  @Getter
  @Setter
  @ApiModelProperty(value = "學校名稱")
  private String school;
  
  @Getter
  @Setter
  @ApiModelProperty(value = "監護人姓名")
  private String guardianName;

  @Getter
  @Setter
  @ApiModelProperty(value = "監護人連絡電話")
  private String guardianPhone;
  
  @Getter
  @Setter
  @ApiModelProperty(value = "監護人連絡Email")
  private String guardianEmail;
  
  @Getter
  @ApiModelProperty(value = "課程")
  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = Course_.TEACHER)
  private List<Course> courses;
}
