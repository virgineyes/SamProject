package com.delta.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

/**
 * @author: ACE.CHIU
 * @create: 2023-03-23
 */
@Getter
@Setter
public class CourseDto {
  
  private String imgUrl;
  
  private String content;
  
  private LocalDateTime time;
  
  private int studentLimit;
  
  private String address;
}
