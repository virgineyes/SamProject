package com.delta.entity;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Entity;
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
@Getter
@Setter
@ApiModel(value = "Course", description = "課程")
public class Course extends BaseEntity {

  private static final long serialVersionUID = -5103435175697067139L;
  
  @ManyToOne
  @ApiModelProperty(value = "老師")
  private Teacher teacher;
  
  @ApiModelProperty(value = "照片")
  private String imgUrl; 
  
  @ApiModelProperty(value = "課程內容")
  private String content;

  @ApiModelProperty(value = "課程時間")
  private LocalDateTime time;
  
  @ApiModelProperty(value = "學生限制人數")
  private int studentLimit;
  
  @OneToMany
  @ApiModelProperty(value = "學生")
  private List<UserProfile> students;
}
