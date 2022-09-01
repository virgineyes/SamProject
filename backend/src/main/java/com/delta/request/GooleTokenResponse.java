package com.delta.request;

import lombok.Getter;
import lombok.Setter;

/**
 * @author: ACE.CHIU
 * @create: 2022-08-26
 */
@Getter
@Setter
public class GooleTokenResponse {
  private String access_token;
  private String expires_in;
  private String id_token;
}
