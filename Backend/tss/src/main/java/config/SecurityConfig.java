package config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
public class SecurityConfig {

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12); // Higher strength for better security
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())) // CSRF configuration
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/admins/login").permitAll()  // Allow login endpoint without authentication
                .requestMatchers("/api/admins/create", "/api/admins/delete/**").hasRole("SUPER_ADMIN")  // Restrict to SUPER_ADMIN role
                .anyRequest().authenticated()  // Require authentication for all other requests
            )
            .formLogin(form -> form
                .loginProcessingUrl("/api/admins/login")  // Custom login processing URL
            )
            .logout(logout -> logout
                .logoutRequestMatcher(new AntPathRequestMatcher("/api/admins/logout"))  // Custom logout URL
                .logoutSuccessUrl("/api/admins/login?logout")  // Redirect to login page after logout
                .deleteCookies("JSESSIONID")  // Delete session cookie on logout
                .invalidateHttpSession(true)  // Invalidate session after logout
            );
        
        return http.build();
    }
}
