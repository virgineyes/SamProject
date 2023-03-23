package com.delta.entity;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * @author: ACE.CHIU
 * @create: 2022-07-03
 */
@Entity
@ApiModel(value = "Course", description = "課程")
public class Course extends BaseEntity {

  private static final long serialVersionUID = -5103435175697067139L;
  
  @Getter
  @Setter
  @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
  @ApiModelProperty(value = "老師")
  private Teacher teacher;
  
  @Getter
  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = Student_.USER_PROFILE)
  @ApiModelProperty(value = "學生")
  private List<Student> students;
  
  @Getter
  @Setter
  @ApiModelProperty(value = "照片")
  private String imgUrl; 
  
  @Getter
  @Setter
  @ApiModelProperty(value = "課程內容")
  private String content;
  
  @Getter
  @Setter
  @ApiModelProperty(value = "課程時間")
  private LocalDateTime time;
  
  @Getter
  @Setter
  @ApiModelProperty(value = "學生限制人數")
  private int studentLimit;
  
  @Getter
  @Setter
  @ApiModelProperty(value = "地址")
  private String address;
}
