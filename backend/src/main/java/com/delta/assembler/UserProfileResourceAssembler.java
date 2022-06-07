package com.delta.assembler;

import org.springframework.hateoas.mvc.IdentifiableResourceAssemblerSupport;
import org.springframework.stereotype.Component;

import com.delta.api.UserProfileController;
import com.delta.entity.UserProfile;
import com.delta.resource.UserProfileResource;

/**
 * @author: ACE.CHIU
 * @create: 2021-02-23
 */
@Component
public class UserProfileResourceAssembler extends IdentifiableResourceAssemblerSupport<UserProfile, UserProfileResource> {

  public UserProfileResourceAssembler() {
    super(UserProfileController.class, UserProfileResource.class);
  }
  
  @Override
  public UserProfileResource toResource(UserProfile entity) {
    UserProfileResource resource = instantiateResource(entity);
    resource.setEntity(entity);
    return resource;
  }

}
