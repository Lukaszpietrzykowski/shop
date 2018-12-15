package sdaproject.server.converter;

import org.springframework.stereotype.Component;
import sdaproject.server.dto.UserDTO;
import sdaproject.server.entity.RoleEntity;
import sdaproject.server.entity.UserEntity;

import java.util.stream.Collectors;

@Component
public class UserConverter implements Converter<UserEntity, UserDTO> {

    @Override
    public UserEntity convertToEntity(UserDTO dto) {
        UserEntity entity = new UserEntity();

        entity.setId(dto.getId());
        entity.setName(dto.getName());
        entity.setLastname(dto.getLastname());
        entity.setEmail(dto.getEmail());
        entity.setRoles(dto.getRoles().stream().map(RoleEntity::new).collect(Collectors.toList()));

        return entity;
    }

    @Override
    public UserDTO convertToDto(UserEntity entity) {
        UserDTO dto = new UserDTO();

        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setLastname(entity.getLastname());
        dto.setEmail(entity.getEmail());
        dto.setRoles(entity.getRoles().stream().map(RoleEntity::getRole).collect(Collectors.toList()));

        return dto;
    }
}
