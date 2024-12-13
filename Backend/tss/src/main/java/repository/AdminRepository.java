package repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import model.Admin;

import java.util.Optional;

public interface AdminRepository extends MongoRepository<Admin, String> {
    Optional<Admin> findByUsername(String username);
}