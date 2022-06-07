package com.delta.resource;

import java.util.Set;

import com.delta.entity.UserProfile;
import com.delta.entity.Registration;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonUnwrapped;

import lombok.Getter;
import lombok.Setter;

public class UserProfileResource extends BaseEntityResource<UserProfile> {

  @JsonInclude(JsonInclude.Include.NON_NULL)
  @JsonUnwrapped
  @Setter
  @Getter
  private UserProfile entity;
  
  @JsonInclude
  public Set<Registration> getRegistrations() {
    return entity.getRegistrations();
  }
  
  @Override
  public String getResourceType() {
    return UserProfile.class.getSimpleName();
  }

}
