package sdaproject.server.security;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import sdaproject.server.entity.UserEntity;

import java.util.Optional;

@Component
public class SecurityUtils {

    public Optional<UserEntity> getCurrentUser() {
        return Optional.ofNullable((UserEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
    }
}
