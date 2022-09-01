package com.delta.request;

import lombok.Getter;
import lombok.Setter;

/**
 * @author: ACE.CHIU
 * @create: 2022-08-26
 */
@Getter
@Setter
public class GoogleTokenRequest {
  private String code;
  private String client_id;
  private String client_secret;
  private String grant_type;
  private String redirect_uri;
}
