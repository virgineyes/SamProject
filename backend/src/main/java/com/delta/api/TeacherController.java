package com.delta.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.delta.common.ResourcePaths;
import com.delta.entity.Teacher;
import com.delta.request.TeacherDtoRequest;
import com.delta.service.TeacherService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

/**
 * @author: ACE.CHIU
 * @create: 2022-08-16
 */

@Api(value = "Teacher", tags = "老師管理")
@RestController
public class TeacherController {
  
  @Autowired
  private TeacherService teacherService;

  @ApiOperation(value = "新增老師")
  @PostMapping(value = ResourcePaths.TEACHER + "/create")
  public Teacher create(@RequestBody TeacherDtoRequest request) {
    return teacherService.create(request);
  }
  
  @ApiOperation(value = "維護老師")
  @PostMapping(value = ResourcePaths.TEACHER + "/update")
  public Teacher update(@RequestBody TeacherDtoRequest request) {
    return teacherService.update(request);
  }
}
