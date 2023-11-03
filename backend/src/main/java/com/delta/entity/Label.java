package com.delta.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

/**
 * @author: ACE.CHIU
 * @create: 2023-10-24
 */
@Entity
@ApiModel(value = "Lebel", description = "標籤")
public class Label extends BaseEntity {
  @Getter
  @Setter
  @ApiModelProperty(value = "標籤")
  private String labelname;
}
