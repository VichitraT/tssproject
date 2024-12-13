package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import model.Admin;
import service.AdminService;

import java.util.List;

@RestController
@RequestMapping("/api/admins")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/create")
    public Admin createAdmin(@RequestBody Admin admin) {
        return adminService.createAdmin(admin.getUsername(), admin.getPassword(), admin.getRole());
    }

    @DeleteMapping("/delete/{id}")
    public void deleteAdmin(@PathVariable String id) {
        adminService.deleteAdmin(id);
    }

    @GetMapping("/list")
    public List<Admin> listAdmins() {
        return adminService.listAdmins();
    }
}


