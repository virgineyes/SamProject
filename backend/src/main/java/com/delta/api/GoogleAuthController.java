package com.delta.api;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.delta.common.ResourcePaths;
import com.delta.request.GoogleTokenRequest;
import com.delta.request.GoogleUserPerfileResponse;
import com.delta.request.GooleTokenResponse;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;

/**
 * @author: ACE.CHIU
 * @create: 2022-08-16
 */
@Slf4j
@Api(value = "Goolge Auth 2", tags = "Google 驗證")
@RestController
public class GoogleAuthController {
  private RestTemplate restTemplate = new RestTemplate();
  
  @ApiOperation(value = "換 Token")
  @GetMapping(value = ResourcePaths.GOOGLE_AUTH + "/getToken/{code}")
  public String getToken(@ApiParam(value = "code") @PathVariable String code) {
    code = code.replace("%2F", "/");
    log.info("CODE: " + code);
    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_JSON);
    GoogleTokenRequest requestBody = new GoogleTokenRequest();
    requestBody.setClient_id("813671208212-oi8h9oossnqb5c5m2blmffrel0tc9b89.apps.googleusercontent.com");
    requestBody.setClient_secret("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");
    requestBody.setGrant_type("authorization_code");
    requestBody.setRedirect_uri("http://localhost:8080/redirect");
    requestBody.setCode(code);
    HttpEntity<GoogleTokenRequest> request = new HttpEntity<>(requestBody, headers);
    GooleTokenResponse response = restTemplate.postForObject("https://www.googleapis.com/oauth2/v4/token", request, GooleTokenResponse.class);
    log.info("access token: " + response.getAccess_token());
    return response.getAccess_token();
  }
  
  @ApiOperation(value = "使用 Token 拿 User Data")
  @GetMapping(value = ResourcePaths.GOOGLE_AUTH + "/getUserProfile/{token}")
  public GoogleUserPerfileResponse getUserProfile(@ApiParam(value = "token") @PathVariable String token) {
    log.info("token: " + token);
    GoogleUserPerfileResponse response = restTemplate.getForObject("https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token={token}", GoogleUserPerfileResponse.class, token);
    return response;
  }
}
