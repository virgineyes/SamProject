package com.delta.entity;

import javax.persistence.Entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * @author: ACE.CHIU
 * @create: 2023-06-08
 */
@Entity
@ApiModel(value = "Region", description = "區域")
public class Region extends BaseEntity {

  @Getter
  @Setter
  @ApiModelProperty(value = "城市")
  private String city;
  
  @Getter
  @Setter
  @ApiModelProperty(value = "區")
  private String district;
  
}
