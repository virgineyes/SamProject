package com.delta.request;

import lombok.Getter;
import lombok.Setter;

/**
 * @author: ACE.CHIU
 * @create: 2022-08-26
 */
@Getter
@Setter
public class GoogleUserPerfileResponse {
  private String id;
  private String name;
  private String given_name;
  private String family_name;
  private String picture;
  private String locale;
}
